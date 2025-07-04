const OPCION = (document.getElementById("dato")); //leer dato

let queryStrings = new URLSearchParams(window.location.search);
let parametroget = Object.fromEntries(queryStrings.entries());
console.log(parametroGet);