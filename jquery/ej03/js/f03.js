var x;
x=$(document);
x.ready(inicio);
function inicio()
{
	var x;
	x=$("#t1");
	x.dblclick(presionT1);
	var y;
	y=$("#t2");
	y.click(presionT2);
}
function presionT1(){
	var x;
	x=$("#t1");
	x.css("color","#ff0000");
	x.css("background-color","#ffff00");
	x.css("font-family","Courier");
}

function presionT2(){
	var x;
	x=$("#t2");
	x.css("color","#00ff00");
	x.css("background-color","#ff00ff");
	x.css("font-family","Arial");
}