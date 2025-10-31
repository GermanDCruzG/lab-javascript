// Ejercício de código Javascript de Generation
// Creado por: Germán D Cruz G.
// Ejercicio 8: Cambio de Moneda
// -App de viajes.
// Crea una función convertirMoneda(monto, monedaDestino) que convierta de pesos a USD o EUR,
// pedir al usuario monto en COP y la moneda con la que desea hacer la conversión.

const prompt = require("prompt-sync")();

//Función Cambio moneda
function convertirMoneda(monto, monedaDestino) {
    let dolar = 3881.8;
    let euro = 4492.8
    let cambio
    if (monedaDestino === 1) {
        cambio = monto / dolar;
        console.log(monto + " COP equivalen a " + cambio.toFixed(2) + " USD.");
    } else if (monedaDestino === 2) {
        cambio = monto / euro;
        console.log(monto + " COP equivalen a " + cambio.toFixed(2) + " EUR.");
    } else {
        console.log("Moneda no válida. Debes digitar 1.USD o 2.EUR.");
    }    
  }

//Pedir al usuario la cifra y la moneda de cambio
let monto = parseFloat(prompt("Sr. usuario por favor, digite la cifra a cambiar en $COP: "));
let monedaDestino = parseFloat(prompt("Ahora por favor, seleccione la moneda de cambio: 1.USD o 2.EUR: "));

convertirMoneda(monto, monedaDestino);





