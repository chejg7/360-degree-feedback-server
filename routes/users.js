const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/project', controller.getProject);
router.post('/response', controller.postResponse);

module.exports = router;
