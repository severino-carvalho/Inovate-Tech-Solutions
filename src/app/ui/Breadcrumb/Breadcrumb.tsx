import Link from 'next/link'

type ItemBreadcrumb = {
  id: string
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
      <ol className="inline-flex items-center gap-2 rtl:space-x-reverse">
        {itens.map(({ id, titulo, href, Icone }, index) => (
          <li key={id} className="flex items-center gap-2">
            <Link
              href={href}
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-500"
            >
              {<Icone className="h-4 w-4 flex-shrink-0 text-gray-400" />}
              {titulo}
            </Link>

            {index !== itens.length - 1 && (
              <span className="flex items-center text-gray-400">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
