var express = require('express');
var router = express.Router();
var userdebug = require('debug')('helloworld:user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  userdebug("this is user log")
  res.send('respond with a resource');
});

module.exports = router;
