addEventListener('load',inicio,false);
//var x=0;
function inicio(){
	var imagen=document.querySelector('#icono');
	window.addEventListener('keyup',function(e){
		if (e.keyCode==39) {
			imagen.src='imagenes/imagen2.png';
		}
	});

	window.addEventListener('keyup',function(e){
		if (e.keyCode==37) {
			imagen.src='imagenes/imagen1.png';
		}
	});
}




