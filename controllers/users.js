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
            projects.push(project);
        }
        res.status(200).send(projects);
    },

    postResponse : async (req, res) => {
        const { evaluated, data } = req.body;
        console.log('받아온 response', data);
        await Response.update({ response: data }, {
            where: {
                id: evaluated.id
            }
        })
        res.status(200).send('success');
    },
}