const persona = {
    name: 'Tony',
    age: 45,
    codeName: 'Iroman'
}

/* Javascript crea varias constantes y estas constanates son extraidas
del onjeto persona con los datos que deseamos extraer*/ 

const { name, age, codeName, power = 'No tiene poder' } = persona 


/* const crearHeroe = ( persona ) => {

const {name, age, codeName, power = 'Fuerza'} = persona

    return {
        id: 1234,
        name,
        age,
        codeName,
        power,
    }
} */

/* 2da Forma de desestructurar un objeto */
const crearHeroe = ({name, age, codeName, power = 'Fuerza'}) => {
    return {
        id: 1234,
        name,
        age, 
        codeName,
        power
    }
} 

/* Hacer el codigo más pequeño 
const crearHeroe = ({name, age, codeName, power = 'Fuerza'}) => 
    ({
        id: 1234,
        name,
        age, 
        codeName,
        power,
    }) */

//console.log( crearHeroe(persona) )


// Ejemplo 2 destructuring
const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}


const {precio, nombreProducto, precio, disponible}  = producto

console.log(producto)