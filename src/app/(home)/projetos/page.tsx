import { projetos } from '@/actions/Projetos'
import Card from '@/ui/Card/Card'

export default function Page() {
  return (
    <main
      className={
        'lg:pt- lg:px-p-16 flex h-full flex-col items-center justify-between gap-10 p-7 sm:px-10 sm:pt-6 md:gap-6 md:px-24 md:pt-12 lg:gap-24'
      }
    >
      <section className="flex flex-col flex-wrap gap-5 sm:flex-row">
        {projetos.map(({ id, titulo, texto, href, img }) => (
          <Card
            key={id}
            id={id}
            titulo={titulo}
            texto={texto}
            href={href}
            img={img}
          />
        ))}
      </section>
    </main>
  )
}
