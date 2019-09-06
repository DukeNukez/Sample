var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/MapApp', function(req, res, next) {
  res.render('index2');
});



module.exports = router;
