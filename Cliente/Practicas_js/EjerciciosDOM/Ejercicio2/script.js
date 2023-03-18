let element=document.createElement('div');
let principal=document.getElementById('contenedor');
let referencia=document.getElementsByTagName('div')[0];

element.setAttribute('class', 'morado');
principal.insertBefore(element, referencia);

let element2=document.createElement('div');
let principal2=document.getElementById('contenedor');
let referencia2=document.getElementsByTagName('div')[1];

element2.setAttribute('class', 'verde');
principal2.insertBefore(element2, referencia2);

let element3=document.createElement('div');
let principal3=document.getElementById('contenedor');
let referencia3=document.getElementsByTagName('div')[2];

element3.setAttribute('class', 'azul');
principal3.insertBefore(element3, referencia3);