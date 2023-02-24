const web ={
    nombre:'www.blueweb.com',
    // El objeto puede contener en si otro objeto
    links :{
        enlace:'www.blueweb.com'
    },
    redesSociales: {
        youtube: {
           enlace: 'www.youtube.com' ,
           nombre:'blueweb yt'
        }
    }
}
// console.log(web.redesSociales.youtube.nombre);
// console.log(web.nombre);

const enlaceYT = web.redesSociales.youtube.enlace;

// console.log(enlaceYT);

const {enlace, nombre}=web.redesSociales.youtube;

console.log(enlace);