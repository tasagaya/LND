var x; 
x=$(document); 
x.ready(inicializarEventos);

function inicializarEventos() {   
	var x;   
	x=$("#boton1");   
	x.dblclick(presionBoton) 
}  

function presionBoton() {   
	alert("Se presionó el botón desde jQuery"); 
}