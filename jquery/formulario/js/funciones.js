window.onload=iniciar;

function iniciar(){
	var enviar=document.querySelector('#enviar');
	enviar.addEventListener('click',validar,false);
	var nombre=document.querySelector('#nombre');
	nombre.addEventListener('blur',convertirMayusculas,false);
	var apellidos=document.querySelector('#apellidos');
	apellidos.addEventListener('blur',convertirMayusculas,false);
}

function validar(eventopordefecto){
    
	// Validamos cada uno de los apartados con llamadas a sus funciones correspondientes.
	if (validarcampostexto(this) &&	validarEdad() && validarNif() && validarEmail() && validarIsla() && validarFecha() && validarTelefono() && validarHora() && confirm("¿Deseas enviar el formulario?"))
		return true;
	else{
		// Cancelamos el evento de envío por defecto asignado al boton de submit enviar.
		eventopordefecto.preventDefault();		
		return false;	// Salimos de la función devolviendo false.
	}
}

function validarcampostexto(objeto){
	// A esta función le pasamos un objeto (que en este caso es el botón de enviar.
	// Puesto que validarcampostexto(this) hace referencia al objeto dónde se programó ese evento
	// que fue el botón de enviar.
	var formulario = objeto.form;	// La propiedad form del botón enviar contiene la referencia del formulario dónde está ese botón submit.
	// De esta manera podemos recorrer todos los elementos del formulario, buscando los que son de tipo texto.
	// Para validar que contengan valores.
	for (var i=0; i<formulario.elements.length; i++){
		// Eliminamos la clase Error que estuviera asignada a algún campo.
		formulario.elements[i].className="";
		if (formulario.elements[i].type == "text" && formulario.elements[i].value==""){
			formulario.elements[i].className="error";
			formulario.elements[i].focus();
			var errores=document.querySelector('#errores');
			errores.innerHTML="ERROR: "+formulario.elements[i].name.toUpperCase()+" no puede estar vacío";
			return false;
		}
	}
	return true;	 // Si sale de la función con esta instrucción es que todos los campos de texto son válidos.
}

/**************************************************************
* Función llamada cada vez que se pierda el foco en nombre o apellidos, y que convierte
* el valor introducido a mayúsculas
***************************************************************/
function convertirMayusculas(){
	var nombre=document.querySelector('#nombre');
	nombre.value=nombre.value.toUpperCase();
	var apellidos=document.querySelector('#apellidos');
	apellidos.value=apellidos.value.toUpperCase();
}

/**************************************************************
* Sólo permitimos edades con valores numéricos entre 0 y 105
***************************************************************/
function validarEdad(){
	// Si no es número o es inferior a 0 ó superior a 105
	var edad=document.querySelector('#edad');
	if (isNaN(edad.value) || edad.value <0 || edad.value >105){
			var errores=document.querySelector('#errores');
			errores.innerHTML="ERROR: La edad debe estar entre 0 y 105";
			edad.className="error";
			edad.focus();
			return false;
	}
	// Si llega aquí es que la edad es correcta
	edad.className="";
	return true;
}

/**************************************************************
* Sólo permitimos números de teléfono de 9 dígitos que comiencen
* por 6 ó por 9
***************************************************************/
function validarTelefono(){
	// Comenzará con un 6 ó un 9 y seguirá por 8 dígitos numéricos
	var patron=/^[69]\d{8}$/;
	// Si el dato introducido no cumple el patrón
	var telefono=document.querySelector('#telefono');
	if(!patron.test(telefono.value)){
		var errores=document.querySelector('#errores');
		errores.innerHTML="ERROR: Sólo teléfonos que comiencen por 6 ó 9";
        telefono.className="error";
		telefono.focus();
		return false;
	}
	// Si llega aquí es que el teléfono es correcto
	telefono.className="";
	return true;
}

/**************************************************************
* Comprobamos el email (caracteres)@(caracteres).(de 2 a 4 caracteres)
***************************************************************/
function validarEmail(){
	/* 	Comienza con 2 ó más caracteres alfanuméricos incluidos el guión y el punto, seguido de un símbolo @
		Seguirá con cualquier conjunto de 2 ó más caracteres alfanuméricos incluido el guión y finalizando en un punto.
		Terminará con 2 a 4 caracteres alfanuméricos incluidos el guión
	*/
	var patron = /^[\w-\.]{2,}@([\w-]{2,}\.)+([\w-]{2,4})$/;
	// Si no se cumple el patrón
	var email=document.querySelector('#email');
	if (!patron.test(email.value)){
		var errores=document.querySelector('#errores');
		errores.innerHTML="ERROR: No es un email válido.";
		// Situamos el foco en el campo email y le asignamos la clase error.
		email.focus();
		email.className="error";	
		return false;
	}
	// Si llega aquí es que el email es correcto
	email.className="";	
	return true;
}

/**************************************************************
* Comprobamos que el NIF esté compuesto por 8 dígitos, un guión y una letra mayúscula
***************************************************************/
function validarNif(){
	// 8 Números 1 letra de la A-Z en mayúsculas, separados por un guión
	var patron = /^\d{8}-[A-Z]$/;
	// Si no se cumple el patrón definido
	var nif=document.querySelector('#nif')
	if (!patron.test(nif.value)){
		var errores=document.querySelector('#errores');
		errores.innerHTML="ERROR: No es un número de NIF válido.";
		// Situamos el foco en el campo nif y le asignamos la clase error.
		nif.focus();
		nif.className="error";	
		return false;
	}
	// Si llega aquí es que el número del NIF es correcto
	nif.className="";	
	return true;
}

/**************************************************************
* Función que comprueba se hemos realizado alguna selección de la isla
***************************************************************/
function validarIsla(){
	// Comprueba que la opción seleccionada sea diferente a 0.
	// Si es la 0 es que no ha seleccionado ningún nombre de la isla.
	var isla=document.querySelector("#isla");
	if (isla.selectedIndex==0){
		var errores=document.querySelector('#errores');
		errores.innerHTML="ERROR: No ha seleccionado ninguna isla.";
		// Situamos el foco en el campo isla y le asignamos la clase error.
		isla.focus();
		isla.className="error";	
		return false;
	}
	// Si llega aquí es que sí hemos seleccionado alguna isla
	return true;
}

/**************************************************************
* Función que valida la introducción de un dia entre 1 y 31, un mes entre 1 y 12
* y un año entre 1000 y 2999. Todo separado por un guión o una barra inclinada, y
* que permite la introducción de hasta dos dígitos (para el día y el mes) con 0 delante ó  sin él
***************************************************************/
function validarFecha(){
	/* Debe empezar por 0 (no obligatorio) y un número del 1 al 9, ó por 1 y un dígito decimal, ó por 2 y un
	   dígito decimal, ó por 3 y un dígito entre el 0 y el 1.
	   A continuación admitirá un guión o una barra inclinada.
	   Seguirá con un 0 (no obligatorio) y un dígito entre el 1 y el 9, ó un 1 seguido de dígitos entre el 0 y el 2
	   Seguirá con un guión o una barra inclinada, y terminaremos con un dígito entre el 1 y el 2 seguido de 
	   3 dígitos numéricos
	*/
	var patron=/^((0?[1-9])|(1\d)|(2\d)|(3[0-1]))[-|\/]((0?[1-9])|(1[0-2]))[-|\/]([1-2]\d{3})$/
	// Si no se cumple el patrón definido
	var fecha=document.querySelector('#fecha');
	if (!patron.test(fecha.value)){
		var errores=document.querySelector('#errores');
		errores.innerHTML="Fecha errónea. Introdúzcala de nuevo (dd/mm/aaaa)";
		fecha.focus();
		fecha.className="error";	
		return false;
	}
	// Si llega aquí es que todo ha sido correcto
	return true;
}

/**************************************************************
* Función que comprueba la introducción de una hora entre 01 ó 1 hasta 23,
* y unos minutos entre 01 ó 1 hasta 59. Separados por dos puntos (:)
***************************************************************/
function validarHora(){
	// Comenzamos con un 0 (no obligatorio) y un dígito del 1 al 9, ó un 1 y un dígito numérico, 
	// ó un 2 y un dígito de 0 a 3, continuamos con dos puntos y un dígito entre el 0 y el 5 (no obligatorio)
	// seguido de otro dígito numérico
	var patron=/^(0?[1-9]|1\d|2[0-3]):([0-5]?\d)$/;
	// Si no se cumple el patrón definido
	var hora=document.querySelector('#hora');
	if (!patron.test(hora.value)){
		var errores=document.querySelector('#errores');
		errores.innerHTML="Hora errónea. Introdúzcala de nuevo (hh:mm)";
		hora.focus();
		hora.className="error";	
		return false;
	}
	// Si todo ha sido correcto
	return true;
}