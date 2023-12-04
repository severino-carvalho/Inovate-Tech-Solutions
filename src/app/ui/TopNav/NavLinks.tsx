'use client'

import { HomeIcon } from '@heroicons/react/20/solid'
import { PresentationChartLineIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ROTAS } from '../../@types/enums/RotasEnum'

const links = [
  { name: 'Home', href: ROTAS.HOME, icon: HomeIcon },
  { name: 'Projetos', href: ROTAS.PROJETOS, icon: PresentationChartLineIcon },
]

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <nav className="flex gap-1">
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex grow items-center justify-center gap-2 rounded-md py-2 px-4 text-sm hover:text-white sm:flex-none sm:justify-start font-medium',
              { 'text-[#3291ff]': pathname === link.href },
              { 'text-[#888]': pathname !== link.href },
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
