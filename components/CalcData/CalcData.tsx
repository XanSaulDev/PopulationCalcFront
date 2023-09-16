import React, { useContext } from 'react'
import { CalcImage } from './CalcImage'
import { CalcYearsValues } from './CalcYearsValues'
import { Spinner } from '../ui'
import { CalcContext } from '@/context/calc/CalcContext'



export const CalcData = () => {
  const { isLoading } = useContext(CalcContext)
  return (
    <div className="flex justify-center flex-wrap items-start md:px-0 px-5 gap-10 my-6">
        {
          isLoading ? (
            <div className="md:w-[650px] w-full flex justify-center items-center md:h-96 h-60">
              <Spinner />
            </div>)  
          : <CalcImage />
        }
        <CalcYearsValues />
    </div>
  )
}
