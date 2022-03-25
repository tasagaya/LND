var x;
x=$(document);
x.ready(inicio);

function inicio(){
	var x;
	x=$("td");
	x.click(cambiarCSScelda);
}

function cambiarCSScelda(){
	var x;
	x=$(this);	
	x.css("background","blue");
}