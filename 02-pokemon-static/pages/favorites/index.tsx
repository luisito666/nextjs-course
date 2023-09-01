import { useEffect, useState } from "react";

import { NextPage } from "next";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import { Layout } from "@/components/layouts";
import { NoFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import { PokemonCard } from "@/components/pokemon";


interface FavoritosProps {

}

const FavoritosHome: NextPage<FavoritosProps> = () => {


    const [favoritesPokemon, setFavoritesPokemon] = useState<{id: number, name: string}[]>([])

    useEffect(() => {
        setFavoritesPokemon( localFavorites.pokemons() )
    },[])

    return (
        <Layout title="Favoritos">
            {
                favoritesPokemon.length === 0
                ? ( <NoFavorites /> )
                : (
                    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                    {
                        favoritesPokemon.map( ({id, name}) => (
                            <PokemonCard key={id} pokemon={{
                                id: id, 
                                name: name, 
                                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}} 
                            />
                            ))
                    }
                    </div>
                )
            }
        </Layout>
    )
}

export default FavoritosHome
