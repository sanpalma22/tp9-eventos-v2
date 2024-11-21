'use client'
import { createContext, useEffect, useState } from "react"

export const TokenContext = createContext()

export function TokenProvider ({children}) {
    const [session, setSession] = useState({
        token: '',
        username: ''
    })
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const storedToken = JSON.parse(localStorage.getItem('token'));

        if(storedToken){
            setSession(storedToken)
            setIsLoggedIn(true)
        }
    }, [])

    const storageToken = (newToken) => {
        window.localStorage.setItem('token', JSON.stringify(newToken))
        setSession(newToken)
        setIsLoggedIn(true)
    }

    const cleanSession = () => {
        window.localStorage.removeItem('token')
        setSession({
            token: '',
            username: ''
        })
        setIsLoggedIn(false)
    }

    return (
        <TokenContext.Provider value={{
            session,
            storageToken,
            isLoggedIn: isLoggedIn,
            cleanSession
        }}>
            {children}
        </TokenContext.Provider>
    )
}