import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Home',
}

type PropsLayout = {
  children: ReactNode
}

export default function HomeLayout({ children }: PropsLayout) {
  return <div>{children}</div>
}
