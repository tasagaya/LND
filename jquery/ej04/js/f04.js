var x;
x=$(document);
x.ready(inicio);
function inicio()
{
	var x;
	x=$("td");
	x.click(presionFila);
}


function presionFila()
{
	var x;
	x=$(this);
	x.css("background-color","#ee88ee");
}