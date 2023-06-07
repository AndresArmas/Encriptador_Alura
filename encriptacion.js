
var imagen = document.getElementById("imagen");
var parrafo = document.getElementById("parrafo");
var botonEncriptar = document.getElementById("boton-encriptar");
var botonDesencriptar = document.getElementById("boton-desencriptar");
//FUNCION DE ENCCRIPTACION DE TEXTO

function encriptar(){

 var texto = document.getElementById("texto").value
 var enunciadoEncriptacion = document.getElementById("enunciadoEncriptacion");

  let textoEncriptado = texto 
  .replace(/e/gi,"enter")
  .replace(/i/gi,"imes")
  .replace(/a/gi,"ai")
  .replace(/o/gi,"ober")
  .replace(/u/gi,"ufat");


  if (document.getElementById("texto").value.length !=0 ){
  
   enunciadoEncriptacion.textContent = textoEncriptado;
   parrafo.textContent = "Texto incriptado correctamente";
   texto = document.getElementById("texto").value = "";
   imagen.src  = "./imagenes/JNef.gif";
 
  }

  else {

  parrafo.textContent = "Ningun texto encontrado por favor ingresa un texto"; 

  }
  
}

function desencriptar(){

 var texto = document.getElementById("texto").value
 var enunciadoEncriptacion = document.getElementById("enunciadoEncriptacion");

  let textoEncriptado = texto 
  .replace(/enter/gi, "e")
  .replace(/imes/gi,"i")
  .replace(/ai/gi,"a")
  .replace(/ober/gi,"o")
  .replace(/ufat/gi,"u");

  if (document.getElementById("texto").value.length !=0 ){
  
   enunciadoEncriptacion.textContent = textoEncriptado;
   parrafo.textContent = "Ingresa el texto que deses encriptar o desencriptar";
   texto = document.getElementById("texto").value = "";

 
  }

  else {

  parrafo.textContent = "Ningun texto encontrado por favor ingresa un texto"; 

  }
	
} 


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

