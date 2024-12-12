
/*
Texto en el DOM
⌨️ (01:42:29) Inicio
⌨️ (01:42:31) Acceder al Texto
⌨️ (01:47:17) Modificar el Texto
*/


// acceder al texto
const listaToppings = document.getElementById("lista-toppings");
console.log("--> innerText \n" + (listaToppings.innerText));
console.log("--> textContent " + (listaToppings.textContent));
console.log("--> innerHTML " + (listaToppings.innerHTML));

// modificar el texto
const titulo = document.getElementById("titulo");
console.log(titulo.innerText);
titulo.innerText = "Mis Toppings Favoritos";

