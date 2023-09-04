import { useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";

import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";
import { PokeAPIResponse, Pokemon } from "@/interfaces";
import { getPokemonInfo } from "@/utils/getPokemonInfo";
import { localFavorites } from "@/utils";
import confetti from "canvas-confetti";



interface PokemonByNamePageProps {
    pokemon: Pokemon
}


export const PokemonByNamePage: NextPage<PokemonByNamePageProps> = ({pokemon}) => {
    
    const [isInFavorite , setIsInFavorite] = useState( localFavorites.existInFavorites(pokemon.id) );

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id, pokemon.name)
        setIsInFavorite(!isInFavorite)

        if (isInFavorite) return
        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 0.5,
                y: 0
            }
        })
    }

    return (
        <Layout title={`Detalle de ${pokemon.name}`}>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4" style={{
                    marginTop: '5px',
                    gap: 2
            }}>
                <Card isHoverable={true} style={{
                    padding: '30px'
                }}>
                    <CardBody>
                        <Image 
                            src={pokemon.sprites.other?.dream_world.front_default || 'no-image.png'}
                            alt={pokemon.name}
                            width='100%'
                            height={200}
                        /> 

                    </CardBody>
                </Card>
                <div>
                    <Card style={{
                        height: '100%'
                    }}>
                        <CardHeader style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <h1>
                                { pokemon.name }
                            </h1>

                            <Button 
                                color={ isInFavorite ? 'danger' : 'primary' }
                                onClick={ onToggleFavorite }>
                                { isInFavorite ? 'En Favoritos': 'Agregar a Favoritos' }
                            </Button>

                        </CardHeader>
                        <CardBody>
                            <span>Sprites</span>
                            <div style={{
                                display: 'flex'
                            }}>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />

                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />

                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />

                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />

                            </div>
                        </CardBody>
                    </Card>
                </div>  

            </div>
            
        </Layout>
    );
}


export const  getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data: { results } } = await pokeApi.get<PokeAPIResponse>('/pokemon?limit=151');

    return {
        paths:  results.map( pokemon => ({
            params: {
                name: pokemon.name
            }
        })) ,
        fallback: 'blocking'
    }
}


export const getStaticProps: GetStaticProps = async ({params}) => {
    const { name } = params as {name: string }
    const pokemon = await getPokemonInfo(name)

    if(!pokemon){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
      props: {
        pokemon
      }
    }
}


export default PokemonByNamePage;
