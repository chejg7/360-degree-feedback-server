const { Admin } = require('../models');

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
    }
}