import clsx from 'clsx'
import { Inter } from 'next/font/google'

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
      Sobre
    </main>
  )
}
