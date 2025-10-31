// Ejercício de código Javascript de Generation
// Creado por: Germán D Cruz G.
//Ejercicio 1: Calculadora de Propinas
//- Una app para calcular propinas en restaurantes.
//Crea una función calcularPropina(total, porcentaje) 
// que reciba el total de la cuenta y el porcentaje de propina, 
// y retorne el monto final a pagar (total + propina).

const prompt = require("prompt-sync")();

function calcularPropina(total, porcentaje) {
  let propina = total * (porcentaje / 100);
  return total + propina;
}

//Se asigna un valor numérico de tipo float a la variable digitada
let totalCuenta = parseFloat(prompt("Ingresa el total de la cuenta: "));
let porcentajePropina = parseFloat(prompt("Ingresa el porcentaje de propina: "));
// let totalCuenta = 200000 (prueba)
// let porcentajePropina = 5 (prueba)

let montoFinal = calcularPropina(totalCuenta, porcentajePropina);

console.log("Monto final a pagar: $" + montoFinal + ".");