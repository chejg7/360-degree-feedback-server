const { Admin, Project, User, Response } = require('../models');

module.exports = {
    getProject : async (req, res) => {
        console.log('요청 데이터', req.body);
        const { email, projectTitle } = req.body;
        const projects = [];
        for (let title of projectTitle) {
            const project = { projectTitle: title };
            const evaluatedInfo = await Response.findAll({
                where: {
                    projectTitle: title,
                    evaluatorEmail: email
                }
            });
            project.evaluatedInfo = evaluatedInfo;
            const projectData = await Project.findOne({
                where: {
                    projectTitle: title
                }
            })
            project.questions = projectData.questions;
            project.userInfo = projectData.userInfo;
            projects.push(project);
        }
        console.log('보낼 데이터', projects);
        res.status(200).send(projects);
    },

    
}