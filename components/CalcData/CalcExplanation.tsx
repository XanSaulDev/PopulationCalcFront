import React from 'react'
import { FirstEquation } from './FirstEquation'
import { DetailsEquationParts } from './DetailsEquationParts'
import { ExampleCalc } from '.'

export const CalcExplanation = () => {
  return (
    <article className="flex justify-center">
        <div className="md:w-8/12 w-11/12">

            <p>
                Supongamos que deseamos modelar el crecimiento de una población de animales en función del tiempo. Podemos utilizar una ecuación de primer orden para describir este proceso de la siguiente manera:
            </p>
            <div className="my-4 text-center">
                <FirstEquation />
            </div>
            <div className="my-6">
                <DetailsEquationParts />
            </div>
            <div className="my-6">
                <ExampleCalc />
            </div>

        </div>
    </article>
  )
}
