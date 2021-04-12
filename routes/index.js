const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/login', controller.login);
router.get('/project', controller.getProjects);
router.post('/project/create', controller.createProject);
router.post('/project/finish', controller.finishProject);
router.post('/project/remove', controller.removeProject);
router.post('/createsurvey', controller.createSurvey);
router.post('/responses', controller.getResponses);
router.post('/signup', controller.signup);

module.exports = router;
