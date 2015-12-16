var models = require('../models/models.js');
exports.registroContacto=function(req, res){var agenda = models.Contacto.build({ nombres: "Nombre",
									apellidoPaterno: "Paterno",
									apellidoMaterno: "Materno",
									telefonoPersonal: 0,
									telefonoDomicilio: 0,
									cumpleanos: new Date()});

	res.render('registroContacto', {titulo:'Registro de Contacto', agenda: agenda});
}

//request= es una peticion
//response= es una respuesta 
exports.respuestaContacto=function(req,res){res.render('respuestaContacto',{mensaje:'Se registro el contacto correctamente'})}

exports.guardarContacto = function(req, res){
	console.log("ingresa a guardar");
	var contacto = models.Contacto.build (req.body.contacto);
    //a continuacion guardamos los campos que recibimos del formulario
    contacto.save	({fields:["nombres",
    					  "apellidoPaterno",
    					  "apellidoMaterno",
    					  "telefonoPersonal",
    					  "telefonoDomicilio",
    					  "cumpleanos"
    					  ]
    			 }).then(function(){
    			 	console.log("ingresa a redirecr");
    			 	res.render('respuestaContacto', {mensaje:'Se registro el contacto con exito'});
    			 });  	
}
exports.index = function (req, res, next){
    models.Contacto.findAll().then(function(contactos){
         res.render('index',{title: 'Avances en computacion',contactos: contactos});
    })
}
