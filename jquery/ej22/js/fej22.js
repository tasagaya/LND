var x;
x=$(document);
x.ready(inicio);

function inicio(){
	var x;
	x=$("#boton1");
	x.click(ocultarMostrar);
}
function ocultarMostrar() {   
	var x=$("#descripcion");   
	x.toggle("slow"); 
} 