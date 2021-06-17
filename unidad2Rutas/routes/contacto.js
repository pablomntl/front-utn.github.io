var express = require('express');
const { validationResult } = require('express-validator');
var router = express.Router();
var nodemailer = require("nodemailer");
const app = require('../app');
router.post('/', async(req, res, next)=> {
  var nombre = req.body.nombre;
  var email = req.body.email;
  var tel = req.body.tel;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'pmereles9@gmail.com',
    subject: 'CONTACTO WEB',
    html: +nombre + "Se contacto a traves de la web y quiere más información a este correro : " + email + ". <br> ademas, hizo el comentario : " +mensaje+ ".<br> su tel es:" +tel
  }

  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "fd10e352bae897",
      pass: "49b732ea6a430a"
    }
  });
  var info = await transport.sendMail(obj);
  
 
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto', { title: 'Express Pablo mereles', message: 'mensaje enviado correctamente' });
});

module.exports = router;
