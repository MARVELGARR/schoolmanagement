import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './redux/redux-provider/redux-provider'
import SessionProviders from '../lib/auth/session/session';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'HomePage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviders>
          <Theme>
            <Providers>
              {children}
            </Providers>
          </Theme>
        </SessionProviders>

        </body>
    </html>
  )
}
