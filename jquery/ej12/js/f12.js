var x;
x=$(document);
x.ready(inicio);

function inicio(){
	var x=$("#boton1");
	x.click(asociarClase);

	var x=$("#boton2");
	x.click(quitarClase);
}

function asociarClase()
{
	var x=$("#descripcion");
	x.addClass("recuadro");
}
function quitarClase()
{
	var x=$("#descripcion");
	x.removeClass("recuadro");
}
