addEventListener('load',inicio,false);

function inicio(){
	var boton=document.querySelector('#testBtn');
	boton.addEventListener('click',pulsar1,false)
}

function pulsar1(){
	alert('Has hecho click en el botón');
}






// funciones 1.html
function f(){
	document.write('Estoy en clase de 1º DAM B');
}
function f1(a,b){
	document.write('<br>Has pasado los parámetros a= '+a+ ' y b= '+b);
}
function f2(){
	document.write('<br>La función f2 tiene '+arguments.length+' parámetros');
	for (var i = 0; i < arguments.length; i++) {
		document.write('<br>El parámetro '+i+' es '+arguments[i]);
	}
}

function f3(...a){
	document.write('<br>La función f3 tiene '+a.length+' parámetros');
	var i=0;
	while(i<a.length){
		document.write('<br>El parámetro '+i+' es '+a[i]);
		i++;
	}
}

//Eventos 1.html

function pulsaste(){
	// capturamos los elementos nombre, apellido y junto
	var n=document.getElementById('nombre');
	var a=document.getElementById('apellido');

	var j=document.getElementById('junto');
	// volcamos dentro de j los valores de n y a

	j.value='te llamas  '+n.value+ ' '+a.value;
}

//Eventos 2.html

function pulsasteBoton(a){
	alert('Has pulsado en botón '+a);
}

//Eventos3

function sumar(){
	var a=document.getElementById('a');
	a=parseInt(a.value);
	var b=document.getElementById('b');
	b=parseInt(b.value);
	var suma=a+b;
	var c=document.getElementById('c');
	c.value=suma;
}


//Eventos4
function juntar(){
	var nombre=document.querySelector('#n');
	var apellidos=document.querySelector('#a');
	var unir=document.querySelector('#c');
	nombre=nombre.value;
	apellidos=apellidos.value;
	unir.value='Te llamas '+ nombre + '  '+apellidos;

}

//Eventos 5
function cambiarColor()
{
  var s=document.querySelector('#select1');
  document.querySelector('#text1').value=s.selectedIndex;
  document.querySelector('#text2').value=s.options[s.selectedIndex].text;
  document.querySelector('#text3').value=s.options[s.selectedIndex].value;
}

//DOM1
function inyectar(){
	var n=document.querySelector('#nombre');
	var a=document.querySelector('#apellido');
			
	// capturamos la zona en donde voy a añadir el texto
	var r=document.createElement('div');
	r.textContent='Te llamas '+n.value;
	r.id='resultado';
	document.body.appendChild(r);

}
//DOM2
function ponergrupo(){
	//var h2=document.querySelector('#ciclo');
	document.querySelector('#ciclo').remove();
	var r=document.createElement('div');
	r.document.innerText('Nuevo ciclo de grado superior');
	//r.insertAdjacentHTML('afterbegin','1º B ');
	//h2.insertAdjacentHTML('beforeend',' Multiplataforma');

}

//checkbox1
function contarSeleccionados() {   
	var cant=0;
	var lenguajes=''; 
	if (document.querySelector('#checkbox1').checked)   {     
		cant++;
		lenguajes+=ch1.innerHTML+' '; 
	}
	if (document.querySelector('#checkbox2').checked)   {     
		cant++; 
		lenguajes+=ch2.innerHTML+' ';  
	}
	if (document.querySelector('#checkbox3').checked)   {     
		cant++;
		lenguajes+=ch3.innerHTML+' ';  
	}
	if (document.querySelector('#checkbox4').checked)   {     
		cant++;   
		lenguajes+=ch4.innerHTML+' ';
	}   
	var r=document.querySelector('#resultado');

	r.textContent='Conoce ' + cant + ' lenguajes y son '+lenguajes; 
	document.body.appendChild(r);
}

//Formularios comprobar
function comprobarn(){
	var a=document.querySelector('#nombre');
	var r=document.querySelector('#resultado');
	a=a.value;
	var chequeo=new RegExp(/[A-Za-z]/);
	if (chequeo.test(a) || a.length()=0)
			alert('Verdadero');
		else{
			r.textContent='Error en el campo nombre';
			document.body.appendChild(r);
			// a.focus();
		}
}