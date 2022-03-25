addEventListener('load',inicio,false);

function inicio(){
	var resultado=document.querySelector('#resultado');
	var boton=document.querySelector('#testBtn');
	boton.addEventListener('mousemove',mover,false);
	
}
function mover(){
	var x;
	x=parseInt(resultado.innerHTML);
	x++;
	resultado.innerHTML=x;
}