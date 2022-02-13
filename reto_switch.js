// personas 
var jugador1 = "juan";
var jugador2 = "felipe";

//Opciones a elegir en el juego
var piedra = "✊🏽 piedra";
var papel = "✋🏽 papel";
var tijera = "✌🏽 tijera";

//Elección de cada jugador
var eleccion1 = piedra;
var eleccion2 = tijera;

//Ejecución del código
juego();

function juego(){
//Elecciones mostradas en pantalla
console.log(jugador1 + " " + eleccion1);
console.log(jugador2 + "" + eleccion2);

// piedra  vs papel
  
switch (true) {
case (eleccion1 == piedra && eleccion2 == papel):
console.log("el ganador es: " + jugador2);
break;

// piedra  vs tijera
case (eleccion1 == piedra && eleccion2 == tijera):
console.log("el ganador es: " + jugador1);
break;
        
//  papel vs  piedra 
case(eleccion1 == papel && eleccion2 == piedra):
console.log("el ganador es: " + jugador1);
break;
           

// papel  vs tijera
case(eleccion1 == papel && eleccion2 == tijera):
console.log("el ganador es: " + jugador2);
break;


        
//tijera vs  piedra
case(eleccion1 == tijera && eleccion2 == piedra):
console.log("el ganador es: " + jugador2);
break;
       
            
// tijera vs papel
    

case(eleccion1 == tijera && eleccion2 == papel):
console.log("el ganador es: " + jugador1);
break;

default:
console.log("empate");


}
}




