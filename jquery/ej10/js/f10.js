var x;
x=$(document);
x.ready(inicio);

function inicio(){
	var x=$("#boton1");
	x.click(extraerTexto);

	x=$("#boton2");
	x.click(modificarTexto);

	x=$("#boton3");
	x.click(modificarDatosTabla);
}

function extraerTexto()
{
	var x=$("#parrafo1");
	alert(x.text());
}

function modificarTexto()
{
	var x=$("#parrafo1");
	x.text("Nuevo texto en el párrafo");
}
function modificarDatosTabla()
{
	var x=$("td");
	x.text("texto nuevo a cada celda");
}