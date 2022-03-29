var x;
x=$(document);
x.ready(inicio);

function inicio(){
	var x;
	x=$("#boton1");
	x.click(elDia);

	var x;
	x=$("#boton2");
	x.click(diarioDeAvisos);

	var x;
	x=$("#boton3");
	x.click(marca);
}

function elDia(){
	var x=$("a");
	x.removeAttr("href");
	x.attr("href", "http://www.eldia.es");
}

function diarioDeAvisos(){
	var x=$("a");
	x.removeAttr("href");
	x.attr("href", "https://diariodeavisos.elespanol.com/");
}

function marca(){
	var x=$("a");
	x.removeAttr("href");
	x.attr("href", "https://www.marca.es");
}