import React from 'react'
import Latex from 'react-latex-next'
import 'katex/dist/katex.min.css';

export const FirstEquation = () => {
  return (
  <Latex>{'$P(t) = P_0 \\cdot (1 + r)^t$'}</Latex>
  )
}
