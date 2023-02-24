// Funciones
function sumar(numero){
    console.log(num);
}
// Funciones de flecha
// Es necesario colorcar parentesis si hay dos parametros
const sumarDos = (num,num2)=>{
    console.log(num);
    return num+num2;
}
// Es opcional el parentesis con un parametro
const sumarTres = num=>{
    console.log(num);
    
}

const resultado=sumarDos(1,2);

console.log(resultado);
// El return se puede omitir

// Sin llaves, la funcion va a retornar todo lo que esta a su derecha
const mensaje= nombre=>"Hola, soy "+nombre;


const resultado2=mensaje("Juanito");
console.log(resultado2);

const sumaTres= num => num+3;

const numero = sumaTres(9);
console.log(numero);