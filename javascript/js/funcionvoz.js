addEventListener('load',inicio);

function inicio(){
	var resultado=document.querySelector('#boton');
	resultado.addEventListener('click',oirMensaje);
}

function oirMensaje(){
	var voz=new SpeechSynthesisUtterance();
	voz.text='Hola a todos los alumnos de primero B';
	voz.lang='de';
	voz.volume=1;
	speechSynthesis.speak(voz);
}