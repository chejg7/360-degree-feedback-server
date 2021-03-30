const { Admin, Project, User, Response } = require('../models');

module.exports = {
    login : async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({
            where: { email: email, password: password}
        });
        if (!user) {
            res.status(404).send('invalid user');
        } else {
            req.session.save(() => {
                req.session.uid = user.id
                res.status(200).send({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    projectTitle: user.projectTitle
                })
            })
        }
    },

    createProject : async (req, res) => {
        const projects = await Project.findAll({
            where: { projectTitle: req.body.projectTitle }
        });
        console.log(projects)
        if (projects.length > 0) {
            res.status(404).send('이미 존재하는 프로젝트명입니다');
        } else {
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
            await userInfo.map(user => {
                Response.create({
                    projectTitle: req.body.projectTitle,
                    projectID: project.id,
                    surveyTitle: user['진단명'],
                    evaluatedName: user['피평가자 이름'],
                    evaluatedEmail: user['피평가자 이메일'],
                    evaluatorName: user['평가자 이름'],
                    evaluatorEmail: user['평가자 이메일'],
                    relationToEvaluated: user['관계']
                });
                User.findOrCreate({
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
        }
    },

    createSurvey : async (req, res) => {
        console.log(req.body);
        res.status(200).send('success');
    },

    getProjects : async (req, res) => {
        const projects = await Project.findAll();
        res.status(200).send(projects);
    },

    signup : async (req, res) => {
        console.log(req);

    }
}