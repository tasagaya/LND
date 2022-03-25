addEventListener('load',inicio);

function inicio(){
	var resultado=document.querySelector('#boton');
	resultado.addEventListener('click',sonido);
}

function sonido(){
	var audio=new Audio();
	audio.src='./audios/animals020.mp3';
	audio.volume=1; 
	audio.play();

	video=new Video()
	video.src='./videos/animals020.mp4';
	video.play();
	var resultado=document.querySelector('#mostrar');
	mostrar.innerHTML='<img src="./imagenes/gato.jpg">';

}