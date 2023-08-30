import { FC } from "react"
import { useTheme } from "next-themes"

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Image} from "@nextui-org/react";
import { ThemeSwitcher } from "../layouts/ThemeSwitcher";


type NavbarProps = {

}


export const CustomNavbar: FC<NavbarProps> = () => {

    return (
        <Navbar>

            <NavbarBrand>
                <Image 
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" 
                    alt="Icono de la aplicacion"
                    width={70}
                    height={70}
                />
                <Link href="/">
                    <h2 className="font-bold text-inherit">P</h2>
                    <h3 className="font-bold text-inherit">okemon</h3>
                </Link>

            </ NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">

                <NavbarItem>
                    <Link href="/favorites">
                        Favoritos
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <ThemeSwitcher />
                </NavbarItem>
                
            </NavbarContent>

        </Navbar>
    )

    // const {theme} = useTheme()

    /*return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: 'red'
        }}>
            <span>Hola</span>
        </div>
    )*/
}