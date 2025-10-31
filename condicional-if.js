// Ejercício de código Javascript de Generation
// Creado por: Germán D Cruz G.
// 3. Condicional if
// Tomar decisiones con if, else if, else.

// Ejercicio 1:
// •Pide al usuario su edad.
// •Si es mayor o igual a 18, muestra "Puedes entrar".
// •Si no, muestra "No puedes entrar".

const prompt = require("prompt-sync")()
let edad = prompt("Escriba su edad: ")
if (edad >= 18){
    console.log("Puedes entrar.");
} else {
    console.log("No puedes entrar.");
}

// Ejercicio 2:
// •Pide un número.
// •Si es positivo, muestra "Es positivo".
// •Si es negativo, muestra "Es negativo".
// •Si es cero, muestra "Es cero".

const prompt1 = require("prompt1-sync")()
let numero = prompt("Escriba un número: ")
if (numero > 0){
    console.log("Es positivo.");
} else if (numero < 0){
    console.log("Es negativo.");
    } else {
        console.log("Es cero.")
}