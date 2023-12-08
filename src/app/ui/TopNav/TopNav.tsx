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
    <header className="flex h-28 items-center gap-10 border-b-[0.1px] border-b-zinc-800 px-10">
      <Link className={clsx('text-3xl', lato.className)} href={ROTAS.HOME}>
        <span className="hidden sm:block">Inovate Tech Solutions</span>
        <span className="block sm:hidden">ITS</span>
      </Link>

      <NavLinks />
    </header>
  )
}
