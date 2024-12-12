

/*
Atributos
⌨️ (01:49:06) Atributos con JavaScript
*/

const enlace = document.getElementsByTagName("a");
console.log(enlace); // coleccion html
console.log(enlace[0].getAttribute("href")); // acceder a un atributo

// elimnar ese atributo
console.log(enlace[0].removeAttribute("href")); // acceder a un atributo
//console.log(enlace[0]);

// modificar un atributo
enlace[0].setAttribute("href", "https://github.com/giovanniM01")
console.log(enlace[0]); 


