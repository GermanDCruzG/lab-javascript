// Ejercicio 5: Filtrar Usuarios por Edad
// - Red social.
// Dado un array de usuarios ([{ nombre: "Ana", edad: 25 }, ...]), 
// crea una función filtrarUsuarios(usuarios, edadMinima) que retorne 
// los usuarios que cumplen con la edad mínima, la cual será dada por el usuario, 
// es decir, si el usuario escribe 18, debería decirle que personas de la lista cumplen con tener más de 18.

const prompt = require("prompt-sync")();

const usuarios = [
{ nombre: "Germán", edad: 42 },
{ nombre: "Carlos", edad: 47 },
{ nombre: "Juan", edad: 76 },
{ nombre: "Alejandro", edad: 14 },
{ nombre: "Nicolás", edad: 22 }
];

function filtrarUsuarios(usuarios, edadMinima){
    let resultado = [];
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].edad > edadMinima) {
        resultado.push(usuarios[i]); // Agrega el usuario al array si cumple
      //return usuarios[i]; //devuelve el usuario encontrado
    }
  }
  return resultado; // Retorna el arreglo con los usuarios que cumplen
}

let edadMinima = parseInt(prompt("Ingresa la edad del usuario a buscar: "));
let edadencontrada = filtrarUsuarios(usuarios, edadMinima)

if (edadencontrada.length > 0) {
  console.log("Usuarios con edad mayor a " + edadMinima + ":");
    for (let i = 0; i < edadencontrada.length; i++) {
        console.log("- " + edadencontrada[i].nombre + " (" + edadencontrada[i].edad + " años)");
    }
    } else {
    console.log("No hay usuarios con edad mayor o igual a " + edadMinima);
    }

  