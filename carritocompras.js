// Ejercício de código Javascript de Generation
// Creado por: Germán D Cruz G.
// Ejercicio 4: Carrito de Compras con Descuentos (manejo de estados en un objeto
// usando métodos y condicionales (if/else).
// Tareas:
// 1. Crea un objeto Carrito usando una función constructora o clase que tenga:
// •Una propiedad productos (array vacío).
// •Una propiedad total (inicialmente 0).
// 2.Implementa estos métodos:
// •agregarProducto(nombre, precio): Añade el producto al array y suma el precio al total.
// •calcularDescuento():
// •Si el total es mayor a $100, aplica un 10% de descuento y muestra.
// •Si el total es mayor a $50 pero menor o igual a $100, aplica un 5% de descuento y muestra.
// •Si no, mostrar total, sin descuento. 

//Función constructora de Lista de Compras
function Compras() {
    this.Carrito = []
    //Dentro de esta función constructora se define un método para agregar productos a la lista
    this.agregarProducto = function(producto) {
    this.Carrito.push(producto)       
    }

    this.calcularDescuento = function() {
        let total = 0
        // Calcular total sumando los precios de los productos
        for (let i = 0; i < this.Carrito.length; i++) {
            total += this.Carrito[i].precio;
    }
        console.log("Lista de compras:");
        for (let i = 0; i < this.Carrito.length; i++) {
                console.log((i + 1) + ". " + this.Carrito[i].nombre + " - $" + this.Carrito[i].precio);
    }
        //Presenta la información de los elemntos contenidos en la lista
        console.log("Lista de compras: ")
        if (total > 100){
            total = total - (total*10)/100
            console.log("Total con 10% de descuento: $" + total.toFixed(2))
          }  else if (total > 50) { 
                total = total - (total*5)/100
                console.log("Total con 5% de descuento: $" + total.toFixed(2))

                }else{ 
                    console.log("Total sin descuento: $" + total.toFixed(2))
}
}
}
//En esta línea se solicita a la función ListaCompras que cree con new un nuevo objeto
let carrito1 = new Compras();

//Con el método this.agregar se agregan productos a la lista
carrito1.agregarProducto({ nombre: "Zapatos", precio: 60 });
carrito1.agregarProducto({ nombre: "Camisa", precio: 40 });
carrito1.agregarProducto({ nombre: "Pantalón", precio: 30 });

//Se muestra la lista de compras con los elementos agregados con el método agregar
carrito1.calcularDescuento();