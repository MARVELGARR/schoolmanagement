import { Inter } from 'next/font/google'

import type { Metadata } from 'next'
import SessionProviders from '@/lib/auth/session/session'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'site Dashboard',
}

const SidebarLayout = ({children} 
: {children: React.ReactNode}) => {
    return ( 
        <div className={'h-screen w-full flex justify-center items-center'}>
            <SessionProviders>
                {children}
            </SessionProviders>
        </div>
    );
}
 
export default SidebarLayout;