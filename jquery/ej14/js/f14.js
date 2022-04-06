var x;
x=$(document);
x.ready(inicio);

function inicio(){
	var x;
	x=$("#boton1");
	x.click(añadirHTML);
	x=$("#boton2");
	x.click(verHTML);
}

function añadirHTML(){
	var x;
	x=$("#formulario");
	x.html('<form>Introducir nombre:<input type="text" id="nombre"><br>Introducir clave:<input type="text" id="clave"><br><input type="submit" value="confirmar"></form>');
}

function verHTML(){
	var x;
	x=$("#formulario");
	alert(x.html());
}