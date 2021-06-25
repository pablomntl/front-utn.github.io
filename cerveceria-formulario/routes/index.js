var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', async (req, res, next) => {
  var nombre = req.body.nombre;
 var apellido = req.body.apellido;
  var email = req.body.email;
  var tel = req.body.tel;
  var mensaje = req.body.comentarios;
  

  var obj = {
      to: 'pmereles9@gmail.com',
      subject:'CONTACTO WEB',
      html: nombre + "se contactó a través de la web y quiere ´más informacióm a este correo : " + email + ". <br> además, hizo este comentario : " + mensaje + ".<br> su tel es : " + tel
  }
  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d899019e53033c",
      pass: "63a64a3b6ae9a1"
    }
  });

  
  // var transporter = nodemailer.createTransport({
  //     host: process.env.SMTP_HOST,
  //     port: process.env.SMTP_PORT,
  //     auth: {
  //         user: process.env.SMTP_USER,
  //         pass: process.env.SMTP_PASS
  //     }
  // })
 

  var info = await transport.sendMail(obj);

  res.render ('index', {
      message: 'mensaje enviado correctamente'
  })
})

module.exports = router;
