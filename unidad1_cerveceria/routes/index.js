var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cervecería X', subtitle :'La mejor cerveza la encontras aqui'});
});

module.exports = router;
