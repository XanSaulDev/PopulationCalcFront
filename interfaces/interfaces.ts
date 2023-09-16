export interface IFormCalcPopulation {
  rate: number;
  population: number;
  years: number;
}

export interface ICalcContext{
  htmlFigure: string;
  getCalcDataAndSetInState: (formData: IFormCalcPopulation) => Promise<void>;
  valuesAcrossYears: number[];
}