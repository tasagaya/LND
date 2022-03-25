addEventListener('load',inicio,false);

function inicio(){
	var boton=document.querySelector('.test');
	var func= function(e){
	  var result=document.querySelector('#resultado');
	  result.innerHTML=e.type + '<br>';
	  result.innerHTML+=e.clientX + ',';
	  result.innerHTML+=e.clientY;
	}
boton.addEventListener('click', func);	
}




