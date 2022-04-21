var x; 
x=$(document); 
x.ready(inicio); 
function inicio() 
{ 
     var x; 
     x=$("#enviar"); 
     x.click(presionSubmit); 
} 
function presionSubmit() 
{ 
     var v=$("#nro").attr("value"); 
     $.get("pagina1.php",{numero=v},llegadaDatos); 
     return false; 
} 
function llegadaDatos(datos) 
{ 
    alert(datos); 
} 
