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


console.log(persona)
console.log(persona2)





