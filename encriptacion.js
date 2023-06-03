var texto = document.getElementById("textoEncriptado")
var enunciadoEncriptacion = document.getElementById("enunciadoEncriptacion");
var imagen = document.getElementById("imagen");
var parrafo = document.getElementById("parrafo");
var botonEncriptar = document.getElementById("boton-encriptar");

alert("llego el js");

function Cambio_letras(){


  let textoEncriptado = texto
  .replace(/e/gi, "enter")
  .replace(/i/gi, "imes")
  .replace(/a/gi, "ai")
  .replace(/o/gi, "ober")
  .replace(/u/gi, "ufat");

  alert(texto.value);
 /*
  if (document.getElementById("texto").value.length !=0){
     
     document.getElementById("enunciadoEncriptacion").value = textoEncriptado;
     document.getElementById("parrafo").textContent = "Texto en criptado con exito";
     document.getElementById("text-encriptado").textContent ="";
  }
    */
}

botonEncriptar.onclick = Cambio_letras;

