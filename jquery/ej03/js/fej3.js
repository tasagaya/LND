var x;
x=$(document);
x.ready(inicio);

function inicio(){
	var x;
	x=$("#t1");
	x.click(cambiarCSSt1);
}

function cambiarCSSt1(){
	var x;
	x=$("#t1");
	x.css("color","#ff00ff");
	x.css("background","blue");
	x.css("font-family","verdana");
}