/*
    Estudiantes: Jorge Andrés Medina Castro - Héctor Iván Rincón Ramírez
	Asignatura:Seminario Regional II
	Universidad:Universidad Cooperativa de Colombia
	Fecha: 18 de Abril de 2015
	Docente: Juan Guillermo Gomez
	Proyecto: Emprendimiento, pagina de inicio de sesión 

*/

function cancelar(){

	//variables
	var sbPregunta="";

	//Pregunta al usuario 

	sbPregunta = confirm("Desea Cancelar el Tramite?");

	if (sbPregunta) {

		window.location="../html/proveedor.html";

	}
	else{

		
		alert('Ok Continue con la transacción');
	}

}