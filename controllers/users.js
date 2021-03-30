const { Admin, Project, User, Response } = require('../models');

module.exports = {
    getProject : async (req, res) => {
        console.log(req.body);
        const { email, projectTitle } = req.body;
        const survey = await Response.findAll({
            where: {
                projectTitle: projectTitle,
                evaluatorEmail: email
            }
        });
        console.log(survey);
        res.status(200).send(survey);
    }
}