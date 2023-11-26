import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '../redux/redux-provider/redux-provider'
import SessionProviders from '../lib/auth/session/session';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import ToasterContex from '../contexts/toastProvider';

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
              <ToasterContex/>
              {children}
            </Providers>
          </Theme>
        </SessionProviders>

        </body>
    </html>
  )
}
