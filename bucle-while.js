// Ejercício de código Javascript de Generation
// Creado por: Germán D Cruz G.
// 4. Bucle while
// Repetir código mientras una condición sea verdadera.

// Ejercicio 1:
// •Pide un número con prompt().
// •Usa un while para contar desde 1 hasta ese número.
// •Muestra cada número en consola.

let numero = prompt("Digita un número: ");
numero = Number(numero);
let i = 1;
while (i <= numero) {
  console.log(i);
  i++; 
}

// Ejercicio 2:
// •Pide una contraseña con prompt().
// •Usa un while para seguir preguntando hasta que ingrese "1234".
// •Cuando acierte, muestra "Contraseña correcta".

let password = prompt("Digita una contraseña de 4 dígitos: ");
while (password !== "1234") {
  console.log("Contraseña incorrecta. Intenta nuevamente.");
}
console.log("Contraseña correcta. Bienvenido.");
