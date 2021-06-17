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
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }

   
  });
  var info = await transport.sendMail(obj);
  
 
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto', { title: 'Express Pablo mereles', message: 'mensaje enviado correctamente' });
});

module.exports = router;
