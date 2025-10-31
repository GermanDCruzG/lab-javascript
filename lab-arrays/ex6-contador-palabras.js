// Ejercício de código Javascript de Generation
// Creado por: Germán D Cruz G.
// Ejercicio 6: Contador de Palabras
// -Editor de texto.
// Crea una función contarPalabras(texto) que retorne el número de palabras en un string (separadas por espacios).

const prompt = require("prompt-sync")();

//Función Contador de palabras
function contarPalabras(texto) {
  //Elimina espacios extra al inicio y al final del texto
  texto = texto.trim();
  //Si el texto está vacío, retorna 0
  if (texto === "") {
    return 0;
  }
  //Divide el texto por los espacios y cuenta los elementos
  let palabras = texto.split(" ");
  return palabras.length;
}

//Pedir al usuario el texto
let frase = prompt("Escribe una frase: ");

//Llamar a la función, aplicarla a frase y mostrar el resultado
let totalPalabras = contarPalabras(frase);
console.log("La frase tiene " + totalPalabras + " palabra(s).");