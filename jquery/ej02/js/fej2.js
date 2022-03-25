var x;
x=$(document);
x.ready(inicio);

function inicio(){
	var x;
	x=$("#p1");
	x.click(pulsarParrafo1);
}

function pulsarParrafo1(){
	alert("Has hecho click en el Párrafo 1");
}