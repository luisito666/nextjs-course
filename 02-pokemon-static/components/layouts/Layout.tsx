import { FC, ReactNode } from "react"

import Head from "next/head"

import { CustomNavbar } from "../ui"

type LayoutProps = {
    children?: ReactNode,
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<LayoutProps> = ({children, title}) => {

    return (
        <>
            <Head>
                <title>{ title || 'Pokemon App'}</title>
                <meta name="author" content="Luis Alberto Penagos" />
                <meta name="description" content="Informacion sobre el pokemon xxxx" />
                <meta name="keywords" content="xxxxx. Pokemon, pokedex" />
                
                <meta property="og:title" content={`Informacion sobre el pokemon ${title}`} />
                <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />

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

