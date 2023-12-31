import { useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";

import confetti from 'canvas-confetti';

import { Layout } from "@/components/layouts";
import { Pokemon } from "@/interfaces";
import { localFavorites } from "@/utils";
import { getPokemonInfo } from "@/utils/getPokemonInfo";


interface PokemonPageProps {
    pokemon: Pokemon
}

const PokemonPage: NextPage<PokemonPageProps> = ({pokemon}) => {

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
    )
}

export const  getStaticPaths: GetStaticPaths = (ctx) => {
    const pokemon151 = [...Array(151)].map( (val, idx) => `${idx + 1}` )

    return {
        paths: pokemon151.map(id => (
            {
                params: { id }
            }
        )),
        fallback: 'blocking'
    }
}

// se ejecuta unicamente del lado del servidor y solo en build time
export const getStaticProps: GetStaticProps = async ({params}) => {

    const { id } = params as {id: string }
    const pokemon = await getPokemonInfo(id)

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
      },
      // Crear pagina estaticas cada x cantidad de tiempo
      revalidate: 86400,
    }
}

export default PokemonPage
