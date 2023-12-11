'use client'

import { ExclamationCircleIcon, HomeIcon } from '@heroicons/react/20/solid'
import { PresentationChartLineIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ROTAS } from '../../@types/enums/RotasEnum'

const links = [
  {
    name: 'Home',
    href: ROTAS.HOME,
    icon: HomeIcon,
    verificacao: (termo: string): boolean => termo === ROTAS.HOME,
  },
  {
    name: 'Calcular',
    href: ROTAS.CALCULO,
    icon: PresentationChartLineIcon,
    verificacao: (termo: string): boolean => termo.includes(ROTAS.CALCULO),
  },
  {
    name: 'Sobre',
    href: ROTAS.SOBRE,
    icon: ExclamationCircleIcon,
    verificacao: (termo: string): boolean => termo.includes(ROTAS.SOBRE),
  },
]

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <nav className="flex gap-5">
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex grow items-center justify-center gap-2 rounded-md text-sm font-medium transition-all delay-75 ease-out sm:flex-none sm:justify-start',
              { 'text-[#3291ff]': link.verificacao(pathname) },
              {
                'text-[#888] hover:text-neutral-200':
                  !link.verificacao(pathname),
              },
            )}
          >
            <LinkIcon className="sm:hidden" width={20} height={20} />
            <p className="hidden sm:block">{link.name}</p>
          </Link>
        )
      })}
    </nav>
  )
}
