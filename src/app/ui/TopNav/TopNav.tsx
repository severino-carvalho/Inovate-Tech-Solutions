import { ROTAS } from '@/@types/enums/RotasEnum'
import { Kanit } from 'next/font/google'
import Link from 'next/link'
import NavLinks from './NavLinks'

const kanit = Kanit({
  subsets: ['latin'],
  weight: '600',
})

export default function TopNav() {
  return (
    <header className="flex items-center h-16 justify-between px-10 border-b-[0.1px] border-b-zinc-800">
      <Link className={'text-3xl ' + kanit.className} href={ROTAS.HOME}>
        <span className="hidden sm:block">Inovate Tech Solutions</span>
        <span className="block sm:hidden">ITS</span>
      </Link>

      <NavLinks />
    </header>
  )
}
