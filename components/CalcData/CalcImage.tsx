import { CalcContext } from "@/context/calc/CalcContext";
import Image from "next/image";
import React, { useContext } from "react";

export const CalcImage = () => {
   const { htmlFigure } = useContext(CalcContext)
  return (
    <>
      {htmlFigure && (
        <Image
          src={htmlFigure}
          alt="grafica"
          className="md:mb-10"
          width={650}
          height={650}
        />
      )}
    </>
  );
};
