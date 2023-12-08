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
        'flex h-full flex-col items-center justify-between gap-10 p-7 sm:px-10 sm:pt-10 md:gap-16 md:px-16 md:pt-16 lg:gap-24 lg:px-24 lg:pt-24',
        exo.className,
      )}
    >
      Sobre
    </main>
  )
}
