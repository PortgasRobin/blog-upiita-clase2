/*obtener una variable para acceder a las funcionalidades de express*/
var express = require("express");
/*Configurar el servidor, appa es el nombre de la aplicación web, puede ser cualkiera*/
var app= express();
/*Hacemos que la página sea dinamica*/
var consolidate= require("consolidate");//libreria que nos permite configurar vistas dinamicas
var dust = require("dustjs-linkedin");//motor para crear vistas dinamicas
app.listen(8081);
/*imprime en consola*/
console.log("Servidor levantado");
/*despacha archivos estaticos*/
app.use("/", express.static(__dirname+"/vistas"));
app.use("/css", express.static(__dirname+"/css"));
app.use("/imagenes", express.static(__dirname+"/imagenes"));
app.use("/videos", express.static(__dirname+"/videos"));


/*configurar el motor de vistas*/
app.set("view engine" , "dust") //nuestras vistas tendran extensión .dust
app.engine("dust", consolidate.dust);//indicando el engine que voy a usar
app.set("views", __dirname + "/vistas");//indicamos la carpeta que contiene las vistas 

/*Hacemos que el servidor ppueda leer los datos que recibe del cliente*/
app.use(express.urlencoded());

/*hasta aqui ya está todo configurado para trabajar como modelo vista controlador*/
/*Ahora hacemos que el servidor responda a peticiones get*/
app.get("/index", function(request,response){
	/*Lógica de como respondere a la peticion /index*/
	response.render("index");
});

/**responder a una petición post**/
app.post("/suscribirse", function(request,response){
	console.log("Email: "+ request.body.email);
	//response.render("respuesta_suscribirse");
	response.render("respuesta_suscribirse",{
		asunto:"Yo soy el servidor",
		email: request.body.email
		
	});
	
});

/**responder a una petición post ejercicio**/
app.get("/contacto", function(request,response){
	/*Lógica de como respondere a la peticion /contacto*/
	response.render("contacto");
});

app.post("/contacto", function(request,response){
	console.log("Email: "+ request.body.nombre);
	console.log("Email: "+ request.body.edad);
	console.log("Email: "+ request.body.website);
	console.log("Email: "+ request.body.email);
	console.log("Email: "+ request.body.comentario);
	//response.render("contacto");
	response.render("respuesta_contacto",{
		datos:"hola ",
		nombre: request.body.nombre,
		edad: request.body.edad,
		website: request.body.website,
		email: request.body.email,
		comentario: request.body.comentario
		
		
	});
	
});


	


