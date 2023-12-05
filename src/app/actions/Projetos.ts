import { ROTAS } from '@/@types/enums/RotasEnum'
import silo from '@/assets/silo_inicio.jpeg'
import { StaticImageData } from 'next/image'
import { faker } from '@faker-js/faker'

export type ProjetoProps = {
  href: string
  img: StaticImageData
  texto: string
  titulo: string
}
export const projetos: ProjetoProps[] = [
  {
    href: ROTAS.PROJETOS + '/' + faker.string.uuid(),
    img: silo,
    titulo: faker.lorem.sentence(),
    texto: faker.lorem.paragraph(),
  },
  {
    href: ROTAS.PROJETOS + '/' + faker.string.uuid(),
    img: silo,
    titulo: faker.lorem.sentence(),
    texto: faker.lorem.paragraph(),
  },
]
