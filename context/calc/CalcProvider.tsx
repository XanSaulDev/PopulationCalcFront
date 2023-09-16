import { FC, ReactNode, useEffect, useState } from "react";
import { CalcContext } from "./CalcContext";
import { calcApi } from "@/api";
import { IFormCalcPopulation } from "@/interfaces";

interface Props {
  children: ReactNode;
}

export const CalcProvider: FC<Props> = ({ children }) => {
  const [htmlFigure, sethtmlFigure] = useState<string>("");
  const [valuesAcrossYears, setValuesAcrossYears] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getCalcDataAndSetInState = async (formData: IFormCalcPopulation) => {
    try {
      setIsLoading(true);
      const { data } = await calcApi.post("/calculate-population", formData);

      sethtmlFigure(data["figure"]);
      setValuesAcrossYears(data["number_of_population_across_years"]);
      setIsLoading(false);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCalcDataAndSetInState({ rate: 0.1, population: 10, years: 20 });
  }, []);

  return (
    <CalcContext.Provider
      value={{
        htmlFigure,
        getCalcDataAndSetInState,
        valuesAcrossYears,
        isLoading
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};
