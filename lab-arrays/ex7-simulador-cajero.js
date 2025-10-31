// Ejercicio 7: Simulador de Cajero Automático
// -App bancaria.
// Crea una función retirarDinero(saldo, monto) que:
// Pide al usuario su saldo actual y el monto a retirar.
// Muestra el nuevo saldo o "Fondos insuficientes".

const prompt = require("prompt-sync")();

//Función Retirar dinero
function retirarDinero(saldo, monto) {
  if (monto <= saldo) {
    let nuevosaldo = saldo - monto;
    console.log("Retiro exitoso.");
    console.log("Tu nuevo saldo es: $" + nuevosaldo);
  } else {
    console.log("Fondos insuficientes.");
  }
}
    
//Pedir al usuario el saldo y el monto
let saldo = parseFloat(prompt("Sr. usuario por favor, digite su saldo actual: "));
let monto = parseFloat(prompt("Ahora por favor, digite el monto a retirar: "));

retirarDinero(saldo, monto);

