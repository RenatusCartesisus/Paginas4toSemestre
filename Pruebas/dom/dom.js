// DOM manipulation

// El DOM tambien puede considerarse una API. Permite la comunicacion de dos aplicaciones de software a traves de un conjunto de reglas. 

// Permite ejecutar codigo en el navegador para poder interactuar con cualquier nodo del documento

// Un arbol es una estructura de datos que se conforma de nodos.  Dentro de cada navegador, hay dos arboles:
// El DOM y el CSSOM

// Asi, el DOM representa el HTML. Representa una estructura de datos de tipo arbol que se conforma por los nodos

// GetElementById()

const title=document.getElementById('main-heading');

// console.log(title);

// GetElementByClassName()

const listItem=document.getElementsByClassName('list-items');

// console.log(listItem);


// GetElementsByTagName()

const listItems=document.getElementsByTagName('li'); 

// console.log(listItems);

// querySelector()

const container=document.querySelector('div');

console.log(container);

// querySelectorAll()