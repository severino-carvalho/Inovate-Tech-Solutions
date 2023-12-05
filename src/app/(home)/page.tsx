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
        'flex p-7 sm:px-10 md:px-16 lg:px-24 sm:pt-10 md:pt-16 lg:pt-24 gap-10 md:gap-16 lg:gap-24 h-full flex-col items-center justify-between',
        exo.className,
      )}
    >
      <section>
        <h1
          className={clsx(
            'text-4xl sm:text-5xl md:text-6xl font-sans font-medium text-center text-stone-200',
            lato.className,
          )}
        >
          Tecnologia em armazenamento de grãos
        </h1>
      </section>

      <section className="flex h-full  gap-10 md:gap-16 lg:gap-24 justify-center flex-col">
        <h2
          className={clsx(
            'text-xl font-sans font-medium text-justify sm:text-center text-neutral-500',
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

        <div className="flex justify-center items-center gap-5">
          <Link
            className="transition-all h-min ease-out delay-75 bg-white hover:bg-neutral-300 px-5 py-2 rounded-md text-black"
            href={ROTAS.PROJETOS}
          >
            Projetos
          </Link>
          <Link
            className="transition-all ease-out delay-75 bg-[#0a0a0a] hover:bg-neutral-800 border border-neutral-700 px-5 py-2 rounded-md"
            href={ROTAS.SOBRE}
          >
            Sobre
          </Link>
        </div>
      </section>
    </main>
  )
}
