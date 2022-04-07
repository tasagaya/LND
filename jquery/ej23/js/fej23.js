var x;
x=$(document);
x.ready(inicio);

function inicio(){
	var x;
	x=$("#descripcion p");
	x.each(resaltarP100);
}

function resaltarP100(){
	var x=$(this); 
	if (x.text().length<100) { 
		x.css("background-color","#ff0"); } 
}