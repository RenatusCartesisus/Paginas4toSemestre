// fetch
fetch('https://pokeapi.co/api/v2/pokemon/')
.then(res=> res.json())
.then(data =>{
    let arrayNombres=[];
    // console.log(data.results);
    data.results.forEach(element => {
// console.log(element.name)
arrayNombres.push(element.name);
    });
    console.log(arrayNombres);
    const arrayPokes=data.results.map(poke=>poke.name);
});

const obtenerPokemones = async()=>{
try{ 
const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
const data = await res.json();
data.results.forEach(element => {
console.log(element.name);
});

}
catch(error){
    console.log(error);
}
}

// obtenerPokemones();