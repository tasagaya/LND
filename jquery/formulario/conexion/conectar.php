<?php
	include("config.php");
	$conexion=mysqli_connect($sitio,$usuario,$clave,$base)
	                or die("ERROR: No pude conectar con MySQL");
?>