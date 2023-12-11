import Calculo from '@/ui/@screens/Projetos/Calculo'

export default function Page() {
  return (
    <div className="flex flex-col gap-10 p-7 sm:px-10 sm:pt-10 md:gap-16">
      <main className="flex min-h-screen flex-col gap-14">
        <Calculo />

        {/* <section className="flex flex-col flex-wrap gap-5 sm:flex-row">
          {calculos.map(({ id, titulo, texto, href, img }) => (
            <Card
              key={id}
              id={id}
              titulo={titulo}
              texto={texto}
              href={href}
              img={img}
            />
          ))}
        </section> */}
      </main>
    </div>
  )
}
