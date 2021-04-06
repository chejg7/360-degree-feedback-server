const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/project', controller.getProject);
router.post('/project/finish', controller.finishProject);
router.post('/project/remove', controller.removeProject);

module.exports = router;
