let firstName;
let lastName='Heerrera'

//console.log(`${ firstName || 'No firstName' } ${ lastName || 'No lastName '}`)


//Ejemplo de evaluacion si es activo

/* 
const isActive = true

let message = ''

if( isActive ) {
    message = 'Activo'
}else{
    message = 'Inactivo'
} */


//Evaluacion con un ternario de si es activo
const isActive = true

const message = ( isActive === true ) ? 'Activo' : 'Inactivo'

console.log(message)
