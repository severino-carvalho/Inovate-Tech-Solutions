import { ROTAS } from '@/@types/enums/RotasEnum'
import clsx from 'clsx'
import { Lato } from 'next/font/google'
import Link from 'next/link'
import NavLinks from './NavLinks'

const lato = Lato({
  subsets: ['latin'],
  weight: '900',
})

export default function TopNav() {
  return (
    <header className="flex items-center h-16 gap-10 px-10 border-b-[0.1px] border-b-zinc-800">
      <Link className={clsx('text-3xl', lato.className)} href={ROTAS.HOME}>
        <span className="hidden sm:block">Inovate Tech Solutions</span>
        <span className="block sm:hidden">ITS</span>
      </Link>

      <NavLinks />
    </header>
  )
}
