let element = document.getElementById('mytitle');
console.log(typeof element);

element.style="background: green;";

// Similar to an array
let fruits = document.getElementsByName("fruits");
console.log(fruits[0]);

fruits.forEach(fruit =>{
    if(fruit.checked){
        console.log(fruit.value);
    }
});

let vegetables = document.getElementsByTagName('li');
vegetables[0].style="background: #0fa";
console.log(vegetables[0].textContent);

let desserts = document.getElementsByClassName('desserts');
desserts[1].textContent='Cookies';
// Query selector can either use an element, a class, 
let selector = document.querySelector('.desserts');

let selector1 = document.querySelector('#mytitle');

let selector2 = document.querySelector('[for]');
