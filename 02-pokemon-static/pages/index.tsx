import { GetStaticProps, NextPage } from "next"

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import { Layout } from "@/components/layouts"
import { pokeApi } from "@/api"
import { PokeAPIResponse, SmallPokemon } from "@/interfaces"
import { PokemonCard } from "@/components/pokemon";

interface HomeProps {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<HomeProps> = ({pokemons}) => {

  return (
    <>
      <Layout title="Listado de Pokemons">

      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        { pokemons.map( (pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
        </div>
      </Layout>
    </>

  )
}

// se ejecuta unicamente del lado del servidor y solo en build time
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokeAPIResponse>('/pokemon?limit=151');

  const pokemon: SmallPokemon[] = data.results.map<SmallPokemon>( (data, idx) =>  ({
    ...data,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ idx + 1 }.svg`,
    id: Number(idx + 1 )
  }))

  return {
    props: {
      pokemons: pokemon
    }
  }
}

export default HomePage
