'use client'

import { FC, ReactNode } from "react";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider} from "next-themes";

type ProvidersProps = {
    children?: ReactNode
}

export const Provider: FC<ProvidersProps> = ({children}) => {
    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark">
                {children}
            </NextThemesProvider>
        </NextUIProvider>
    )
}
