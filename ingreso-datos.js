// Ejercício de código Javascript de Generation
// Creado por: Germán D Cruz G.
// 2. Ingreso de Datos por Teclado
// Usar prompt() para pedir datos al usuario.

// Ejercicio 1:
// •Pide al usuario su año de nacimiento con prompt().
// •Calcula su edad.
// •Muestra.

const prompt = require("prompt-sync")()
let nacimiento = prompt("Escriba su año de nacimiento: ")
nacimiento = Number(nacimiento)
let actual = 2025
let edad = actual - nacimiento
console.log("Tu edad es" + edad + "años." )

// Ejercicio 2:
// •Pide dos números con prompt().
// •Convierte los datos a número.
// •Muestra la suma en consola.

const prompt1 = require("prompt1-sync")()
const prompt2 = require("prompt2-sync")()
let numero1 = prompt("Escriba un número: ")
let numero2 = prompt("Escriba otro número: ")
let suma = numero1 + numero2
console.log("El resultado de la suma es: " + suma )