const { Admin, Project, User, Response } = require('../models');

module.exports = {
    getProject : async (req, res) => {
        console.log('요청 데이터', req.body);
        const { email, projectTitle } = req.body;
        const survey = await Promise.all(projectTitle.map(async (title) => {
            const project = { projectTitle : title };
            const evaluatedInfo = await Response.findAll({
                where: {
                    projectTitle: title,
                    evaluatorEmail: email
                }
            })
            .then(data => project.evaluatedInfo = data);
            const projectData = await Project.findOne({
                where: {
                    projectTitle: title
                }
            })
            .then(data => project.questions = data.questions);
            return project;
        }));
        console.log('찾은 데이터', survey);
        res.status(200).send(survey);
    }
}