const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/login', controller.login);
router.post('/createproject', controller.createProject);
router.post('/createsurvey', controller.createSurvey);
router.get('/getprojects', controller.getProjects);
router.post('/signup', controller.signup);

module.exports = router;
