const persona = {
    nombre: 'Yaya',
    apellido: 'Gonzales',
    edad: 19,
    direccion: {
        ciudad: 'NY',
        zip: 535353,
        lat: 13.334,
        lng: 34.324
    }
}

const persona2 = {...persona}
persona2.nombre = 'Peter'


//console.log(persona)
//console.log(persona2)


// Segundo ejemplo
const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

//Agregar nuevas propiedades
producto.imagen = 'imagen.jpg'

//Eliminar propiedades
delete producto.disponible

// Congelar un objeto 
Object.freeze(producto)

/* Si nosotros deseamos agregar una nueva propiedad como ejemplo imagen ya no lo permitirá*/
// producto.imagen = 'imagen.jpg' 

console.log(producto)




