// Ejercício de código Javascript de Generation
// Creado por: Germán D Cruz G.
// Ejercicio 3: Reproductor de Música
// Tareas:
// # 1.Crea un objeto Reproductor usando una función constructora con:
// # •Una propiedad estado con valor inicial "detenido" (otros valores
// # posibles: "reproduciendo", "pausado").
// # 2.Implementa estos métodos:
// # •play():
// # •Si el estado es "detenido" o "pausado", cambia a "reproduciendo" y muestra: "Reproduciendo
// # música...".
// # •Si ya está reproduciendo, muestra: "Ya se está reproduciendo música.".
// # •pausar():
// # •Si el estado es "reproduciendo", cambia a "pausado" y muestra: "Música pausada.".
// # •Si no, muestra: "No hay música reproduciéndose.".
// # •detener(): Cambia el estado a "detenido" y muestra: "Música detenida.".

//Función constructora del objeto Reproductor
function Reproductor() {
  this.detenido = true;
  this.reproduciendo = false;
  this.pausado = false;

  //Dentro de esta función constructora se definen tres métodos para el Reproductor
  //y se inician en estado false, de forma que al cambiar a true se muestre el respectivo mensaje
  this.play = function() {
    if (this.reproduciendo) {
        this.reproduciendo = true;
        this.pausado = false
        this.detenido = false
        console.log("Ya se está reproduciendo música.");
    } else {
        console.log("Reproduciendo música...");
    }     
    }

  this.pausar = function() {
    if (this.reproduciendo) {
        this.reproduciendo = false
        this.pausado = true
        this.detenido = false
        console.log("Música pausada.")
    } else {
        console.log("No hay música reproduciéndose.");
    } 
    }

  this.detener = function() {
    if (this.reproduciendo) {
        this.reproduciendo = false
        this.pausado = false
        this.detenido = true
        console.log("Música detenida.");
    } else {
        console.log("Música ya está detenida."); 
    }
  }
}

//En esta línea se solicita a la función Reproductor que cree con new un nuevo Reproductor
let start = new Reproductor();

//Con los métodos play, pausar y detener se prueba el estado actual del Reproductor
start.play(); 
start.pausar(); 
start.detener();