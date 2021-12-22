// import { owners } from './data/heroes'
import superHeroes from '../data/heroes'

// getHeroById (id)
// funciones de Flecha
//Encontrar a un super heroe por su id
export const getHeroById = (id) => {
    return superHeroes.find( hero => hero.id===id)
}


//getHeroesByOwner 'DC', 'Marvel'
export const getHeroesByOwner = (owner) => {
    return superHeroes.filter( hero=> hero.owner===owner)

}
