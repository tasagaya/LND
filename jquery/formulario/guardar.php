<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Guardar cita en la agenda</title>
</head>
<body>
	<?php
	  include("./conexion/conectar.php");

	  $nombre=$_REQUEST['nombre'];
	  $apellidos=$_REQUEST['apellidos'];
	  $edad=$_REQUEST['edad'];
	  $dni=$_REQUEST['nif'];
	  $isla=$_REQUEST['isla'];
	  $fnac=$_REQUEST['fecha'];
	  $telefono=$_REQUEST['telefono'];
	  $hora=$_REQUEST['hora'];
	  $correo=$_REQUEST['email'];
	  
	  $sql="insert into agenda(nombre,apellidos,edad,nif,correo,isla,telefono,hora,fecha) 
	        values ('$nombre','$apellidos','$edad','$dni','$correo','$isla','$telefono','$hora','$fnac')";

	  $consulta=mysqli_query($conexion,$sql)
	            or die('ERROR: La consulta no funciona');

	?>
</body>
</html>