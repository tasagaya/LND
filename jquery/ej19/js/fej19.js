var x;
x=$(document);
x.ready(inicio);

function inicio(){
	x=$("#parrafo2");
	x.hide();
	var x;
	x=$("#parrafo1");
	x.click(ocultar1);
	x=$("#parrafo2");
	x.click(ocultar2);
}
function ocultar1() {   
	var x=$("#parrafo1");   
	x.fadeOut("slow"); 
	var x=$("#parrafo2");
	x.fadeIn("slow");
} 

function ocultar2() {   
	var x=$("#parrafo2");   
	x.fadeOut("fast"); 
	var x=$("#parrafo1");
	x.fadeIn("fast");
}