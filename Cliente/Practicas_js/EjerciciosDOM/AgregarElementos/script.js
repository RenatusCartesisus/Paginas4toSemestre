let elemento = document.createElement('h1');

elemento.textContent='Hola Mundo';

// Metodos(en este caso, todos se lo vamos a aplicar al contenedor): 

// Para agregar como hijo:

// preprend() = agregar el elemento creado al contenedor como el primer hijo

// append() = agregar nuestro elemento como ultimo hijo del contenedor -> nuevo

// appendChild() = hace lo mismo que append() -> antiguo

// insertBefore() = insertar el elemento de un contenedor antes de un elemento hijo en especifico

const contenedor = document.getElementById('contenedor');

// contenedor.prepend(elemento);

// contenedor.append(elemento);

contenedor.insertBefore(elemento, contenedor.getElementsByTagName('p')[1]);
