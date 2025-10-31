// Ejercício de código Javascript de Generation
// Creado por: Germán D Cruz G.
//Ejercicio 2: Validar Contraseña
// - Formulario de registro.
// Crea una función validarContraseña(contraseña) que retorne true si:
// - Tiene al menos 8 caracteres.
// - Incluye un número.
// - Incluye una mayúscula.

const prompt = require("prompt-sync")();

let contrasena = prompt("Ingresa una contraseña para validar: ");
//let contrasena = "A1234567" (prueba)

if (validarContraseña(contrasena)) {
  console.log("Contraseña válida");
} else {
  console.log("Contraseña inválida. Debe tener al menos 8 caracteres, un número y una mayúscula.");
}

// Función para validar una contraseña
function validarContraseña(contrasena) {
  let tieneNumero = false;
  let tieneMayuscula = false;
  let tieneLongitud = false;

  // Verificar longitud mínima
  if (contrasena.length >= 8) {
    tieneLongitud = true;
  }

  // Recorrer cada caracter de la contraseña
  for (let i = 0; i < contrasena.length; i++) {
    let caracter = contrasena[i];

    // Verificar si hay al menos un número comparando la variable contenida en caracter 
    // con alguno de los dígitos de 0 a 9.
    if (caracter >= '0' && caracter <= '9') {
      tieneNumero = true;
    }

    // Verificar si hay al menos una letra mayúscula
    // verifica que el caracter sea 'A' o alguna letra posterior en el orden de los caracteres
    // y verifica también que el caracter sea 'Z' o alguna letra anterior en el orden de los caracteres.
    if (caracter >= 'A' && caracter <= 'Z') {
      tieneMayuscula = true;
    }
  }

  // Retornar true si cumple todas las condiciones
  if (tieneNumero && tieneMayuscula && tieneLongitud) {
    return true;
  } else {
    return false;
  }
}

