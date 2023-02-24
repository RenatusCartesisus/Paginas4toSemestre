let saludos = ["Hola", "Salut", "Hello", "Hallo"];

// Agrega elemento al inicio;
saludos.push("Ciao");
// Agrega un elemento al inicio
saludos.unshift("Bonjour");
// Agrega un elemento en medio de ciertas posiciones
saludos.splice(2, 0, "Bom Dia");
// El segundo parametro elimina el numero de elementos que indiquemos, el valor en que se coloca

// Elimina y regresa el ultimo valor
let b=saludos.pop();
// Elimina y regresa el primer valor
let a=saludos.shift();

console.log(saludos);
console.log(b);
console.log(a);

// ---------------------------------------------------
let saludo = ["Hola", "mundo", "!"];
// Concatena los elementos del arreglo usando el valor que coloquemos entre comillas del join
var mensaje1 = saludo.join(" ");

console.log(mensaje1);

// ----------------------------------------------------
let num=[1,2,3,4,5,6,7];

console.log(num.indexOf(5));

