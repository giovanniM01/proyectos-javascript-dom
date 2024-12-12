

/*
Clases con JavaScript y el DOM
⌨️ (01:53:13) Clases
⌨️ (01:55:18) Agregar una clase
⌨️ (01:58:00) Verificar si una clase existe
⌨️ (01:59:26) Eliminar una clase
*/

const primerTopping = document.querySelector(".topping");
console.log(primerTopping.classList); // lista clases del elemento primerTopping
console.log(typeof primerTopping.classList);

// agregar una clase;
primerTopping.classList.add("mi-clase");
console.log(primerTopping.classList); // lista clases actualizada


// verificar si una clase existe (util en condicionales)
console.log(primerTopping.classList.contains("mi-clase")); // true
console.log(primerTopping.classList.contains("mi-no-clase")); // false 

// eliminar una clase de un elemento
primerTopping.classList.remove("mi-clase")
console.log(primerTopping.classList); // lista clases actualizada
