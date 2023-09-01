
interface Favorites {
    id: number
    name: string
}

const toggleFavorite = (id: number, name: string): void => {
    let favorites: Favorites[] = JSON.parse( localStorage.getItem('favorites') || '[]' )

    if(favorites.some( item => item.id == id)) {
        favorites = favorites.filter(poke => poke.id !== id)
    } else {
        favorites.push({id, name})
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
}


const existInFavorites = (id: number): boolean => {
    if(typeof window === 'undefined' ) return false
    const favorites: Favorites[] = JSON.parse( localStorage.getItem('favorites') || '[]' ) 
    return favorites.some( item => item.id == id)
}

const pokemons = (): Favorites[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]')
}

export default {
    toggleFavorite,
    existInFavorites,
    pokemons,
}
