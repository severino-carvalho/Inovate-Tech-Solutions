import Link from 'next/link'

type ItemBreadcrumb = {
  titulo: string
  href: string
  Icone: JSX.ElementType
}

type Props = {
  itens: ItemBreadcrumb[]
}

export default function Breadcrumb({ itens }: Props) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-2">
        {itens.map(({ titulo, href, Icone }, index) => (
          <>
            <li key={index} className="flex items-center">
              <Link
                href={href}
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-500"
              >
                {<Icone className="h-4 w-4 flex-shrink-0 text-gray-400" />}
                {titulo}
              </Link>
            </li>
            {index !== itens.length - 1 && (
              <li key={index} className="flex items-center">
                <span className="flex items-center text-gray-400">/</span>
              </li>
            )}
          </>
        ))}
      </ol>
    </nav>
  )
}
