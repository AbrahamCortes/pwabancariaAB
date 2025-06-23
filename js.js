
//Configurar sw
let swLocation="sw.js";
// "/beerjs/sw.js";

if (navigator.serviceWorker) {
  if (window.location.href.includes ("localhost")) swLocation = "/sw.js"; 
  navigator.serviceWorker.register(swLocation);
}
//Logic of web app
console.log("Bienvenido");
