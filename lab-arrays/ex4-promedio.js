// Ejercício de código Javascript de Generation
// Creado por: Germán D Cruz G.
// Ejercicio 4: Calcular Promedio de Notas
// - Plataforma educativa.
// Crea una función calcularPromedio(notas) que reciba un 
// array de notas dado por el usuario (separadas por comas) y retorne el promedio (redondeado a 2 decimales).

const prompt = require("prompt-sync")();

// Función que calcula el promedio de notas
function calcularPromedio(notas) {
  let suma = 0;

  // Recorremos el array y sumamos las notas
  for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i];
  }

  // Calculamos el promedio
  let promedio = suma / notas.length;

  // Redondeamos a 2 decimales
  return promedio.toFixed(2);
}

// Pedimos las notas al usuario
let entrada = prompt("Ingresa las notas separadas por comas (ejemplo: 4.5,3.8,5,4.2): ");
//let entrada = "4.5,3.8,5,4.2"

// Convertimos el texto a un array de números
let notasArray = entrada.split(","); // separa por comas
for (let i = 0; i < notasArray.length; i++) {
  notasArray[i] = parseFloat(notasArray[i]); // convierte cada valor a número
}

// Llamamos la función
let promedioFinal = calcularPromedio(notasArray);

// Mostramos el resultado
console.log("El promedio de las notas es: " + promedioFinal);