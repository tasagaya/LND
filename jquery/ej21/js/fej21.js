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
	x.fadeTo("slow",0.2); 
	var x=$("#parrafo2");
	x.fadeTo("slow",1);
} 

function ocultar2() {   
	var x=$("#parrafo2");   
	x.fadeTo("slow",0.2); 
	var x=$("#parrafo1");
	x.fadeTo("slow",1);
}