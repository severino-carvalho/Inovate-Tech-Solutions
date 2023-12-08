import { ROTAS } from '@/@types/enums/RotasEnum'
import silo from '@/assets/silo_inicio.jpeg'
import { StaticImageData } from 'next/image'

type ParagrafoProps = {
  titulo?: string
  texto: string
}

export type ProjetoProps = {
  id: string
  href: string
  img: StaticImageData
  titulo: string
  texto: ParagrafoProps[]
}

const id = '957e9386-181e-44b7-956e-0871db18de14'
export const projetos: ProjetoProps[] = [
  {
    id,
    href: [ROTAS.PROJETOS, id].join('/'),
    img: silo,
    titulo:
      'Armazenamento de Grãos Reinventado: Inovações Tecnológicas para uma Agricultura de Excelência',
    texto: [
      {
        titulo: 'Sistemas Avançados de Ventilação',
        texto:
          'Em nossa busca incessante pela inovação no campo do armazenamento de grãos, na Inovate Tech Solutions, dedicamo-nos a proporcionar uma experiência excepcional com nossos Sistemas Avançados de Ventilação. Nossos sistemas são projetados para ir além do simples arejamento.Eles representam a vanguarda da tecnologia, assegurando não apenas a circulação do ar, mas a manutenção de condições ambientais ideais para a preservação dos seus grãos.Com a implementação destes sistemas, garantimos que o ambiente de armazenamento seja controlado de maneira precisa e eficiente. A prevenção da proliferação de fungos é uma das principais prioridades desses sistemas.A ventilação adequada não apenas mantém a temperatura adequada, mas também regula a umidade, evitando as condições propícias ao desenvolvimento de fungos prejudiciais aos seus grãos.Com a Inovate, você pode confiar na tecnologia de ponta para proteger a qualidade e a integridade de sua colheita. Além disso, nossos Sistemas Avançados de Ventilação são configurados para se adaptarem às necessidades específicas do seu armazém.Não fornecemos soluções genéricas, mas sim personalizadas para garantir que cada cliente receba o máximo benefício de nossas inovações. Em resumo, na Inovate Tech Solutions, os Sistemas Avançados de Ventilação são mais do que uma simples funcionalidade.São a expressão da nossa dedicação em oferecer soluções de armazenamento de grãos que vão além das expectativas, proporcionando a você a confiança de que seus produtos agrícolas estão nas melhores condições possíveis.',
      },
      {
        titulo: 'Controle Total à Distância: Monitoramento Remoto Inteligente',
        texto:
          'Na Inovate Tech Solutions, estamos liderando a revolução no armazenamento de grãos através do nosso avançado sistema de Monitoramento Remoto Inteligente. Este recurso coloca você no comando, oferecendo um controle total sobre as condições de armazenamento, onde quer que esteja. Imagine poder supervisionar e ajustar as condições internas do seu armazém de grãos com um simples toque na tela do seu dispositivo.Com nosso sistema inteligente, isso se torna uma realidade.Monitore em tempo real a temperatura, a umidade e outros parâmetros vitais para a preservação dos grãos.A eficiência está literalmente ao alcance dos seus dedos. Além disso, o Monitoramento Remoto Inteligente não é apenas uma ferramenta de observação passiva.Nossos sensores avançados são projetados para detectar automaticamente variações nas condições do ambiente de armazenamento.Isso permite a tomada de ações proativas, garantindo que quaisquer desvios nas condições ideais sejam corrigidos antes que afetem a qualidade dos seus grãos. Na Inovate, entendemos a importância da confiança na preservação da sua colheita.É por isso que investimos em tecnologia de ponta para proporcionar a você não apenas um sistema de monitoramento, mas uma ferramenta inteligente que eleva o controle e a segurança do armazenamento de grãos a um novo patamar. Com o Monitoramento Remoto Inteligente da Inovate Tech Solutions, sua produção agrícola está sempre sob os seus olhos, garantindo que cada grão seja preservado nas condições ideais, independentemente da sua localização.',
      },
      {
        titulo:
          'Defesa Avançada para Sua Colheita: Inovações em Controle de Pragas',
        texto:
          ' Na Inovate Tech Solutions, estamos comprometidos em garantir que sua colheita esteja protegida contra qualquer ameaça, e nossas Inovações em Controle de Pragas são a vanguarda dessa defesa.Vamos além dos métodos convencionais, adotando abordagens inovadoras que combinam automação e tecnologia para assegurar a integridade dos seus grãos. Nossos sistemas de controle de pragas não apenas reagem aos problemas, mas antecipam e previnem.Utilizamos sensores avançados que detectam precocemente qualquer sinal de infestação, permitindo uma intervenção rápida e eficaz.Dessa forma, garantimos que suas colheitas permaneçam livres de danos causados por pragas, preservando a qualidade dos seus grãos. Além disso, nossa abordagem personalizada garante que as soluções sejam adaptadas às especificidades do seu armazém.Cada ambiente é único, e nossas Inovações em Controle de Pragas são projetadas para se integrarem perfeitamente às suas necessidades, proporcionando uma proteção eficaz e eficiente. Na Inovate, acreditamos que a prevenção é a chave para um armazenamento de grãos bem- sucedido.Com nossas Inovações em Controle de Pragas, oferecemos a tranquilidade de saber que sua colheita está protegida, permitindo que você se concentre no crescimento e no sucesso da sua produção agrícola.',
      },
      {
        titulo:
          'Ecossistema Sustentável: Potencializando Seu Armazém com Eficiência Energética',
        texto:
          'Na Inovate Tech Solutions, acreditamos que a eficiência energética é fundamental para um armazenamento de grãos moderno e sustentável. Nossas soluções não apenas preservam a qualidade dos seus grãos, mas também otimizam o consumo de energia, promovendo práticas operacionais mais amigáveis ao meio ambiente. Implementamos tecnologias avançadas que garantem o uso eficiente de recursos energéticos em todo o ciclo de armazenamento.Desde sistemas de iluminação até o controle de temperatura, cada aspecto é meticulosamente projetado para minimizar o impacto ambiental e reduzir os custos operacionais associados. Na prática, isso significa que, ao escolher a Inovate, você não está apenas investindo em tecnologia de ponta, mas também contribuindo para a construção de um futuro mais sustentável.Nossas soluções de Eficiência Energética não apenas beneficiam sua operação, mas também refletem um compromisso com a responsabilidade ambiental. Ao adotar nossas práticas eficientes em energia, você experimentará não apenas uma redução nos custos operacionais, mas também a satisfação de fazer parte de um movimento em direção a um armazenamento de grãos mais inteligente, econômico e ecologicamente consciente.Na Inovate Tech Solutions, estamos liderando o caminho para um futuro mais sustentável na agricultura.',
      },
      {
        titulo: 'Integração de Dados com Agricultura Digital',
        texto: '',
      },
    ],
  },
]

// function mockProjetos(num: number): ProjetoProps[] {
//   const projetos: ProjetoProps[] = []

//   for (let i = 0; i < num; i++) {
//     const id = faker.string.uuid()

//     const projeto: ProjetoProps = {
//       id,
//       href: ROTAS.PROJETOS + '/' + id,
//       img: silo,
//       texto: faker.lorem.paragraph(),
//       titulo: faker.lorem.words(3),
//     }
//     projetos.push(projeto)
//   }

//   return projetos
// }

function gerarParagrafos(): ParagrafoProps[] {
  return []
}
