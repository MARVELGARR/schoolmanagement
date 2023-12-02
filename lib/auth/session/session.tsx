'use client'

import { SessionProvider } from "next-auth/react"


interface sessionProviderProps{
    children: React.ReactNode
}

const SessionProviders:React.FC<sessionProviderProps> = ({ children}) =>{
    return(
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default SessionProviders