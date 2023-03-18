// .innerHTML = vulnerable to XSS attacks
// .textContent = more secure

// const nameTag = document.createElement("h1");

// nameTag.textContent=window.prompt('Enter your name');

// document.body.append(nameTag);

const myList = document.querySelector("#fruit");

const listItem = document.createElement("li");

listItem.textContent="mango";

// Place the item in first place
// myList.append(listItem);

// Place the item at the beggining
// myList.prepend(listItem);

myList.insertBefore(listItem, myList.getElementsByTagName('li')[1]);
 