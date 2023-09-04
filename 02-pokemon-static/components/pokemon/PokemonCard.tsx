import { FC } from "react";

import { useRouter } from "next/router";
import { Card, CardBody, CardFooter , Image} from "@nextui-org/react";

import { SmallPokemon } from "@/interfaces";


interface PokemonCardProps {
    pokemon: SmallPokemon
}


export const PokemonCard: FC<PokemonCardProps> = ({pokemon: {name, img, id}}) => {

    const router = useRouter();

    const onClick = () => {
        router.push(`/name/${name}`)
    }

    return (
        <Card 
            isHoverable={true} 
            isPressable={true} 
            key={name}
            onClick={onClick}
            >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={name}
                className="object-cover h-[240px]"
                src={img}
              />
            </CardBody>
            <CardFooter style={{
              justifyContent: 'space-between'
            }}>
              <span style={{textTransform: 'capitalize'}}>
                {name}
              </span>
              <span>
                #{id}
              </span>
            </CardFooter>
        </Card>
    )
}
