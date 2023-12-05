import { projetos } from '@/actions/Projetos'
import Card from '@/ui/Card/Card'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="flex gap-5">
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
