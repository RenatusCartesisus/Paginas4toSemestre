
        let fecha = new Date();

        let dia=fecha.getDate();
        let mes=fecha.getMonth()+1;
        let anio=fecha.getFullYear()

        if(dia<10){
            dia=`0${dia}`;
        }
        if(mes<10){
            mes=`0${mes}`;
        }

        document.getElementById('fecha').innerText=`${dia}/${mes}/${anio}`;
 