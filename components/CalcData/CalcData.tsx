import React from 'react'
import { CalcImage } from './CalcImage'
import { CalcYearsValues } from './CalcYearsValues'



export const CalcData = () => {
  return (
    <div className="flex justify-center flex-wrap items-start md:px-0 px-5 gap-10 my-6">
        <CalcImage />
        <CalcYearsValues />
    </div>
  )
}
