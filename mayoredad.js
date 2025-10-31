function mayoredad(){
    let nacimiento
    nacimiento = console.log("Digite su año de nacimiento: ");
    let actual = 2025
    let edad = actual - nacimiento
    return edad
};

if edad >= 

function puedeconducir(edad) {
    let mayor = edad >= 18;
    return mayor;
  }
  
  if (puedeconducir(20)) {
    console.log(true);
  } else {
    console.log(false);
  };

  function esMayorDeEdad(edad) {
  return edad >= 18;
}
if (esMayorDeEdad(20)) {
  console.log("Puede entrar");
} else {
  console.log("Acceso denegado");
}
let puedeConducir = esMayorDeEdad(10);
console.log("¿Puede conducir?", puedeConducir);
if (esMayorDeEdad(20)) {
  console.log("Usted va con med adultos");
} else {
  console.log("Usted va con med niños");
};
