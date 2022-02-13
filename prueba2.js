//Nombres de los jugadores
var jugador1 = "Juan";
var jugador2 = "felipe";

//Opciones a elegir en el juego

var piedra = "✊🏽 Piedra";
var papel = "✋🏽 Papel";
var tijera = "✌🏽 Tijera";

//Elección de cada jugador
var eleccion1 =  piedra;
var eleccion2 =  papel;


//Ejecución del código

juego();


//Arbitro 👶🏽

function juego()
{
    
 //Elecciones mostradas en pantalla

 console.log(jugador1 + ": " + eleccion1);
 console.log (jugador2 + ": " + eleccion2);



//Piedra vs Papel

if(eleccion1 == piedra && eleccion2 == papel)
{
    console.log("gana " + jugador2 + " con: " + papel);
}

      //Piedra vs Tijera

      
if(eleccion1 == piedra && eleccion2 == tijera)
{
    console.log("gana " + jugador1 + " con: " + piedra);
}
  
      //Papel vs Piedra

      if(eleccion1 == papel && eleccion2 == piedra)
 {
          console.log("gana " + jugador1 + " con: " + papel);
 }
      
 
    
      //Papel vs Tijera


      if(eleccion1 == papel && eleccion2 == tijera)
{
    console.log("gana " + jugador2 + " con: " + tijera);
}

      //Tijera vs Piedra
   
      if(eleccion1 == tijera && eleccion2 == piedra)
{
    console.log("gana " + jugador2 + " con: " + piedra);
}
    
      //Tijera vs Papel


      if(eleccion1 == tijera && eleccion2 == papel)
{

    console.log("gana " + jugador1 + " con: " + tijera);
}

      //Si sacan lo mismo o sacan una pistola 😀🙃

      else {
        console.log("Empate");
      }
    }



    //personas
    var persona1 = "cenaida";
    var persona2 = "felipe";

        //comidas
        var hamburguesa = "🍔 hamburguesa: no es una dieta sana";
        var tomate = "🍅 tomate: es una dieta sana";
        var agua = "🥛 agua: va a quedar con hambre "; 


        //eleccion 

        var eleccion1 = hamburguesa;
        var eleccion2 = hamburguesa;

        //comer

        comer();

        // empezar a comer

        function comer()

        //mostrar en cansola 

        {
        console.log(persona1 + ": " + eleccion1 );
        console.log(persona2 + ": " + eleccion2 );
        }

         
        if(persona1 ==  eleccion1 && persona2 == eleccion2)
        {
    console.log();
        }
 
        else{
            console.log ("pagar cuenta $:");
        }