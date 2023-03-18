// let element = document.body;
// let child = element.firstElementChild;
// console.log(child);

// let element = document.body;
// let child = element.lastElementChild;
// console.log(child);

// let element = document.body;
// let child = element.firstElementChild;
// console.log(child);

// let element = document.querySelector('#vegetables');
// let parent = element.parentElement;
// console.log(parent);

// let element = document.querySelector('#vegetables');
// let sibling = element.nextElementSibling;
// console.log(sibling);

// let element = document.querySelector('#fruits');
// let child = element.children[2];
// console.log(child);

let element = document.querySelector('#desserts');
let child = Array.from(element.children);

child.forEach(child=>{
child.style.backgroundColor="yellow";
});

console.log(parent);

child.style.backgroundColor='#00f';