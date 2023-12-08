import { ProjetoProps } from '@/actions/Projetos'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({ titulo, texto, href, img }: ProjetoProps) {
  return (
    <div className="max-w-sm rounded-lg border border-gray-700 shadow dark:bg-zinc-950">
      <Link href={href}>
        <Image className="rounded-t-lg" src={img} alt="" />
      </Link>
      <div className="p-5">
        <Link href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {titulo}
          </h5>
        </Link>
        <p className="mb-3 text-justify font-normal text-gray-700 dark:text-gray-400">
          {texto[0].texto.split(' ').slice(0, 30).join(' ')}...
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-1 rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <ArrowRightIcon className="w-5" />
        </Link>
      </div>
    </div>
  )
}
