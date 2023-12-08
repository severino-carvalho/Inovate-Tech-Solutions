import { ROTAS } from '@/@types/enums/RotasEnum'
import { projetos } from '@/actions/Projetos'
import Breadcrumb from '@/ui/Breadcrumb/Breadcrumb'
import { FolderIcon, HomeIcon } from '@heroicons/react/20/solid'
import { notFound } from 'next/navigation'

type Props = {
  params: {
    id: string
  }
}

export default function Page({ params: { id } }: Props) {
  const projeto = projetos.find((projeto) => projeto.id === id)

  if (!projeto) return notFound()

  const itensBreadcrumb = [
    {
      titulo: 'Home',
      href: ROTAS.HOME,
      Icone: HomeIcon,
    },
    {
      titulo: 'Projetos',
      href: ROTAS.PROJETOS,
      Icone: FolderIcon,
    },
  ]

  return (
    <div className="flex flex-col gap-10 pt-5">
      <Breadcrumb itens={itensBreadcrumb} />
      <main className="flex min-h-screen flex-col">
        <header className="h-full w-full pt-5">
          <h1 className="text-5xl font-bold lowercase first-letter:uppercase">
            {projeto.titulo}
          </h1>
        </header>

        <article className="p-10">
          {projeto.texto.map(({ titulo, texto }, index: number) => (
            <section key={index} className="">
              <h2 className="text-xl font-bold">{titulo}</h2>
              <p className="text-justify indent-8 first-letter:uppercase">
                {texto}
              </p>
            </section>
          ))}
        </article>
      </main>
    </div>
  )
}
