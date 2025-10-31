// Ejercício de código Javascript de Generation
// Creado por: Germán D Cruz G.
// Ejercicio 3: Buscar Producto en Inventario
// - Sistema de gestión de inventario.
// Crea una función buscarProducto(nombre, inventario) que retorne el producto si existe, o null si no.

const prompt = require("prompt-sync")();

let producto = prompt("Digita el nombre del producto que buscas: ");
// let producto = "Creatina" (prueba)

const inventario = [
{ producto: "Creatina", precio: 100000 },
{ producto: "Proteina", precio: 130000 },
{ producto: "Vitaminas", precio: 90000 },
{ producto: "Omega3", precio: 60000 },
{ producto: "Pre-entrenamiento", precio: 80000 }
];

function buscarProducto(producto, inventario) {
  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].producto === producto) {
      return inventario[i]; //devuelve el producto encontrado
    }
  }
  return null; //si no lo encuentra, devuelve null
}

let productoB = prompt("Ingresa el nombre del producto a buscar: ");
//let productoB = "Creatina" (prueba)
let productoE = buscarProducto(productoB, inventario)

if (productoE !== null) {
  console.log("Producto encontrado: ");
  console.log("Nombre: ", productoE.producto);
  console.log("Precio: ", productoE.precio);
} else {
  console.log("Producto no encontrado en el inventario.");
}
