import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (bool) => {
    const [darkMode, setDarkMode] = useLocalStorage("dark-mode", bool)

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