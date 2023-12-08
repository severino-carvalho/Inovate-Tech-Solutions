import { ROTAS } from '@/@types/enums/RotasEnum'
import clsx from 'clsx'
import { Inter, Montserrat } from 'next/font/google'
import Link from 'next/link'

const lato = Montserrat({
  subsets: ['latin'],
  weight: '700',
})

const exo = Inter({
  subsets: ['latin'],
  weight: '500',
})

export default function Page() {
  return (
    <main
      className={clsx(
        'flex h-full flex-col items-center justify-between gap-10 p-7 sm:px-10 sm:pt-10 md:gap-16 md:px-16 md:pt-16 lg:gap-24 lg:px-24 lg:pt-24',
        exo.className,
      )}
    >
      <section>
        <h1
          className={clsx(
            'text-center font-sans text-4xl font-medium text-stone-200 sm:text-5xl md:text-6xl',
            lato.className,
          )}
        >
          Tecnologia em armazenamento de grãos
        </h1>
      </section>

      <section className="flex h-full  flex-col justify-center gap-10 md:gap-16 lg:gap-24">
        <h2
          className={clsx(
            'text-justify font-sans text-xl font-medium text-neutral-500 sm:text-center',
            exo.className,
          )}
        >
          Transformando colheitas em inovação, oferecemos soluções avançadas
          para o{' '}
          <span className="font-bold text-neutral-200">
            armazenamento eficiente de grãos
          </span>
          . Com tecnologia de ponta e compromisso com a excelência, garantimos a
          segurança e a qualidade dos seus produtos agrícolas.
        </h2>

        <div className="flex items-center justify-center gap-5">
          <Link
            className="h-min rounded-md bg-white px-5 py-2 text-black transition-all delay-75 ease-out hover:bg-neutral-300"
            href={ROTAS.PROJETOS}
          >
            Projetos
          </Link>
          <Link
            className="rounded-md border border-neutral-700 bg-[#0a0a0a] px-5 py-2 transition-all delay-75 ease-out hover:bg-neutral-800"
            href={ROTAS.SOBRE}
          >
            Sobre
          </Link>
        </div>
      </section>
    </main>
  )
}
