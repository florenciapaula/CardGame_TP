// DECLARACION DE VARIABLES GLOBALES***********************************************************

var cartaElegida;
var carta;
var number;

// EVITAR RECARGA DE FORMULARIO*********************************************************************

function evitarRecarga(event) {
  event.preventDefault();
  return false;
}

// FUNCTION ELEGIR CARTA****************************************************************************

function elegirCarta(number) {
  if (carta < 18) {
    if (number == carta) {
      document.getElementById("imgcarta" + number).src =
        "images/cartaganaste.jpg";

      carta = 18;

      mostrarBoton();
    } else {
      document.getElementById("imgcarta" + number).src =
        "images/cartaperdiste.jpg";

      intentosCartas = intentosCartas - 1;

      document.getElementById("cantdeIntentosCartas").textContent =
        "LIVES:" + " ❤ ".repeat(intentosCartas);

      if (intentosCartas == 0) {
        document.getElementById("imgcarta" + carta).src =
          "images/cartafinal.jpg";

        carta = 18;

        mostrarBoton();
      }
    }
  }
}

function sortearCarta() {
  intentosCartas = 5;

  document.getElementById("cantdeIntentosCartas").textContent =
    "LIVES:" + " ❤ ".repeat(intentosCartas);

  carta = Math.floor(Math.random() * 16);

  if (carta == 0) {
    carta = 16;
  }

  document.getElementById("btncartamostrar").id = "btncarta";

  //console.log(carta);

  for (number = 1; number < 17; number++) {
    document.getElementById("imgcarta" + number).src = "images/cartaback.jpg";
  }
}

function mostrarBoton() {
  document.getElementById("btncarta").id = "btncartamostrar";
}
