import { CalcContext } from '@/context/calc/CalcContext'
import React, { useContext } from 'react'

export const CalcYearsValues = () => {
  const { valuesAcrossYears } = useContext(CalcContext)
  return (
    <div>
      <ul>
        {
          valuesAcrossYears.map( (population, index) => (
            <li key={population+Date.now()*Math.random()} className="flex gap-4"> 
              {index}
              <span className="font-semibold">
                Población:
              </span>
              {population.toPrecision(6)}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
