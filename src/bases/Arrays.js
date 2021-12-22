const arreglo = [1,2,3,4] //Definición de un arreglo
arreglo.push(5)

const arreglo2= [...arreglo] //Creamos una nueva relación o nuevo espacio en memoria
// para esparcir todos los valores que se encuentran dentro del arreglo
arreglo2.push(6) ///empujamos el nuevo valor

/* Función map es una función que permite transformar los elementos
de una lista y que devuelve una nueva lista con los elementos tranasformados*/
const arreglo3 = arreglo2.map(function(n){
    return n * 2
})

arreglo3.push(14)
console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)