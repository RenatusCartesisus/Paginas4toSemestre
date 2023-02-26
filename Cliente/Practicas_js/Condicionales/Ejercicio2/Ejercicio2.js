let nombre="Jose Jose";
let edad=17;



// Se usan muchas condicionales que examinan si se cumple una u otra cosa

// El uso principal fue ponerse a jugar y experimentar si las variables valen una u otra cosa, y si el nombre y la edad las condiciones indicadas, nos muestre lo siguiente:

// Si el nombre es el que buscamos y es mayor de 18

if(nombre=="Favaloro"&&edad>=18){
// document.write("Bienvenido "+nombre);
   document.write(`Bienvenido ${nombre}, cuya edad es ${edad}`);
}
// Si el nombre es el que buscamos y no es mayor de 18
else if(nombre=="Favaloro"&&edad<18){
    document.write(`No eres mayor de edad, ${nombre}`);
}
// Si el nombre no es el que buscamos y es mayor de 18
else if((edad>=18)&&(nombre!="Favaloro"||nombre!="Curie")){
    document.write("No se ha logrado identificar quien es usted, pero es mayor de edad");
}
// Si el nombre es el que buscamos y no es mayor de 18
else if((edad<18)&&(nombre!="Favaloro"||nombre!="Curie")){
    document.write("No se ha logrado identificar quien es usted, ni es mayor de edad");
}