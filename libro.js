// Ejercício de código Javascript de Generation
// Creado por: Germán D Cruz G.
// Ejercicio 1: Libro (Objeto básico + if)
// Crear un sistema de préstamo de libros.
// Tareas:
// 1.Usa el constructor Libro para crear un objeto con título y autor.
// 2.Agrega una propiedad prestado = false.
// 3.Implementa el método prestar() que:
// •Cambie prestado a true si el libro está disponible.
// •Muestre un mensaje de error si ya está prestado (usando if).
// 4.Prueba prestar el libro dos veces y observa los mensajes.

//Función constructora del objeto Libro
function Libro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
  this.prestado = false;

  //Dentro de esta función constructora se define un método para prestar el libro
  //y se inicia en estado false, de forma que al ser prestado cambie a true y muestre el respectivo mensaje
  this.prestar = function() {
    if (this.prestado === false) {
      this.prestado = true;
      console.log("El libro " + this.titulo + " de " + this.autor + " ha sido prestado.");
    } else {
      console.log("El libro " + this.titulo + " ya está prestado.");
    }
  };
}

//En esta línea se solicita a la función Libro que cree con new un nuevo objeto con las propiedades 
//Título, Autor y el estado prestado en false
let libro1 = new Libro("Poesía completa", "Alejandra Pizarnik");

//Con el método this.prestar se prueba el estado actual de libro1 dos veces
libro1.prestar(); //Primera vez (Libro disponible)
libro1.prestar(); //Segunda vez (Libro no disponible)