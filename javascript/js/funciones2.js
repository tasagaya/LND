addEventListener('load',inicio,false);

function inicio(){
	var texto=document.querySelector('#texto');
	texto.focus();
	texto.addEventListener('keydown',bajar,false);
	texto.addEventListener('keyup',subir,false);
	
}
function bajar(){
	var x=texto.value.length;
	resultado.innerHTML=50-x+' caracteres disponibles';
}
function subir(){
	var x=texto.value.length;
	resultado.innerHTML=50-x+' caracteres disponibles';
}