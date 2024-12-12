

/*
Operaciones Importantes en el DOM
⌨️ (02:00:59) Crear un Elemento
⌨️ (02:02:59) Agregar un Elemento
⌨️ (02:05:08) Remover un Elemento
*/

// EJEMPLO DE USO: recibimos un json y lo tranformamos ne elementos html que vean los usuarios


// Elemento de referencia del dom donde se agregara
const listaToppings = document.getElementById("lista-toppings");

// crear un elemento
const toppingNuevo = document.createElement("li");

// agregamos propiedades al elemento creado
toppingNuevo.classList.add("topping", "fondo-marron");
toppingNuevo.innerText = "Queso Extra"

// agregar el elemento dentro de otro elemento de referencia
listaToppings.append(toppingNuevo);
// listaToppings.appendChild(toppingNuevo);

// remover un elemento
//toppingNuevo.remove();