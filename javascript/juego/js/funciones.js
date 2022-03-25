addEventListener('load',inicio);

var intentos=10;
var gananciasT=10;

function inicio(){
	var boton1=document.querySelector('#b1');
	var boton2=document.querySelector('#b2');
	var boton3=document.querySelector('#b3');

	boton1.addEventListener('click',pulsar);
	boton2.addEventListener('click',pulsar);
	boton3.addEventListener('click',pulsar);
}

function pulsar(){
	var pulsaciones=document.querySelector('#p');
	var ganancias=document.querySelector('#g');

	if (intentos>0){
		intentos--;
		var ganador=parseInt(Math.random()*3)+1;
		if (ganador==this.innerHTML)
			gananciasT+=10;
		else
			gananciasT-=7;
	}
	pulsaciones.innerHTML='Pulsaciones: '+ intentos;
	ganancias.innerHTML='Ganancias: '+ gananciasT;
}
