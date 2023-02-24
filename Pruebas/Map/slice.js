const arreglo = [1,2,3,4,5,6,7,8,9];

// Metodo slice

// Los parametros son los indices hasta los que se busca cortar el arreglo. En el caso del segundo parametro, toma lo que hay hasta ahi sin tomar ese valor.

const numeros = arreglo.slice(1);
console.log(numeros);
// Empieza a contar desde el ultimo hasta el primer elemento
const numeros2 = arreglo.slice(-4);
console.log(numeros2);