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

function registrovehiculo()
{

//Validacion del campo modelo del html
if(document.getElementById('modelo').value == "" ){
 
 msg +="El Campo Modelo esta vacio\n";
 todo_correcto = false;
}
//Validacion del campo placa del html
if(document.getElementById('placa').value == "" ){
 
 msg +="El Campo Placa esta vacio\n";
 todo_correcto = false;
}

//Validacion del campo color del html
if(document.getElementById('color').value == "" ){
 
 msg +="El Campo Color esta vacio\n";
 todo_correcto = false;
}

//Validacion del campo aire acondicionado del html
if(document.getElementById('aire').selectedIndex == "" ){
 
 msg +="El Campo Aire Acondicionado esta vacio\n";
 todo_correcto = false;
}

//Validacion del campo tipo de vehículo del html
if(document.getElementById('tipo').selectedIndex == "" ){
 
 msg +="El Campo Tipo Vehículo esta vacio\n";
 todo_correcto = false;
}

//Validacion del campo SOAT del html
if(document.getElementById('soat').value == "" ){
 
 msg +="El Campo Número SOAT esta vacio\n";
 todo_correcto = false;
}


//Validacion del campo compañía del html
if(document.getElementById('compania').value == "" ){
 
 msg +="El Campo Compañia del SOAT esta vacio\n";
 todo_correcto = false;
}


//Validacion del campo vencimiento SOAT del html
if(document.getElementById('vencimiento').value == "" ){
 
 msg +="El Campo Vencimiento del SOAT esta vacio\n";
 todo_correcto = false;
}

//Validacion del campo RCC del html
if(document.getElementById('rcc').value == "" ){
 
 msg +="El Campo Número de seguro RCC esta vacio\n";
 todo_correcto = false;
}


//Validacion del campo compañía del seguro RCC del html
if(document.getElementById('companiados').value == "" ){
 
 msg +="El Campo Compañia del seguro RCC esta vacio\n";
 todo_correcto = false;
}


//Validacion del campo vencimiento del seguro RCC del html
if(document.getElementById('vencimientodos').value == "" ){
 
 msg +="El Campo Vencimiento del seguro RCC esta vacio\n";
 todo_correcto = false;
}


//Validacion del campo RCC del html
if(document.getElementById('rce').value == "" ){
 
 msg +="El Campo Número de seguro RCE esta vacio\n";
 todo_correcto = false;
}


//Validacion del campo compañía del seguro RCC del html
if(document.getElementById('companiatres').value == "" ){
 
 msg +="El Campo Compañia del seguro RCE esta vacio\n";
 todo_correcto = false;
}


//Validacion del campo vencimiento del seguro RCC del html
if(document.getElementById('vencimientotres').value == "" ){
 
 msg +="El Campo Vencimiento del seguro RCE esta vacio\n";
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
	msg = "Vehículo Registrado Exitosamente!!!";
	alert(msg);
	//Regresamos a la pagina anterior que es la de inicio de sesion 
	window.location="../html/proveedor.html";
	}
}//fin verificarCampos
