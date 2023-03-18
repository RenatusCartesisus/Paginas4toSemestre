// El DOM es una interfaz para documentos HTML y XML El DOM da una representacion del documento como un grupo de nodos y objetos que tienen propiedades y metodos

// Interface: point of interaction between two things

// DOM = An interface for changing the content of a page (API)

// A NODE, in this context, is simply an HTML element. The DOM is like a tree that represents the HTML of the website, and every element is a "node"

// Always remember: Every HTML element is a node, but not every node an HTML element

// "document" is the point of entry of our DOM 

console.log(document);

// This lists all the properties of the DOM
console.dir(document);

// You can acces to the properties of your document this way
console.log(document.title);

console.log(document.URL);

document.title='Title goes here!';

// document.location="https://www.google.com/";

document.getElementById("mydiv").innerHTML='HELLO'; 

document.body.style="background: skyblue;"