import { projetos } from '@/actions/Projetos'
import Card from '@/ui/Card/Card'

export default function Page() {
  return (
    <main
      className={
        'flex p-7 sm:px-10 md:px-24 sm:pt-6 md:pt-12 lg:pt- gap-10 md:gap-6 lg:px-p-16 lg:gap-24 h-full flex-col items-center justify-between'
      }
    >
      <section className="flex flex-col sm:flex-row gap-5">
        {projetos.map(({ titulo, texto, href, img }, index) => (
          <Card
            key={index}
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
