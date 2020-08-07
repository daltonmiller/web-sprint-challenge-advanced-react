import { useEffect, useState } from 'react'

export const useDarkMode = (bool) => {
    const [darkMode, setDarkMode] = useState("dark-mode", bool)

    useEffect(() => {
        const body = document.querySelector("body");
        if(darkMode) {
            body.classList.add("dark-mode")

        }else {
            body.classList.remove("dark-mode")
        }
    }, [darkMode])
    return [darkMode, setDarkMode]
}