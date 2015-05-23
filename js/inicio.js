/*
    Estudiantes: Jorge Andrés Medina Castro - Héctor Iván Rincón Ramírez
	Asignatura:Seminario Regional II
	Universidad:Universidad Cooperativa de Colombia
	Fecha: 18 de Abril de 2015
	Docente: Juan Guillermo Gomez
	Proyecto: Emprendimiento, pagina de inicio de sesión 

*/

function validarusuario(){

	if (document.getElementById('tipo').value == "2"){
		validarProveedor();
	}

	if (document.getElementById('tipo').value == "3"){
		validarUsuarioDos();
	}

}

function validarProveedor()
{

//Variables para validar dentro de los if de la funcion verificarCamposSesion
var todo_correcto = true;
var msg = "";

//Validacion del campo email del html
if(document.getElementById('email').value == "" ){
 
 msg +="El Campo E-mail esta vacio\n";
 todo_correcto = false;
}

//Validacion del campo contraseña y tipo de usuario del html
if(document.getElementById('contrasena').value != "1234" && document.getElementById('tipo').selectedIndex != "Proveedor" ){
 
 msg +="Tipo de Usuario o Contraseña No son Incorrectos\n";
 todo_correcto = false;
}


//Si algunos de los campos entro en los if anteriores, este if mostrara el cumulo de los 
//campos qu estan sin diligenciar
if (todo_correcto == false){
    alert(msg);
	todo_correcto= true;
	msg = "";

}
else {
	msg = "Bienvenido!!!!";
	alert(msg);
	//abre la pagina del proveedor por que es la logeada correctamente

	window.location="../html/proveedor.html";
	
 }
}//fin validarProveedor

function validarUsuarioDos()
{

//Variables para validar dentro de los if de la funcion verificarCamposSesion
var todo_correcto = true;
var msg = "";

//Validacion del campo email del html
if(document.getElementById('email').value == "" ){
 
 msg +="El Campo E-mail esta vacio\n";
 todo_correcto = false;
}

//Validacion del campo contraseña y tipo de usuario del html
if(document.getElementById('contrasena').value != "4321" && document.getElementById('tipo').selectedIndex != "Usuario" ){
 
 msg +="Tipo de Usuario o Contraseña No son Incorrectos\n";
 todo_correcto = false;
}


//Si algunos de los campos entro en los if anteriores, este if mostrara el cumulo de los 
//campos qu estan sin diligenciar
if (todo_correcto == false){
    alert(msg);
	todo_correcto= true;
	msg = "";

}
else {
	msg = "Bienvenido!!!!";
	alert(msg);
	//abre la pagina del usuario por que es la logeada correctamente

	window.location="../html/usuario.html";
	
 }
}//fin verificarCampos
