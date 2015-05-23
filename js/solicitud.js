/*
    Estudiantes: Jorge Andrés Medina Castro - Héctor Iván Rincón Ramírez
	Asignatura:Seminario Regional II
	Universidad:Universidad Cooperativa de Colombia
	Fecha: 18 de Abril de 2015
	Docente: Juan Guillermo Gomez
	Proyecto: Emprendimiento, pagina de inicio de sesión 

*/



function solicitud()
{


//Variables para validar dentro de los if de la funcion verificarCampos
var todo_correcto = true;
var msg = "";

//Validacion del campo proveedor del html
if(document.getElementById('proveedor').selectedIndex == "" ){
 
 msg +="El Campos Proveedor esta vacio\n";
 todo_correcto = false;
}

//Validacion del campo nombre del html
if(document.getElementById('nombre').value == "" ){
 
 msg +="El Campo Nombre esta vacio\n";
 todo_correcto = false;
}
//Validacion del campo Apellido del html
if(document.getElementById('apellido').value == "" ){
 
 msg +="El Campo Apellido esta vacio\n";
 todo_correcto = false;
}

//Validacion del campo contraseña del html
if(document.getElementById('telefono').value == "" ){
 
 msg +="El Campo Contraseña esta vacio\n";
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
	msg = "Estimado Usuario en unos minutos el proveedor del servicio se contactara con usted";
	alert(msg);
	//Regresamos a la pagina anterior que es la de inicio de sesion 
	window.location="../html/usuario.html";
	}
}//fin verificarCampos
