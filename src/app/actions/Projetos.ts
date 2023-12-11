import { ROTAS } from '@/@types/enums/RotasEnum'
import silo from '@/assets/silo_inicio.jpeg'
import { StaticImageData } from 'next/image'

type ParagrafoProps = {
  titulo?: string
  texto: string[]
}

export type ProjetoProps = {
  id: string
  href: string
  img: StaticImageData
  titulo: string
  texto: ParagrafoProps[]
}

const id = '55971846-d46d-4937-a4d9-867ddcbe0bba'
export const calculos: ProjetoProps[] = [
  {
    id,
    href: [ROTAS.CALCULO, id].join('/'),
    img: silo,
    titulo:
      'Armazenamento de Grãos Reinventado: Inovações Tecnológicas para uma Agricultura de Excelência',
    texto: [
      {
        titulo: 'Sistemas Avançados de Ventilação',
        texto: [
          'Em nossa busca incessante pela inovação no campo do armazenamento de grãos, na Inovate Tech Solutions, dedicamo-nos a proporcionar uma experiência excepcional com nossos Sistemas Avançados de Ventilação.',
          'Nossos sistemas são projetados para ir além do simples arejamento. Eles representam a vanguarda da tecnologia, assegurando não apenas a circulação do ar, mas a manutenção de condições ambientais ideais para a preservação dos seus grãos. Com a implementação destes sistemas, garantimos que o ambiente de armazenamento seja controlado de maneira precisa e eficiente.',
          'Além disso, nossos Sistemas Avançados de Ventilação são configurados para se adaptarem às necessidades específicas do seu armazém. Não fornecemos soluções genéricas, mas sim personalizadas para garantir que cada cliente receba o máximo benefício de nossas inovações.',
          'Em resumo, na Inovate Tech Solutions, os Sistemas Avançados de Ventilação são mais do que uma simples funcionalidade. São a expressão da nossa dedicação em oferecer soluções de armazenamento de grãos que vão além das expectativas, proporcionando a você a confiança de que seus produtos agrícolas estão nas melhores condições possíveis.',
        ],
      },
      {
        titulo: 'Controle Total à Distância: Monitoramento Remoto Inteligente',
        texto: [
          'Em nossa busca incessante pela inovação no campo do armazenamento de grãos, na Inovate Tech Solutions, dedicamo-nos a proporcionar uma experiência excepcional com nossos Sistemas Avançados de Ventilação.',
          'Nossos sistemas são projetados para ir além do simples arejamento. Eles representam a vanguarda da tecnologia, assegurando não apenas a circulação do ar, mas a manutenção de condições ambientais ideais para a preservação dos seus grãos. Com a implementação destes sistemas, garantimos que o ambiente de armazenamento seja controlado de maneira precisa e eficiente.',
          'Além disso, nossos Sistemas Avançados de Ventilação são configurados para se adaptarem às necessidades específicas do seu armazém. Não fornecemos soluções genéricas, mas sim personalizadas para garantir que cada cliente receba o máximo benefício de nossas inovações.',
          'Em resumo, na Inovate Tech Solutions, os Sistemas Avançados de Ventilação são mais do que uma simples funcionalidade. São a expressão da nossa dedicação em oferecer soluções de armazenamento de grãos que vão além das expectativas, proporcionando a você a confiança de que seus produtos agrícolas estão nas melhores condições possíveis.',
        ],
      },
      {
        titulo:
          'Defesa Avançada para Sua Colheita: Inovações em Controle de Pragas',
        texto: [
          'Na Inovate Tech Solutions, estamos liderando a revolução no armazenamento de grãos através do nosso avançado sistema de Monitoramento Remoto Inteligente. Este recurso coloca você no comando, oferecendo um controle total sobre as condições de armazenamento, onde quer que esteja.',
          'Imagine poder supervisionar e ajustar as condições internas do seu armazém de grãos com um simples toque na tela do seu dispositivo. Com nosso sistema inteligente, isso se torna uma realidade. Monitore em tempo real a temperatura, a umidade e outros parâmetros vitais para a preservação dos grãos. A eficiência está literalmente ao alcance dos seus dedos.',
          'Além disso, o Monitoramento Remoto Inteligente não é apenas uma ferramenta de observação passiva. Nossos sensores avançados são projetados para detectar automaticamente variações nas condições do ambiente de armazenamento. Isso permite a tomada de ações proativas, garantindo que quaisquer desvios nas condições ideais sejam corrigidos antes que afetem a qualidade dos seus grãos.',
        ],
      },
      {
        titulo:
          'Ecossistema Sustentável: Potencializando Seu Armazém com Eficiência Energética',
        texto: [
          'Ecossistema Sustentável: Potencializando Seu Armazém com Eficiência Energética na Inovate Tech Solutions',
          'Na Inovate Tech Solutions, acreditamos que a eficiência energética é fundamental para um armazenamento de grãos moderno e sustentável. Nossas soluções não apenas preservam a qualidade dos seus grãos, mas também otimizam o consumo de energia, promovendo práticas operacionais mais amigáveis ao meio ambiente.',
          'Implementamos tecnologias avançadas que garantem o uso eficiente de recursos energéticos em todo o ciclo de armazenamento. Desde sistemas de iluminação até o controle de temperatura, cada aspecto é meticulosamente projetado para minimizar o impacto ambiental e reduzir os custos operacionais associados.',
          'Na prática, isso significa que, ao escolher a Inovate, você não está apenas investindo em tecnologia de ponta, mas também contribuindo para a construção de um futuro mais sustentável. Nossas soluções de Eficiência Energética não apenas beneficiam sua operação, mas também refletem um compromisso com a responsabilidade ambiental.',
        ],
      },
      {
        titulo: 'Integração de Dados com Agricultura Digital',
        texto: [
          'Integrando Dados para o Futuro: Agricultura Digital na Inovate Tech Solutions',
          'Na Inovate Tech Solutions, reconhecemos a importância da Integração de Dados com Agricultura Digital para otimizar o armazenamento de grãos e impulsionar a eficiência em todo o ciclo agrícola.',
          'Nossas soluções avançadas são projetadas para conectar sua produção ao mundo digital, proporcionando uma visão abrangente de todo o processo, desde a colheita até o armazenamento. Isso não apenas melhora a eficiência operacional, mas também oferece uma rastreabilidade completa da sua produção agrícola.',
          'Personalizamos nossas soluções para atender às necessidades específicas do seu armazém, garantindo que você aproveite ao máximo as vantagens da Agricultura Digital em sua produção agrícola. Na Inovate, estamos comprometidos em integrar o poder dos dados à excelência no armazenamento de grãos.',
        ],
      },
    ],
  },
]

const idSobre = '957e9386-181e-44b7-956e-0871db18de14'
export const objetoSobre: ProjetoProps = {
  id: idSobre,
  href: ROTAS.SOBRE,
  img: silo,
  titulo:
    'Armazenamento de Grãos Reinventado: Inovações Tecnológicas para uma Agricultura de Excelência',
  texto: [
    {
      titulo: 'Sistemas Avançados de Ventilação',
      texto: [
        'Em nossa busca incessante pela inovação no campo do armazenamento de grãos, na Inovate Tech Solutions, dedicamo-nos a proporcionar uma experiência excepcional com nossos Sistemas Avançados de Ventilação.',
        'Nossos sistemas são projetados para ir além do simples arejamento. Eles representam a vanguarda da tecnologia, assegurando não apenas a circulação do ar, mas a manutenção de condições ambientais ideais para a preservação dos seus grãos. Com a implementação destes sistemas, garantimos que o ambiente de armazenamento seja controlado de maneira precisa e eficiente.',
        'Além disso, nossos Sistemas Avançados de Ventilação são configurados para se adaptarem às necessidades específicas do seu armazém. Não fornecemos soluções genéricas, mas sim personalizadas para garantir que cada cliente receba o máximo benefício de nossas inovações.',
        'Em resumo, na Inovate Tech Solutions, os Sistemas Avançados de Ventilação são mais do que uma simples funcionalidade. São a expressão da nossa dedicação em oferecer soluções de armazenamento de grãos que vão além das expectativas, proporcionando a você a confiança de que seus produtos agrícolas estão nas melhores condições possíveis.',
      ],
    },
    {
      titulo: 'Controle Total à Distância: Monitoramento Remoto Inteligente',
      texto: [
        'Em nossa busca incessante pela inovação no campo do armazenamento de grãos, na Inovate Tech Solutions, dedicamo-nos a proporcionar uma experiência excepcional com nossos Sistemas Avançados de Ventilação.',
        'Nossos sistemas são projetados para ir além do simples arejamento. Eles representam a vanguarda da tecnologia, assegurando não apenas a circulação do ar, mas a manutenção de condições ambientais ideais para a preservação dos seus grãos. Com a implementação destes sistemas, garantimos que o ambiente de armazenamento seja controlado de maneira precisa e eficiente.',
        'Além disso, nossos Sistemas Avançados de Ventilação são configurados para se adaptarem às necessidades específicas do seu armazém. Não fornecemos soluções genéricas, mas sim personalizadas para garantir que cada cliente receba o máximo benefício de nossas inovações.',
        'Em resumo, na Inovate Tech Solutions, os Sistemas Avançados de Ventilação são mais do que uma simples funcionalidade. São a expressão da nossa dedicação em oferecer soluções de armazenamento de grãos que vão além das expectativas, proporcionando a você a confiança de que seus produtos agrícolas estão nas melhores condições possíveis.',
      ],
    },
    {
      titulo:
        'Defesa Avançada para Sua Colheita: Inovações em Controle de Pragas',
      texto: [
        'Na Inovate Tech Solutions, estamos liderando a revolução no armazenamento de grãos através do nosso avançado sistema de Monitoramento Remoto Inteligente. Este recurso coloca você no comando, oferecendo um controle total sobre as condições de armazenamento, onde quer que esteja.',
        'Imagine poder supervisionar e ajustar as condições internas do seu armazém de grãos com um simples toque na tela do seu dispositivo. Com nosso sistema inteligente, isso se torna uma realidade. Monitore em tempo real a temperatura, a umidade e outros parâmetros vitais para a preservação dos grãos. A eficiência está literalmente ao alcance dos seus dedos.',
        'Além disso, o Monitoramento Remoto Inteligente não é apenas uma ferramenta de observação passiva. Nossos sensores avançados são projetados para detectar automaticamente variações nas condições do ambiente de armazenamento. Isso permite a tomada de ações proativas, garantindo que quaisquer desvios nas condições ideais sejam corrigidos antes que afetem a qualidade dos seus grãos.',
      ],
    },
    {
      titulo:
        'Ecossistema Sustentável: Potencializando Seu Armazém com Eficiência Energética',
      texto: [
        'Ecossistema Sustentável: Potencializando Seu Armazém com Eficiência Energética na Inovate Tech Solutions',
        'Na Inovate Tech Solutions, acreditamos que a eficiência energética é fundamental para um armazenamento de grãos moderno e sustentável. Nossas soluções não apenas preservam a qualidade dos seus grãos, mas também otimizam o consumo de energia, promovendo práticas operacionais mais amigáveis ao meio ambiente.',
        'Implementamos tecnologias avançadas que garantem o uso eficiente de recursos energéticos em todo o ciclo de armazenamento. Desde sistemas de iluminação até o controle de temperatura, cada aspecto é meticulosamente projetado para minimizar o impacto ambiental e reduzir os custos operacionais associados.',
        'Na prática, isso significa que, ao escolher a Inovate, você não está apenas investindo em tecnologia de ponta, mas também contribuindo para a construção de um futuro mais sustentável. Nossas soluções de Eficiência Energética não apenas beneficiam sua operação, mas também refletem um compromisso com a responsabilidade ambiental.',
      ],
    },
    {
      titulo: 'Integração de Dados com Agricultura Digital',
      texto: [
        'Integrando Dados para o Futuro: Agricultura Digital na Inovate Tech Solutions',
        'Na Inovate Tech Solutions, reconhecemos a importância da Integração de Dados com Agricultura Digital para otimizar o armazenamento de grãos e impulsionar a eficiência em todo o ciclo agrícola.',
        'Nossas soluções avançadas são projetadas para conectar sua produção ao mundo digital, proporcionando uma visão abrangente de todo o processo, desde a colheita até o armazenamento. Isso não apenas melhora a eficiência operacional, mas também oferece uma rastreabilidade completa da sua produção agrícola.',
        'Personalizamos nossas soluções para atender às necessidades específicas do seu armazém, garantindo que você aproveite ao máximo as vantagens da Agricultura Digital em sua produção agrícola. Na Inovate, estamos comprometidos em integrar o poder dos dados à excelência no armazenamento de grãos.',
      ],
    },
  ],
}

// function mockProjetos(num: number): ProjetoProps[] {
//   const calculo: ProjetoProps[] = []

//   for (let i = 0; i < num; i++) {
//     const id = faker.string.uuid()

//     const calculo: ProjetoProps = {
//       id,
//       href: ROTAS.CALCULO + '/' + id,
//       img: silo,
//       texto: faker.lorem.paragraph(),
//       titulo: faker.lorem.words(3),
//     }
//     calculo.push(calculo)
//   }

//   return calculo
// }
