window.onload=iniciar;
/*Pasar el nombre y los apellidos a mayúsculas*/

function iniciar(){
	var nombre=document.querySelector('#nombre');
	nombre.addEventListener('blur',pasarMayusculas,false);
	var apellidos=document.querySelector('#apellidos');
	apellidos.addEventListener('blur',pasarMayusculas,false);
	var edad=document.querySelector('#edad');
	edad.addEventListener('blur',validarEdad,false);
	var nif=document.querySelector('#nif');
	nif.addEventListener('blur',validarNif,false);
	var correo=document.querySelector('#email');
	correo.addEventListener('blur',validarEmail, false);
	var fecha=document.querySelector('#fecha');
	fecha.addEventListener('blur',validarFecha,false);
	var telefono=document.querySelector('#telefono');
	telefono.addEventListener('blur',validarTelefono,false);
}

function validar(){

}

function pasarMayusculas(){
	var nombre=document.querySelector('#nombre');
	nombre.value=nombre.value.toUpperCase();

	var apellidos=document.querySelector('#apellidos');
	apellidos.value=apellidos.value.toUpperCase();
}

function validarEdad(){
	/*edades entre 6 y 100*/
	var edad=document.querySelector('#edad');
	if (edad.value<=6 || edad.value>=100)
	{
		var errores=document.querySelector('#errores');
		errores.innerHTML='ERROR: edad entre 6 y 100';
		edad.className='error';
		edad.focus();
		return false;
	}
	edad.className='';
	errores.innerHTML='';
	return true;
}

function validarNif() {
	var patron=/^\d{8}-[A-Z a-z]$/;
	var nif=document.querySelector('#nif');
	if (!patron.test(nif.value)){
		var errores=document.querySelector('#errores');
		errores.innerHTML='ERROR: El formato válido es 12345678-A';
		nif.className='error';
		nif.focus();
		return false;
	}
	nif.className='';
	errores.innerHTML='';
	return true;
}


function validarEmail() {
	var patron=/^[\w-\.]{2,}@([\w-]{2,}\.)+([\w-]{2,4})$/;
	var correo=document.querySelector('#email');
	if (!patron.test(correo.value)){
		var errores=document.querySelector('#errores');
		errores.innerHTML='ERROR: El formato del email es incorrecto';
		correo.className='error';
		correo.focus();
		return false;
	}
	correo.className='';
	errores.innerHTML='';
	return true;	 
}

function validarFecha(){
	var patron=/^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;
	var fecha=document.querySelector('#fecha');
	if (!patron.test(fecha.value)){
		var errores=document.querySelector('#errores');
		errores.innerHTML='ERROR: El formato de la fecha es incorrecto';
		fecha.className='error';
		fecha.focus();
		return false;
	}
	fecha.className='';
	errores.innerHTML='';
	return true;
}

function validarTelefono(){
	var patron=/^[6-9]\d{8}$/;
	var telefono=document.querySelector('#telefono');
	if (!patron.test(telefono.value)){
		var errores=document.querySelector('#errores');
		errores.innerHTML='ERROR: El formato del nº de teléfono es incorrecto';
		telefono.className='error';
		telefono.focus();
		return false;
	}
	telefono.className='';
	errores.innerHTML='';
	return true;
}