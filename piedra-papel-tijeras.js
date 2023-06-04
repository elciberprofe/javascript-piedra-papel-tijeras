/*
Título: Juego del Piedra, Papel o Tijeras.
Nivel Educativo: Ciclo Formativo de Grado Superior
Curso: DAM, DAW o ASYR
Conocimientos del alumnado I: Tipos de Datos, Constantes y Variables 
Conocimientos del alumnado II: Operaciones Aritméticas, Lógicas y Relacionales
Concomientos del alumnado III: Instrucciones de Control Condicional
Fecha: 03 / 06 / 2023
Autor: Xavi Garcia (ElCiberProfe)
Lenguaje: JavaScript
*/

//VARIABLES PARA EL CONTROL DE LA EVOLUCIÓN DE LA PARTIDA
let maxRondas = 3; //Almacenar el número total de rondas permitido.
let rondaActual = 0; //Controlar la ronda actual de la partida.
let ganador = 0; //Determinar si hay un ganador de la partida.
let ganadorRonda = 0; //Determinar el ganador de cada ronda.
let tiradaJugador1 = false; //Determinar si el jugador 1 ha realizado la tirada o no.
let tiradaJugador2 = false; //Determinar si el jugador 2 ha realizado la tirada o no.
let victoriasJugador1 = 0; //Contabilizar el número de victorias del jugador 1 para cada ronda.
let victoriasJugador2 = 0; //Contabilizar el número de victorias del jugador 2 para cada ronda.

//CONSTANTES CON LOS ELEMENTOS HTML DONDE SE DEBE OBTENER, MOSTRAR o MODIFICAR INFORMACIÓN
const opcionJugador1 = document.querySelector("#opcionJugador1"); //Elemento HTML que guarda la opción del jugador 1.
const opcionJugador2 = document.querySelector("#opcionJugador2"); //Elemento HTML que guarda la opción del jugador 2.
const elementoImagenJ1 = document.createElement("img"); //Elemento HTML que almacenará la imagen de la opción del jugador 1.
const elementoImagenJ2 = document.createElement("img"); //Elemento HTML que almacenará la imagen de la opción del jugador 2.
const elementoImagenGanador = document.createElement("img"); //Elemento HTML que almacenará la imagen de la opción ganadora.
const imagenJugador1 = document.querySelector("#imagenTiradaJugador1"); //Elemento HTML para mostrar la imagen de la opción del jugador 1.
const imagenJugador2 = document.querySelector("#imagenTiradaJugador2"); //Elemento HTML para mostrar la imagen de la opción del jugador 2.
const imagenGanadora = document.querySelector("#imagenGanadorRonda"); //Elemento HTML para mostrar la imagen de la opción ganadora de la ronda.
const contenedorRondaActual = document.querySelector("#numeroRondaActual"); //Elemento HTML para mostrar el número de ronda actual.
const contenedorGanadorRonda = document.querySelector("#jugadorGanadorRonda"); //Elemento HTML para mostrar el jugador ganador de la ronda actual.

//LÓGICA DEL JUEGO PIEDRA, PAPEL o TIJERAS
function realizarTirada(numeroJugador) {
  //Comprobar si hay un ganador (variable ganador es diferente de 0)
  if (ganador != 0) {
    //Mostrar un mensaje con el ganador
    alert(`Ya no se puede jugar mas. ¡El jugador ${ganador} ha vencido!`);
    return;
  }
  //Comprobar si el valor de ronda actual es mayor o igual al máximo permitido
  else if (rondaActual >= maxRondas) {
    //Comprobar si el jugador 1 tiene las mismas victorias que el jugador 2
    if (victoriasJugador1 == victoriasJugador2) {
      alert(`¡El jugador 1 y el jugador 2 han empatado!`);
      return;
    }
    //Comprobar si el jugador 1 tiene las mas victorias que el jugador 2
    else if (victoriasJugador1 > victoriasJugador2) {
      ganador = 1;
    } else {
      ganador = 2;
    }
    //Mostrar un mensaje con el ganador
    alert(`¡El jugador ${ganador} ha vencido!`);
    return;
  }
  //No hay ganador y el numero de ronda actual está dentro del permitido
  else {
    //Comprobar que jugador es el que ha realizado la tirada
    if (numeroJugador == 1) {
      //Comprobar si el jugador 1 ya ha realizado su tirada
      if (tiradaJugador1 == true) {
        //No realizar ninguna acción (mostrar por consola un mensaje informativo).
        console.log("El jugador 1 ya ha realizado su movimiento.");
      } else {
        //Comprobar si la opción escogida por el jugador 1 es "PIEDRA"
        if (opcionJugador1.value == "piedra") {
          //Asignar la imagen de la piedra a la opción del jugador 1.
          elementoImagenJ1.src = "./piedra.png";
        }
        //Comprobar si la opción escogida por el jugador 1 es "PAPEL"
        else if (opcionJugador1.value == "papel") {
          //Asignar la imagen del papel a la opción del jugador 1.
          elementoImagenJ1.src = "./papel.png";
        } else {
          //Asignar la imagen de tijeras a la opción del jugador 1.
          elementoImagenJ1.src = "./tijeras.png";
        }
        //Añadir el elemento HTML con la imagen del a opción del jugador 1
        imagenJugador1.replaceChildren();
        imagenJugador1.appendChild(elementoImagenJ1);
        //Indicar que el jugador 1 ya ha realizado su movimiento.
        tiradaJugador1 = true;
      }
    }
    //Si no ha tirado el jugador 1, es que ha tirado el jugador 2
    else {
      //Comprobar si el jugador 2 ya ha realizado su tirada
      if (tiradaJugador2 == true) {
        //No realizar ninguna acción (mostrar por consola un mensaje informativo).
        console.log("El jugador 2 ya ha realizado su movimiento.");
      } else {
        //Comprobar si la opción escogida por el jugador 2 es "PIEDRA"
        if (opcionJugador2.value == "piedra") {
          //Asignar la imagen de la piedra a la opción del jugador 2.
          elementoImagenJ2.src = "./piedra.png";
        }
        //Comprobar si la opción escogida por el jugador 2 es "PAPEL"
        else if (opcionJugador2.value == "papel") {
          //Asignar la imagen del papel a la opción del jugador 2.
          elementoImagenJ2.src = "./papel.png";
        } else {
          //Asignar la imagen de tijeras a la opción del jugador 1.
          elementoImagenJ2.src = "./tijeras.png";
        }
        //Añadir el elemento HTML con la imagen del a opción del jugador 1
        imagenJugador2.replaceChildren();
        imagenJugador2.appendChild(elementoImagenJ2);
        //Indicar que el jugador 2 ya ha realizado su movimiento.
        tiradaJugador2 = true;
      }
    }
    //Comprobar si el jugador 1 y el jugador 2 ya han realizado su tirada para la ronda actual
    if (tiradaJugador1 && tiradaJugador2) {
      //Devolver las variables de tirada de los jugadores a FALSE para que puedan volver a tirar.
      tiradaJugador1 = false;
      tiradaJugador2 = false;
      //Incrementar en 1 unidad el valor de la ronda actual
      rondaActual++;
      //Mostrar el valor de la ronda actual en el HTML
      contenedorRondaActual.innerHTML = `Número de Ronda Actual: ${rondaActual}`;
      //Inicializar el ganador de la ronda a 0 (ningún jugador ha ganado de momento la ronda)
      ganadorRonda = 0;
      //Comprobar si la opción del jugador 1 y jugador 2 son iguales
      if (opcionJugador1.value == opcionJugador2.value) {
        //No realizar ninguna acción (mostrar por consola un mensaje informativo).
        console.log("El jugador 1 y jugador 2 han empatado la ronda.");
      }
      //Comprobar si la opción del jugador 1 es "PIEDRA"
      else if (opcionJugador1.value == "piedra") {
        //Comprobar si la opción del jugador 2 es "PAPEL"
        if (opcionJugador2.value == "papel") {
          //Indicar que el ganador de la ronda es el jugador 2
          ganadorRonda = 2;
        } else {
          //Como la opción del jugador 2 es "TIJERAS", indicar que el ganador de la ronda es el jugador 1
          ganadorRonda = 1;
        }
      }
      //Si no es "PIEDRA", comprobar si la opción del jugador 1 es "PAPEL"
      else if (opcionJugador1.value == "papel") {
        //Comprobar si la opción del jugador 2 es "PIEDRA"
        if (opcionJugador2.value == "piedra") {
          //Indicar que el ganador de la ronda es el jugador 1
          ganadorRonda = 1;
        } else {
          //Como la opción del jugador 2 es "TIJERAS", indicar que el ganador de la ronda es el jugador 2
          ganadorRonda = 2;
        }
      }
      //Si no es "PIEDRA" y tampoco es "PAPEL", la opción del jugador 1 es "TIJERAS"
      else {
        //Comprobar si la opción del jugador 2 es "PIEDRA"
        if (opcionJugador2.value == "piedra") {
          //Indicar que el ganador de la ronda es el jugador 2
          ganadorRonda = 2;
        } else {
          //La opción del jugador 2 es "PAPEL", indicar que el ganador de la ronda es el jugador 1
          ganadorRonda = 1;
        }
      }
      //Comprobar si el ganador de la ronda actual es el jugador 1
      if (ganadorRonda == 1) {
        //Incrementar la variable de victorias del jugador 1
        victoriasJugador1++;
        //Mostrar la imagen de la opción del jugador 1 en la zona de opción ganadora de ronda
        imagenGanadora.replaceChildren();
        elementoImagenGanador.src = elementoImagenJ1.src;
        imagenGanadora.appendChild(elementoImagenGanador);
      } else if (ganadorRonda == 2) {
        //Incrementar la variable de victorias del jugador 2
        victoriasJugador2++;
        //Mostrar la imagen de la opción del jugador 1 en la zona de opción ganadora de ronda
        imagenGanadora.replaceChildren();
        elementoImagenGanador.src = elementoImagenJ1.src;
        imagenGanadora.appendChild(elementoImagenGanador);
      } else {
        //El jugador 1 y 2 han empatado (quitar cualquier imagen anterior)
        imagenGanadora.replaceChildren();
      }
      //Mostrar el jugador ganador de la ronda actual en el HTML
      contenedorGanadorRonda.innerHTML = `Ganador de la Ronda Jugador: ${ganadorRonda}`;
    }
  }
}
