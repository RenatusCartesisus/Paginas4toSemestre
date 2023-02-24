const arreglo = [1,2,3,4,5,6,7,8,9];

const nombres = ['Pedro', 'Pepe', 'Fulano', 'Maria', 'Ernesto']
// El valor debe cumplir la condicion asignada para que el metodo lo regrese.
const resultado = arreglo.filter((value)=>value%2==0);
const resultado2 = nombres.filter((valor)=>valor.length>5);

// console.log(resultado);
// console.log(resultado2);

const personas = [
    {
        nombre: 'Fulano',
        edad: 40
    },
    {
        nombre: 'Peppa',
        edad: 8
    },
    {
        nombre: 'Pepe',
        edad: 17
    },
    {
        nombre: 'Baragatti',
        edad: 70
    }
]

    const adultos = personas.filter(persona=>persona.edad>=18);
    console.log(adultos.edad);
