var x; 
x=$(document); 
x.ready(inicio); 
function inicio(){ 
    var x; 
    x=$("#menu a");
    x.click(presionEnlace); 
} 
function presionEnlace() 
{ 
    var pagina=$(this).attr("href"); 
    var x=$("#detalles"); 
    x.load(pagina); 
    return false; 
} 
