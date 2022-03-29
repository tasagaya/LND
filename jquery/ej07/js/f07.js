var x;
x=$(document);
x.ready(inicio);

function inicio(){
	var x;
	x=$("#boton1");
	x.click(ponerAttr);

	var x;
	x=$("#boton2");
	x.click(mostrarAttr);

	var x;
	x=$("#boton3");
	x.click(quitarAttr);
}

function ponerAttr(){
	var x=$("#tabla1");
	x.attr("border", "2");
}
