var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/login.html');
});

router.get('/home', function(req, res, next) {
  res.render('../views/index.html');
});


module.exports = router;
