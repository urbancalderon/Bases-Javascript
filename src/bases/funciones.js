/*function saludar(){
    return 'Hola mundo'
}*/

//Funciones de flecha 
const saludar = ( xyz ) => `Hola ${ xyz }`
const nombre = 'Tony'


//console.log(saludar(nombre))

const getUser = () => {
    return {
        id: 'ABC123',
        username: 'Tony001'
    }
}

//console.log( getUser() )

const heroes = [{
    id: 1,
    name: 'Batman'
},
{   id: 2,
    name: 'Superman'
}]

/*El método some() comprueba si al menos un elemento del array cumple con 
la condición implementada por la función proporcionada.*/ 

const existe = heroes.some (( heroe) => heroe.id ===1);
console.log(existe)
