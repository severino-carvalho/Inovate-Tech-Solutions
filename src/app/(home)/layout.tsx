import { Metadata } from 'next'
import { ReactNode } from 'react'
import TopNav from '../ui/TopNav/TopNav'

export const metadata: Metadata = {
  title: 'Home',
}

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full">
      <TopNav />
      {children}
    </div>
  )
}
