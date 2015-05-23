/*
    Estudiantes: Jorge Andrés Medina Castro - Héctor Iván Rincón Ramírez
	Asignatura:Seminario Regional II
	Universidad:Universidad Cooperativa de Colombia
	Fecha: 18 de Abril de 2015
	Docente: Juan Guillermo Gomez
	Proyecto: Emprendimiento, pagina de inicio de sesión 

*/

function pago()
{

	//variales 
	var todo_correcto=true;
	var msg="";

		//Validacion del campo nombre del html
		if(document.getElementById('nombre').value == "" ){
		 
		 msg +="El Campo Nombre esta vacio\n";
		 todo_correcto = false;
		}
		//Validacion del campo telefono del html
		if(document.getElementById('telefono').value == "" ){
		 
		 msg +="El Campo Telefono esta vacio\n";
		 todo_correcto = false;
		}

		//Validacion del campo cuenta del html
		if(document.getElementById('cuenta').value == "" ){
		 
		 msg +="El Campo Cuenta esta vacio\n";
		 todo_correcto = false;
		}

		//Validacion del campo contrasena contraseña del html
		if(document.getElementById('contrasena').value == "" ){
		 
		 msg +="El Campo Contraseña esta vacio\n";
		 todo_correcto = false;
		}


		//Validacion del campo Cuotas de usuario del html
		if(document.getElementById('cuotas').value == "" ){
		 
		 msg +="El Campo Cuotas esta vacio\n";
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
			msg = "Transacción Exitosa!!!";
			alert(msg);
			//Regresamos a la pagina anterior que es la de proveedor
			window.location="../html/proveedor.html";
			}
}//fin pago
