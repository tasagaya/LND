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
	x.fadeTo("slow",0.5); 
}  
function mostrar() {   
	var x=$("#descripcion");   
	x.fadeTo("slow",1); 
} 