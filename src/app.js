import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  const excuseElement = document.querySelector('#excuse');

  function getRandomData(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  // QUIEN
  const who = [
    'Mi gato',
    'Un hacker misterioso',
    'Mi jefe',
    'El internet',
    'Un alienígena',
    'Mi mejor amigo',
    'Un robot inteligente'
  ];

  // ACCION
  const action = [
    'apagó',
    'eliminó',
    'dañó',
    'bloqueó',
    'reinició',
    'perdió',
    'desconfiguró'
  ];

  // QUE
  const what = [
    'mi proyecto',
    'mi computadora',
    'mi código',
    'mi presentación',
    'mi conexión WiFi',
    'mi archivo importante',
    'mi tarea'
  ];

  // CUANDO
  const when = [
    'esta mañana',
    'justo antes de la reunión',
    'mientras trabajaba',
    'anoche',
    'hace unos minutos',
    'cuando iba a terminar',
    'antes de enviarlo'
  ];

  // GENERAR EXCUSA
  const excuse =
    getRandomData(who) + " " +
    getRandomData(action) + " " +
    getRandomData(what) + " " +
    getRandomData(when);

  excuseElement.innerText = excuse;
};