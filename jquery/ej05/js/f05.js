var x;
x=$(document);
x.ready(inicio);

function inicio(){
	var x;
	x=$("li");
	x.click(ocultarLi);
}

function ocultarLi(){
	var x;
	x=$(this);
	x.hide();
}