// Funcion autoinvocada en JavaScript
// IIFE (Immediately Invoked Function Expression)
(function(){

    let formulario = document.getElementsByName('formulario')[0];
    let elementos = formulario.elements;
    let boton = document.getElementById('btn');

    let validarNombre = function(e){
        if(formulario.nombre.value == 0){
            alert("Ingresa tu nombre");
            e.preventDefault();
        }
    };
    let validarTerminos = function(e){
        if(!formulario.terminos.checked){
            alert("Acepta los terminos y condiciones");
            e.preventDefault();
        }
    };
    let validarRadio = function(e){
        if(!formulario.sexo[0].checked&&!formulario.sexo[1].checked){
            alert("Ingresa tu sexo");
            e.preventDefault();
        }
    };

    let validar = function(e) {
        validarNombre(e);
        validarRadio(e);
        validarTerminos(e);
    };

    formulario.addEventListener("submit", validar);

}()); 