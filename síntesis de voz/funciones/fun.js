function mostrar(){
	var mensaje=document.querySelector('#mensaje');
	mensaje=mensaje.value;

	var voz= new SpeechSynthesisUtterance();
	voz.text=mensaje;
	voz.lang='es';
	voz.volume=1;

	speechSynthesis.speak(voz);
}