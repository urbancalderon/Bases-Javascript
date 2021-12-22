async function obtenerEmpleados() {

    const archivo = './src/empleados.json'

    /*fetch(archivo)
        .then(resultado => {
            return resultado.json()

        })
        .then( datos=>{
            console.log(datos.empleados)

            const { empleados } = datos

            empleados.forEach(empleado => {
                console.log(empleado)
            });
        })*/
        const resultado = await fetch(archivo)
        const datos = await resultado.json()
        console.log(datos)
}

obtenerEmpleados()