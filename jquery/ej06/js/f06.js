var x;
x=$(document);
x.ready(inicio);

function inicio(){
	var x;
	x=$("#boton1");
	x.click(poo);
}

function poo(){
	var x;
	x=$(".resaltado");
	x.css("color","white");
	x.css("background-color","orange");
}