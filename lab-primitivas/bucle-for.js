// Ejercício de código Javascript de Generation
// Creado por: Germán D Cruz G.
// 5. Bucle for
// Repetir código un número exacto de veces.

// Ejercicio 1:
// •Usa un for para imprimir los números del 1 al 10 en consola.

FOR
for(let i = 1; i < 11; i++) {
    console.log(i);
}

// Ejercicio 2:
// •Pide un número con prompt().
// •Usa un for para mostrar la tabla de multiplicar de ese número (del 1 al 10).

const prompt = require("prompt-sync")()
let numero = prompt("Escriba un número: ")
let tabla
tabla = 0 
for(let i = 1; i < 11; i++) {
    tabla = numero * i
    console.log(tabla);
}

