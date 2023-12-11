'use client'

import calculos from '@/assets/8915643d-1fae-45ec-972e-b0e9fe3d87d0.jpg'
import modelo from '@/assets/Captura de tela 2023-12-10 233251.png'
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'

export default function Calculo() {
  return (
    <section className="flex flex-col gap-10">
      <h2 className="text-4xl font-medium">
        {'Como calculamos os preços dos nossos produtos?'}
      </h2>

      <section className="flex flex-col gap-3 text-neutral-300">
        <h3 className="text-xl font-medium">
          Entenda o processo: O <b>custo</b> para nossos clientes é determinado
          considerando o <b>volume</b> do cilindro que desejam adquirir. Essa
          abordagem visa simplificar a experiência
        </h3>

        <ul className="space-y-4 text-xl text-neutral-400">
          <li className="flex items-center space-x-3 rtl:space-x-reverse">
            <InformationCircleIcon className="h-5 w-5 text-blue-500" />
            <p>
              A altura (h) do silo, com base no volume (v), pode ser calculada
              usando a fórmula:
            </p>
            <p className="font-bold">h = ³√(3v / π)</p>
          </li>
          <li className="flex items-center space-x-3 rtl:space-x-reverse">
            <InformationCircleIcon className="h-5 w-5 text-blue-500" />
            <p>
              Para o raio (r) do hemisfério do silo, com base no volume (v), a
              fórmula é:
            </p>
            <p className="font-bold">r = ½ * ³√(3v / π)</p>
          </li>
          <li className="flex items-center space-x-3 rtl:space-x-reverse">
            <InformationCircleIcon className="h-5 w-5 text-blue-500" />
            <p>O custo (C) do silo é calculado pela seguinte fórmula:</p>
            <p className="font-bold">C = 2 * x * ³√(9 * π * v²)</p>
            <p>
              {
                'Onde "x" representa o custo por metro quadrado da parte do silo.'
              }
            </p>
          </li>
        </ul>

        <section className="gap-4 pt-10 md:flex md:flex-col">
          <h3 className="text-xl font-medium">Suponhamos que:</h3>

          <section className="space-y-2 text-xl text-neutral-400">
            <p>
              Um produtor de gãos pretende adquirir um silo com um volume total
              de <b>3.551/m³</b>
            </p>
            <p>
              O custo de aquisição é calculado a parti do base de{' '}
              <b>26 reais/m²</b>
            </p>
          </section>

          <section className="grid gap-10 pt-10 text-sm sm:text-xl md:grid-cols-2">
            <div className="flex flex-col space-y-2">
              <p className="text-lg">
                Vamos achar o valor da altura do cilindro:
              </p>
              <div className="flex flex-col">
                <code>h = raiz_cubica(3 * v / pi)</code>
                <code>h = raiz_cubica(3 * 3.551 / pi)</code>
                <code>h = raiz_cubica(10.653 / pi)</code>
                <code>h = raiz_cubica(3.390,95)</code>
                <code>h = 15,02m</code>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="text-lg">
                Vamos achar o valor do raio do hemisfério:
              </p>
              <div className="flex flex-col">
                <code>r = (1 / 2) * raiz_cubica(3 * v / pi)</code>
                <code>r = (1 / 2) * raiz_cubica(3 * 3.551 / pi)</code>
                <code>r = (1 / 2) * raiz_cubica(10.653 / pi)</code>
                <code>r = (1 / 2) * raiz_cubica(3.390,95)</code>
                <code>r = (1 / 2) * 15,02</code>
                <code>r = 7,01m</code>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="text-lg">
                Vamos calcular o valor total do produto:
              </p>
              <div className="flex flex-col">
                <code>C = 2 * x * raiz_cubica(9 * pi * v²)</code>
                <code>C = 2 * 26 * raiz_cubica(9 * pi * 3551²)</code>
                <code>C = 52 * raiz_cubica(9 * pi * 12.609.601)</code>
                <code>C = 52 * raiz_cubica(317,498,000)</code>
                <code>C = 52 * 709.08</code>
                <code>C = 36.872,38 reais</code>
              </div>
            </div>
          </section>
        </section>

        <div className="flex flex-col space-y-2 pt-10">
          <div
            className="mb-4 flex items-center gap-2 rounded-lg border border-green-300 bg-green-50 p-4  text-xl text-green-800 dark:border-green-800 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            <CheckCircleIcon className="h-5 w-5" />
            <span className="sr-only">Info</span>
            <div>
              <p>
                Para a construção de um silo de 15,02 metros de altura e um
                hemisfério com raio de 7,01 metros, o custo associado é de{' '}
                <strong>R$ 36.872,38</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <h5 className="text-lg">Material de apoio:</h5>

        <div className="flex flex-col gap-3">
          <Image src={calculos} alt="calculos" />
          <Image src={modelo} alt="calculos" />
        </div>
      </section>
    </section>
  )
}
