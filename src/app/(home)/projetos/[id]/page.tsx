import { ROTAS } from '@/@types/enums/RotasEnum'
import { projetos } from '@/actions/Projetos'
import Breadcrumb from '@/ui/Breadcrumb/Breadcrumb'
import { FolderIcon, HomeIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { notFound } from 'next/navigation'

type Props = { params: { id: string } }

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
      <main className="flex min-h-screen flex-col gap-14">
        <header className="h-full w-full pt-5">
          <h1 className="text-5xl font-bold lowercase first-letter:uppercase">
            {projeto.titulo}
          </h1>
        </header>

        <section>
          <Image
            className="max-h-96 max-w-5xl"
            src={projeto.img}
            alt={projeto.titulo}
          />
        </section>

        <article className="flex flex-col gap-14">
          {projeto.texto.map(({ titulo, texto }, sectionIndex: number) => (
            <section key={sectionIndex}>
              <h2 className="text-3xl font-bold">{titulo}</h2>
              {texto.map((texto, textIndex: number) => (
                <p
                  key={sectionIndex + '-' + textIndex}
                  className="pt-5 text-justify text-lg first-letter:uppercase"
                >
                  {texto}
                </p>
              ))}
            </section>
          ))}
        </article>
      </main>
    </div>
  )
}
