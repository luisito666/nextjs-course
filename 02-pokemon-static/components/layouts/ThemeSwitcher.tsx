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
    }, [])

    const SetTheme = () => {
        if (toggle) {
            setToggle(!toggle)
            setTheme('light')
        } else {
            setToggle(!toggle)
            setTheme('dark')
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