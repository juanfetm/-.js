//Nombres de los jugadores
var jugadorA = "Arturo";
var jugadorB = "Andrea";

//Opciones a elegir en el juego
var piedra = "✊🏽 Piedra";
var papel = "✋🏽 Papel";
var tijera = "✌🏽 Tijera";

//Elección de cada jugador
var eleccionA = tijera;
var eleccionB = piedra;

//Ejecución del código
juego();



//Arbitro 👶🏽
function juego() {
 
  //Elecciones mostradas en pantalla
  console.log(jugadorA + ": " + eleccionA);
  console.log(jugadorB + ": " + eleccionB);


  //Piedra vs Papel
  if (eleccionA == piedra && eleccionB == papel) {
    console.log("Gana " + jugadorB);
  }

  //Piedra vs Tijera
  else if (eleccionA == piedra && eleccionB == tijera) {
    console.log("Gana " + jugadorA);
  }

  //Papel vs Piedra
  else if (eleccionA == papel && eleccionB == piedra) {
    console.log("Gana " + jugadorA);
  }

  //Papel vs Tijera
  else if (eleccionA == papel && eleccionB == tijera) {
    console.log("Gana " + jugadorB);
  }

  //Tijera vs Piedra
  else if (eleccionA == tijera && eleccionB == piedra) {
    console.log("Gana " + jugadorB);
  }

  //Tijera vs Papel
  else if (eleccionA == tijera && eleccionB == papel) {
    console.log("Gana " + jugadorA);
  }

  //Si sacan lo mismo o sacan una pistola 😀🙃
  else {
    console.log("Empate");
  }
 }