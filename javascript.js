let turno = 1;
//let valorxo = "x";
let tablero = ["", "", "", "", "", "", "", "", ""];
let partidas = [];
let indiceJugada = 0;
let posibleGana = [];
console.log(tablero);

document
  .querySelectorAll("input")
  .forEach((obj, i) => obj.addEventListener("click", (e) => btnPulsado(e, i)));

function btnPulsado(e, posicion) {
  e.preventDefault();
  console.log(posicion);
  let valor = "";
  let btn = e.target;
  if (btn.value == "") {
    let color = turno % 2 ? "salmon" : "paleGreen";
    btn.style.backgroundColor = color;
    valor = turno % 2 ? "x" : "o";
    btn.value = valor;
    tablero[posicion] = valor;
    turno++;

    // if(turno == 2 || turno == 4 || turno == 6 || turno == 8){
    //     turnoPC();
    // }
  }

  console.log(valor);
  console.log("turno" + turno);

  if (validaPartida()) {
    console.log(`jugador ${valor} ha ganado`);
    //alert(`jugador ${valor} ha ganado`);
    console.log(tablero);
    partidas.push(tablero.slice());
    console.log("partidas:");
    console.log(partidas);

    console.log(tablero);
    limpiarTablero();
    console.log(tablero);
    console.log("partidas revision: ");
    console.log(partidas);
    turno = 1;

    return;
  } else {
    if (turno === 10) {
      empatePartida();
    }
    console.log("else no empate");
  }

  if (turno == 2 || turno == 4 || turno == 6 || turno == 8) {
    turnoPC();
  }
}

function limpiarTablero() {
  let inputs = document.querySelectorAll("div input");
  inputs.forEach((input) => (input.value = ""));
  inputs.forEach((input) => (input.style = ""));
  tablero[0] = "";
  tablero[1] = "";
  tablero[2] = "";
  tablero[3] = "";
  tablero[4] = "";
  tablero[5] = "";
  tablero[6] = "";
  tablero[7] = "";
  tablero[8] = "";
  turno = 1;
}

function empatePartida(t) {
  //if (t == 11){
  alert("empate");
  limpiarTablero();
  //  }
}

function validaPartida() {
  if (tablero[0] == tablero[1] && tablero[1] == tablero[2] && tablero[0]) {
    return true;
  } else if (
    tablero[3] == tablero[4] &&
    tablero[4] == tablero[5] &&
    tablero[3]
  ) {
    return true;
  } else if (
    tablero[6] == tablero[7] &&
    tablero[7] == tablero[8] &&
    tablero[6]
  ) {
    return true;
  } else if (
    tablero[0] == tablero[3] &&
    tablero[3] == tablero[6] &&
    tablero[0]
  ) {
    return true;
  } else if (
    tablero[1] == tablero[4] &&
    tablero[4] == tablero[7] &&
    tablero[1]
  ) {
    return true;
  } else if (
    tablero[2] == tablero[5] &&
    tablero[5] == tablero[8] &&
    tablero[2]
  ) {
    return true;
  } else if (
    tablero[0] == tablero[4] &&
    tablero[4] == tablero[8] &&
    tablero[0]
  ) {
    return true;
  } else if (
    tablero[2] == tablero[4] &&
    tablero[4] == tablero[6] &&
    tablero[2]
  ) {
    return true;
  }
  return false;
}

function validaJugada(jugada) {
  if (jugada[0] == jugada[1] && jugada[1] == jugada[2] && jugada[0]) {
    indiceJugada = 1;
    return true;
  } else if (jugada[3] == jugada[4] && jugada[4] == jugada[5] && jugada[3]) {
    indiceJugada = 2;
    return true;
  } else if (jugada[6] == jugada[7] && jugada[7] == jugada[8] && jugada[6]) {
    indiceJugada = 3;
    return true;
  } else if (jugada[0] == jugada[3] && jugada[3] == jugada[6] && jugada[0]) {
    indiceJugada = 4;
    return true;
  } else if (jugada[1] == jugada[4] && jugada[4] == jugada[7] && jugada[1]) {
    indiceJugada = 5;
    return true;
  } else if (jugada[2] == jugada[5] && jugada[5] == jugada[8] && jugada[2]) {
    indiceJugada = 6;
    return true;
  } else if (jugada[0] == jugada[4] && jugada[4] == jugada[8] && jugada[0]) {
    indiceJugada = 7;
    return true;
  } else if (jugada[2] == jugada[4] && jugada[4] == jugada[6] && jugada[2]) {
    indiceJugada = 8;
    return true;
  } else {
    return false;
  }
}

function indiceJugadas(valorJugada) {
  if (valorJugada == 1) {
    return (posibleGana = [0, 1, 2]);
  } else if (valorJugada == 2) {
    return (posibleGana = [3, 4, 5]);
  } else if (valorJugada == 3) {
    return (posibleGana = [6, 7, 8]);
  } else if (valorJugada == 4) {
    return (posibleGana = [0, 3, 6]);
  } else if (valorJugada == 5) {
    return (posibleGana = [1, 4, 7]);
  } else if (valorJugada == 6) {
    return (posibleGana = [2, 5, 8]);
  } else if (valorJugada == 7) {
    return (posibleGana = [0, 4, 6]);
  } else if (valorJugada == 8) {
    return (posibleGana = [2, 4, 6]);
  }
  return (posibleGana = []);
}

function turnoPC() {
  console.log(turno);
  let r = randomNumber(0, 8);
  console.log(r);
  let div = document.getElementById(`pos${r}`);
  console.log(div.value);

  if (partidas == "") {
    // if (div.value == "") {
    //   colocarFicha(div);
    // } else {
    //   console.log("intento fallido");
    //   turnoPC();
    // }

    while (div.value != "") {
      let r = randomNumber(0, 8);
      div = document.getElementById(`pos${r}`);
    }

    if (div.value == "") {
      colocarFicha(div);
    }
  } else if (turno >= 4) {
    console.log("else turno pc");
    evaluaMovimiento();
  } else {
    while (div.value != "") {
      let r = randomNumber(0, 8);
      div = document.getElementById(`pos${r}`);
    }

    colocarFicha(div);
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function evaluaMovimiento() {
  console.log("evaluando movimiento");
  partidas.forEach((e, i) => {
    let val = validaJugada(e);
    if (val) {
      console.log(indiceJugada);
      indiceJugadas(indiceJugada);
      console.log(posibleGana);
      let stop = validarEspacio(posibleGana, i);
      if (stop) return;
    } else {
    }
  });
}

function validarEspacio(arreglo, index) {
  console.log("validando espacio");
  let div = document.getElementById(`pos${arreglo[0]}`);
  let div2 = document.getElementById(`pos${arreglo[1]}`);
  let div3 = document.getElementById(`pos${arreglo[2]}`);
  console.log(div.value);
  console.log(typeof div.value);
  console.log(arreglo[0]);
  console.log(arreglo[1]);

  if (div.value === "x" && div2.value === "x" && div3.value === "") {
    div = document.getElementById(`pos${arreglo[2]}`);
    while (div.value != "") {
      let r = randomNumber(0, 8);
      div = document.getElementById(`pos${r}`);
    }
    colocarFicha(div);
    return true;
  }

  let parar = partidas.length - 1;
  if (parar == index) {
    let r = randomNumber(0, 8);
    console.log(r);
    let div4 = document.getElementById(`pos${r}`);

    while (div.value != "") {
      let r = randomNumber(0, 8);
      div = document.getElementById(`pos${r}`);
    }

    colocarFicha(div4);

    return true;
  }

  return false;
  //return console.log("nada paso")
}

function colocarFicha(div) {
  if (turno == 2 || turno == 4 || turno == 6 || turno == 8) {
    div.addEventListener("click", function (e) {
      console.log("Simulated click");
    });

    const simulatedDivClick = document.createEvent("MouseEvents");

    simulatedDivClick.initEvent(
      "click" /* Event type */,
      true /* bubbles */,
      true /* cancelable */,
      document.defaultView /* view */,
      0 /* detail */,
      0 /* screenx */,
      0 /* screeny */,
      0 /* clientx */,
      0 /* clienty */,
      false /* ctrlKey */,
      false /* altKey */,
      false /* shiftKey */,
      0 /* metaKey */,
      null /* button */,
      null /* relatedTarget */
    );

    // Automatically click after 1 second
    setTimeout(function () {
      div.dispatchEvent(simulatedDivClick);
    }, 1000);
    return;
  }
}
