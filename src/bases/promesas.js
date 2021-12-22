import {getHeroById}  from './bases/imp-exp'
/* console.log('Inicio')

new Promise((resove, reject) => {

    console.log('cuerpo de la promesa')
    resolver('Promesa resuelta')
})
.then(console.log)
.catch(console.log)

console.log('Fin') */

const getHeroByIdAsync = (id) => {
    return new Promise ( ( resolve, reject )=> {

        setTimeout(() => {

            const hero = getHeroById(id)

            if (hero) {
                resolve (hero)
            } else {
                reject('El Heroe no existe')
            }

            
        }, 1000);
    });
}

getHeroByIdAsync(3)
    .then( h => {
        console.log(`El heroe es: ${ h.name }`)
    })
    .catch( console.log )



// ====================================================================================
const usuarioAutenticado = new Promise(function(resolve, reject){

    const auth = true

    if(auth) {
        resolve('Usuario autenticado') //EL PROMISE SE CUMPLE
    }else{
        reject('No se pudo iniciar sesión') // EL PROMISE NO SE CUMPLE
    }
});

usuarioAutenticado
    .then (function(resultado){
        console.log(resultado)
    })
    .catch(function(error){
        console.log(error)
    })

// En los Promises existen 3 valores
/* 
Peding : No se ha cumplido pero tampoco rechazado
Fulfield: Ya se cumplio
Rejected: Se ha rechazado o no se pudo cumplir

*/