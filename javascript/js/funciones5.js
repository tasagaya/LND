addEventListener('load',inicio,false);

function inicio(){
	var imagen=document.querySelector('#icono');
	imagen.addEventListener('keydown',function(){
		imagen.src='imagenes/imagen2.png';
	});

	imagen.addEventListener('keyup',function(e){
		if (true) {}
		imagen.src='imagenes/imagen1.png';
	});
}




