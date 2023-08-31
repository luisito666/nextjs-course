import { FC } from "react";
import { useEffect, useState } from "react";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";


export const ThemeSwitcher: FC = () => {
    const [toggle, setToggle] = useState(Boolean)
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
        const storageTheme = localStorage.getItem('theme') || 'dark'
        setTheme(storageTheme)
        if(theme == 'dark') {
            setToggle(true)
        } else {
            setToggle(false)
        }
    }, [])

    const SetTheme = () => {
        if (toggle) {
            setToggle(!toggle)
            setTheme('light')
            localStorage.setItem('theme', 'light')
        } else {
            setToggle(!toggle)
            setTheme('dark')
            localStorage.setItem('theme', 'dark')
        }
    }

    if(!mounted) return null

    return (
        <>
            <Switch
                defaultSelected={toggle}
                onClick={() => SetTheme()}
                aria-label="Automatic updates"/>
        </>
    )
}