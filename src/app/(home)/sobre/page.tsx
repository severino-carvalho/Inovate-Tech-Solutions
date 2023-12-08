import { ROTAS } from '@/@types/enums/RotasEnum'
import { objetoSobre } from '@/actions/Projetos'
import Breadcrumb from '@/ui/Breadcrumb/Breadcrumb'
import { HomeIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export default function Page() {
  const itensBreadcrumb = [
    {
      titulo: 'Home',
      href: ROTAS.HOME,
      Icone: HomeIcon,
    },
    {
      titulo: 'Sobre',
      href: ROTAS.SOBRE,
      Icone: InformationCircleIcon,
    },
  ]

  return (
    <div className="flex flex-col gap-10 p-7 sm:px-10 sm:pt-10 md:gap-16">
      <Breadcrumb itens={itensBreadcrumb} />
      <main className="flex min-h-screen flex-col gap-14">
        <header className="h-full w-full pt-5">
          <h1 className="text-3xl font-bold lowercase first-letter:uppercase md:text-5xl">
            {objetoSobre.titulo}
          </h1>
        </header>

        <section>
          <Image
            className="max-h-52 max-w-full md:max-h-96 md:max-w-5xl"
            src={objetoSobre.img}
            alt={objetoSobre.titulo}
          />
        </section>

        <article className="flex flex-col gap-14">
          {objetoSobre.texto.map(({ titulo, texto }, sectionIndex: number) => (
            <section key={sectionIndex}>
              <h2 className="text-xl font-bold md:text-3xl">{titulo}</h2>
              {texto.map((texto, textIndex: number) => (
                <p
                  key={sectionIndex + '-' + textIndex}
                  className="pt-5 text-justify text-sm first-letter:uppercase md:text-lg"
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
