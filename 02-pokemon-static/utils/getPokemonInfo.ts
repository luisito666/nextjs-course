import { pokeApi } from "@/api"
import { Pokemon, Sprites } from "@/interfaces"

export const getPokemonInfo = async (nameOrId: string): Promise<{id: number, name: string , sprites: Sprites} | null>  => {

    try {
        const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`)

        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites
        }
        
    } catch(err){
        return null
    }  
    // return pokemon
  
}
