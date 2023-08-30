import { FC, ReactNode } from "react"

import Head from "next/head"

import { CustomNavbar } from "../ui"

type LayoutProps = {
    children?: ReactNode,
    title?: string
}

export const Layout: FC<LayoutProps> = ({children, title}) => {

    return (
        <>
            <Head>
                <title>{ title || 'Pokemon App'}</title>
                <meta name="author" content="Luis Alberto Penagos" />
                <meta name="description" content="Informacion sobre el pokemon xxxx" />
                <meta name="keywords" content="xxxxx. Pokemon, pokedex" />
            </Head>

            <CustomNavbar />

            <main style={{
                padding: '0px 20px'
            }}>
                { children }
            </main>
        
        </>
    )
}

