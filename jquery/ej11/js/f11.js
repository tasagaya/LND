var x;
x=$(document);
x.ready(inicio);

function inicio(){
	var x=$("#boton1");
	x.click(modificarTabla1);
}

function modificarTabla1()
{
	var x=$("#tabla1 td");
	x.text("Texto tabla 1");
}