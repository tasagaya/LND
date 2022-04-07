var x;
x=$(document);
x.ready(inicio);

function inicio(){
	var x;
	x=$("#boton1");
	x.click(ocultar);

	x=$("#boton2");
	x.click(mostrar);
}
function ocultar() {   
	var x=$("#descripcion");   
	x.hide("slow"); 
}  
function mostrar() {   
	var x=$("#descripcion");   
	x.show("fast"); 
} 