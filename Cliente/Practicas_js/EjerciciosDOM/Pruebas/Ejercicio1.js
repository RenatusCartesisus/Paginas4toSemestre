let parrafo = document.createElement('p');

let texto = document.createTextNode("Texto que va dentro del nodo");

parrafo.appendChild(texto);

document.getElementsByTagName('body')[0].appendChild(parrafo);