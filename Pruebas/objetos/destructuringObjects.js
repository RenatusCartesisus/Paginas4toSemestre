const mascota = {
    nombre: "Tom",
    edad: 10,
    vivo: true,
    razas: [
      'peludo', 'negro'
    ]
  }

  const nombreMascota=mascota.nombre;
  console.log(mascota.nombre);

  console.log(nombreMascota);

//   Debemos usar esta declaracion al nombre del objeto en cuestion, y entre llaves va la propiedad a la que queremos acceder. Dentro, se estan creando constantes con ese nombre.
  const {edad}=mascota;
  console.log(edad);

  const {vivo, raza}=mascota;
  console.log(vivo);
