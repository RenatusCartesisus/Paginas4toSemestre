function mostrarMensaje(){

let edad = prompt("Por favor indique su edad");
// Validar
if(edad==""){
    alert("No ha introducido ninguna edad")
}

// Number= su uso es convertir un objeto string a un valor numerico. Si no puede convertir un numero, devuelve NaN.

edad=Number(edad);

switch(edad){

    case 0:{
        alert("Acabas de nacer. Preparate persona nacida en pleno inicio de la nueva Guerra fria")
        break;
    }
    case 18:{
        alert("Mayoria de edad, preparate para los impuestos. El SAT quiere saber tu ubicacion")
        break;
    }
    case 30:{
        alert("Estas en el climax de tu vida")
        break;
    }
    case 65:{
        alert("Ya te puedes jubilar, perfecto, preparate para conseguir un nuevo trabajo porque las pensiones no ayudan en nada")
        break;
    }
    default:{
        alert("Tu edad no es relevante en este momento.")
        break;
    }

}

}

document.getElementById('imagen').onclick=mostrarMensaje;
