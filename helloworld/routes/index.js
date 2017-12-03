var express = require('express');
var router = express.Router();
var indexdebug = require('debug')('helloworld:index');

/* GET home page. */
router.get('/', function(req, res, next) {
  indexdebug("this is index log")
  res.render('index', { title: 'Express' });
});

module.exports = router;
