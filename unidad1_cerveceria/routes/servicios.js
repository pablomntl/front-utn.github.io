var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('servicios', { title: 'El mejor servicio' });
});

module.exports = router;
