addEventListener('load',inicio,false);

function inicio(){
	var resultado=document.querySelector('#resultado');
	window.addEventListener('keydown',function(e){
		resultado.innerHTML+=e.keyCode;
	});
}




