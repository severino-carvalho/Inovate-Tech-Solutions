import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Inovate Tech Solutions',
    default: 'Inovate Tech Solutions',
  },
  description: 'Inovate Tech Solutions Web Application',
  keywords: [
    'Inovate Tech Solutions, Web Application',
    'Inovate Tech Solutions',
    'Inovate',
    'Tech',
    'Solutions',
    'Inovate Tech',
    'Inovate Solutions',
    'Tech Solutions',
  ],
  authors: [
    { name: 'Severino Carvalho da Silva Neto' },
    { name: 'Inovate Tech Solutions' },
  ],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} antialiased h-full bg-[rgba(0,0,0,8)] text-white`}
      >
        {children}
      </body>
    </html>
  )
}
