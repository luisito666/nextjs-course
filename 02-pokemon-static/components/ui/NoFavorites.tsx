import { FC } from "react";

import { Image } from "@nextui-org/react";


export const NoFavorites: FC = () => {

    return (
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4" style={{
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 100px)',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center'
        }}>


            <h1>No hay Favoritos</h1>

            <Image 
                src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'}
                width={250}
                height={250}
                style={{
                    opacity: 0.1
                }}

            />

        </div>
    );
    
}

