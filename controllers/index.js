const { Admin, Project, User } = require('../models');

module.exports = {
    login : async (req, res) => {
        const { email, password } = req.body;
        const admin = await Admin.findOne({
            where: { email: email, password: password}
        });
        if (!admin) {
            res.status(404).send('invalid user');
        } else {
            req.session.save(() => {
                req.session.uid = admin.id
                res.status(200).send({
                    id: admin.id,
                    name: admin.name,
                    email: admin.email,
                    role: admin.role
                })
            })
        }
    },

    createProject : async (req, res) => {
        const project = await Project.create({
            projectTitle: req.body.projectTitle,
            company: req.body.company,
            managerName: req.body.managerName,
            managerEmail: req.body.managerEmail,
            managerMobile: req.body.managerMobile,
            startDate: req.body.startDate,
            finishDate: req.body.finishDate,
            userInfo: req.body.userInfo,
            questions: req.body.questions
        });
        const manager = await User.create({
            email: req.body.managerEmail,
            name: req.body.managerName,
            password: 'cmoe2021',
            role: 'manager',
            projectTitle: req.body.projectTitle
        });
        const userInfo = req.body.userInfo;
        userInfo.map(user => {
            console.log(user)
            await User.findOrCreate({
                where: { email: user['평가자 이메일']},
                defaults: {
                    password: user['비밀번호'],
                    name: user['평가자 이름'],
                    role: 'user',
                    projectTitle: req.body.projectTitle
                }
            });
        });
        res.status(200).send('success');
    },

    createSurvey : async (req, res) => {
        console.log(req.body);
        res.status(200).send('success');
    },

    getProjects : async (req, res) => {
        console.log(req);

    },

    signup : async (req, res) => {
        console.log(req);

    }
}