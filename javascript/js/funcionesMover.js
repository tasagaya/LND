
      function inicio(){
          imagen=document.querySelector("#imagen1");                
          imagen.style.position='relative';
          imagen.style.left='0px';
          imagen.style.top='0px';
      }
      function pulsar(e){                
          var tecla=e.which||e.keyCode;
          switch tecla
          {
          	 case 37{
              izquierda();
              break;
             }
             case 39{
             	  derecha();
             	  break;
             }
          }
       }
      function izquierda(){
          imagen.style.left=parseInt(imagen.style.left)-5 +'px';
      }
     
      function derecha(){
          imagen.style.left=parseInt(imagen.style.left)+5 +'px';
      }
      
      window.onload=inicio;




