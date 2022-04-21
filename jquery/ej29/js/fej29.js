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
    x.ajaxStart(function(){
      var y=$(document); 
      //y.html('<img src="cargando.gif">');   
      alert('Estoy');
    }); 
    
    x.load(pagina); 
    return false; 
} 
/*function inicioEnvio() 
{ 
    
    
} */