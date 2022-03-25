var x;
x=$(document);
x.ready(inicio);

function inicio(){
	var x;
	x=$("li");
	x.click(ocultarElemento);
}

function ocultarElemento(){
	var x;
	x=$(this);	
	x.hide();
}