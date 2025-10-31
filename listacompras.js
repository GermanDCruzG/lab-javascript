// Ejercício de código Javascript de Generation
// Creado por: Germán D Cruz G.
// Ejercicio 2: Lista de Compras (Array + for)
// Gestionar una lista dinámica de productos.
// Tareas:
// 1.Usa el constructor ListaCompras para crear una lista vacía (this.productos = []).
// 2.Añade 3 productos con el método agregar().
// 3.Implementa el método mostrar() que use un for para listar los productos numerados (ej:
// "1. Manzanas").
// 4.Muestra la lista completa en consola. -->

//Función constructora de Lista de Compras
function ListaCompras() {
    this.productos = []
    //Dentro de esta función constructora se define un método para agregar productos a la lista
    this.agregar = function(producto) {
        this.productos.push(producto)

    this.mostrar = function() { 
        console.log("Lista de compras: ")
        for (let i = 0; i < this.productos.length; i++) {
            console.log((i + 1) + "." + this.productos[i])
        }
    }
  }
};

//En esta línea se solicita a la función ListaCompras que cree con new un nuevo objeto
let lista1 = new ListaCompras();

//Con el método this.agregar se agregan productos a la lista
lista1.agregar(" Manzanas");
lista1.agregar(" Peras");
lista1.agregar(" Naranjas");

//Se muestra la lista de compras con los elementos agregados con el método agregar
lista1.mostrar();