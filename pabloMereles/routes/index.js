var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')
var novedadesModel = require('../models/novedadesModel');
var cloudinary = require('cloudinary').v2;
/* GET home page. */

router.get('/', async function(req, res, next) {
  novedades = await novedadesModel.getNovedades();
  novedades = novedades.splice(0,5);
  novedades = novedades.map(novedad => {
    if (novedad.img_id) {
      const imagen = cloudinary.url(novedad.img_id, {
        width:460,
        crop: 'fill'
      });
      return {
        ...novedad,
        imagen
      }
    }
    else {
      return {
        ...novedad,
        imagen: '/images/noimage.jpg'
      }
    }
  })
  res.render('index', { novedades
  } );
});

 
router.post('/', async (req, res, next) => {

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.tel;
  var mensaje = req.body.comentarios;
  console.log(req.body);

  var obj = {
    to : 'Flavia.ursino@gmail.com',
    subject: 'contacto desde la web',
    html: nombre + " " + apellido + "se contactó a traves y quiere más información a este correo: " + email + ". <br> Además, hizo el siguiente comentario: " + mensaje + ". <br> Su tel es " + telefono 
  }

  var transporter = nodemailer.createTransport ({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

  var info = await transporter.sendMail(obj);

  res.render ('index', {
    message: 'Mensaje enviado correctamente',
  })

});


module.exports = router;