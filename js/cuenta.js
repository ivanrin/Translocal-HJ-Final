/*
    Estudiantes: Jorge Andrés Medina Castro - Héctor Iván Rincón Ramírez
	Asignatura:Seminario Regional II
	Universidad:Universidad Cooperativa de Colombia
	Fecha: 18 de Abril de 2015
	Docente: Juan Guillermo Gomez
	Proyecto: Emprendimiento, pagina de inicio de sesión 

*/


//Variables para validar dentro de los if de la funcion verificarCampos
var todo_correcto = true;
var msg = "";

function verificarCampos()
{

//Validacion del campo nombre del html
if(document.getElementById('nombre').value == "" ){
 
 msg +="El Campo Nombre esta vacio\n";
 todo_correcto = false;
}
//Validacion del campo email del html
if(document.getElementById('email').value == "" ){
 
 msg +="El Campo E-mail esta vacio\n";
 todo_correcto = false;
}

//Validacion del campo contraseña del html
if(document.getElementById('contrasena').value == "" ){
 
 msg +="El Campo Contraseña esta vacio\n";
 todo_correcto = false;
}

//Validacion del campo confirmar contraseña del html
if(document.getElementById('confirmar').value == "" ){
 
 msg +="El Campo Confirmar Contraseña esta vacio\n";
 todo_correcto = false;
}


//Validacion del campo tipo de usuario del html
if(document.getElementById('tipo').selectedIndex == "" ){
 
 msg +="El Campo Tipo Usuario esta vacio\n";
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
	msg = "Ok Usuario Creado, Felicitaciones!!!";
	alert(msg);
	//Regresamos a la pagina anterior que es la de inicio de sesion 
	window.location="../html/iniciarcrear.html";
	}
}//fin verificarCampos
