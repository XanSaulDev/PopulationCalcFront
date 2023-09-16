import React from 'react'
import Latex from 'react-latex-next'
import 'katex/dist/katex.min.css';

export const DetailsEquationParts = () => {
  return (
    <Latex >
        {`Donde: $\\newline$ 
        - \\(\\frac{dP}{dt}\\) representa la tasa de cambio de la población con respecto al tiempo (la tasa de crecimiento de la población). $\\newline$ 
        - P es la población en un momento dado. $\\newline$ 
        - r es la tasa de crecimiento de la población.Esta ecuación es una forma simple de describir el crecimiento de una población en función de su tamaño actual (P) y la tasa de crecimiento (r). $\\newline$
         La solución de esta ecuación diferencial depende de las condiciones iniciales (el valor de P en un tiempo inicial) y puede variar según el contexto específico de la población que estés estudiando.`}
    </Latex>
  )
}
