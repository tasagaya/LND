addEventListener('load',inicio);

function inicio(){
	var resultado=document.querySelector('#boton');
	imagen.addEventListener('click',sonido);
}

function sonido(){
	var audio=new Audio();
	audio.src='./audios/animals020.mp3';
	audio.volume=1; 
	audio.play();

}
