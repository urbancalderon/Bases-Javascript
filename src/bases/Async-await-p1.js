const miPromesa = () => {
    return new Promise ( resolve => {
        setTimeout(() => {
            resolve('Tenemos un valor en la promesa')
        }, 1000); 
    })
}

const medirTiempoAsync = async() => {

    try {
        console.log('Inicio')

        const respuesta = await miPromesa()

        console.log('Fin')

        return 'fin de medir tiempo async'

    } catch (error) {
        return 'catch en medirTiempoAsync'
    }
    
}

medirTiempoAsync()


