var usuarios = [];
      $(document).ready(function ()
      {
        $.getJSON( "usuarios.json", function( json )
        {        
          var datos = json.usuarios;        
          for(i in datos)
          {                    
            usuarios.push([datos[i].nombre, datos[i].correo,datos[i].nacimiento]);          
          }          
        });
      });      
      google.charts.load('current', {'packages':['table']});
      google.charts.setOnLoadCallback(dibujaTabla);
      function dibujaTabla()
      {        
        var tabla = new google.visualization.Table(document.getElementById('tablaUsuarios'));        
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'nombre');
        data.addColumn('string', 'correo');
        data.addColumn('string', 'nacimiento');
        data.addRows(usuarios);
        tabla.draw(data);
      }