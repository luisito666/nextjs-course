import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";



interface PokemonPageProps {
    pokemon: Pokemon
}

const PokemonPage: NextPage<PokemonPageProps> = ({pokemon}) => {

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
                                color="primary">
                                Guardar en favoritos
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
    // const { data } = await //
    const pokemon151 = [...Array(151)].map( (val, idx) => `${idx + 1}` )
    // console.log(pokemon151)

    return {
        paths: pokemon151.map(id => (
            {
                params: { id }
            }
        )),
        fallback: false
    }
}

// se ejecuta unicamente del lado del servidor y solo en build time
export const getStaticProps: GetStaticProps = async ({params}) => {
    // const { data } = await pokeApi.get<PokeAPIResponse>('/pokemon?limit=151');
    const { id } = params as {id: string }
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`)
  
    return {
      props: {
        pokemon: data
      }
    }
}

export default PokemonPage
