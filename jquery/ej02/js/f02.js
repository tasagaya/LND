var x;
x=$(document);
x.ready(inicio);
function inicio()
{
	var x;
	x=$("#p1");
	x.click(presionParrafo)
}
function presionParrafo()
{
	alert("Has hecho click en el párrafo 1");
}