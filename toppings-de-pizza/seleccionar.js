/*
//--------------------- OBTENER UN ELEMENTO POR SU ID -----------------------
// getElementById()
const contenedor = document.getElementById("contenedor");
console.log(contenedor);

// innerHTML: Nos da acceso a la estructura html del elemento que le aplicamos el metodo
// en este caso el emeneto es contenedor (formato string)
console.log("-- contenedor.innerHTML --\n" + contenedor.innerHTML);
console.log(typeof contenedor.innerHTML);

// probmos lo mismo con el elemnto con ID titulo
const titulo = document.getElementById('titulo');
console.log(titulo);
console.log(typeof titulo);


console.log("-- contenedor.innerHTML --\n" + titulo.innerHTML);
console.log(typeof titulo.innerHTML);

// innerText (texto interno del elemento)
// para acceder al texto contenido en un elemento
console.log("Contenido innerText del elemnto con id=titulo:\n" + titulo.innerText);
console.log(typeof titulo.innerText);

// obtener la etiqueta del elemento seleccionado por id
console.log("Etiqueta del elemento (id=titulo) -> "+titulo.tagName);
//------------------------------------------------------------------------------


//--------------------- OBTENER UN ELEMENTO POR SU CLASE -----------------------
// getElementByClassName('clase');
// obtener todos los elementos con esa clase
console.log("- OBTENER UN ELEMENTO POR SU CLASE - \n\n");

const toppings = document.getElementsByClassName('topping');
console.log(toppings); // coleccion html (no es un arreglo)
console.log(typeof toppings); // objects

// largo coleccion html
console.log("Largo coleccion html -> " + toppings.length);


// acceder a los elemntos de la coleccion html toppings
console.log("Elemento 0 -> " + toppings[0]);
console.log("ID -> " + toppings[0].id);
console.log("CLASS -> " + toppings[0].className);
console.log(toppings[0].innerHTML);




//--------------------- OBTENER UN ELEMENTO POR SU TAG -----------------------
// ahora veremos como acceder a elementos en base al nombre de su etiqueta html
// etiquetas: h1, p, div, ul, ...
// getElementByTagName()

const misToppings = document.getElementsByTagName("li");
console.log(misToppings);
console.log("Tipo: " + typeof misToppings);


//----------------------------------------------------------------------------


//--------------------- OBTENER UN ELEMENTO con querySelector -----------------
// querySelector("#id"); encontrar elemento por id
const aceituna = document.querySelector("#aceitunas");
console.log(aceituna);

console.log("---");
// querySelector(".class"); encontrar elemento por clase
const ejemplo = document.querySelector("ul li.fondo-naranja");
console.log(ejemplo);

console.log("--Primer li con fondo no naranja--");
const negacion = document.querySelector("ul li:not(.fondo-naranja)")
console.log(negacion);

//----------------------------------------------------------------------------
*/

//--------------------- OBTENER UN ELEMENTO con querySelectorAll -----------------
const toppingFondoNaranja = document.querySelectorAll(".fondo-naranja");
console.log(toppingFondoNaranja);
console.log(typeof toppingFondoNaranja);
console.log(toppingFondoNaranja.length);
//--------------------------------------------------------------------------------

/* 
Seleccionar Elementos del DOM
⌨️  Inicio
⌨️  .getElementById()
⌨️  .getElementsByClassName()
⌨️  .getElementsByTagName()
⌨️  .querySelector()
⌨️  .querySelectorAll()
*/
