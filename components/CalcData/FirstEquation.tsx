import React from 'react'
import Latex from 'react-latex-next'
import 'katex/dist/katex.min.css';

export const FirstEquation = () => {
  return (
  <Latex>{'$\\frac{dP}{dt}= r \\cdot P$'}</Latex>
  )
}
