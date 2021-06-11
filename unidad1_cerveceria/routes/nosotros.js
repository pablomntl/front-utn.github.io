var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('nosotros', { title: 'Nosotros tenemos lo que estas buscando' });
});

module.exports = router;
