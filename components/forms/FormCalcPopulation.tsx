import { CalcContext } from "@/context/calc/CalcContext";
import { useForm } from "@/hooks";
import { IFormCalcPopulation } from "@/interfaces";
import { useContext } from "react";

export const FormCalcPopulation = () => {

  const { getCalcDataAndSetInState } = useContext(CalcContext);
  const { form, handleChange } = useForm<IFormCalcPopulation>({
    rate: 0.1,
    population: 10,
    years: 20,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getCalcDataAndSetInState(form);
  };

  return (
    <div className="w-full flex justify-center items-center px-5">
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-4 gap-4">
          <label className="flex flex-col w-full">
            <span className="cursor-pointer font-semibold mb-1">
              Growth rate per year
            </span>
            <input
              name="rate"
              type="number"
              className="rounded-md p-1 outline-none"
              value={form.rate}
              onChange={handleChange}
            />
          </label>

          <label className="flex flex-col w-full">
            <span className="cursor-pointer font-semibold mb-1">
              Init population
            </span>
            <input
              name="population"
              type="number"
              className="rounded-md p-1 outline-none"
              value={form.population}
              onChange={handleChange}
            />
          </label>

          <label className="flex flex-col w-full">
            <span className="cursor-pointer font-semibold mb-1">
              Time on year
            </span>
            <input
              name="years"
              type="number"
              className="rounded-md p-1 outline-none"
              value={form.years}
              onChange={handleChange}
            />
          </label>
          <div className="md:self-end">
            <input
              type="submit"
              className="
                            bg-red-500 hover:bg-red-600 
                            transition-all duration-300 ease-in-out 
                            text-white rounded-lg py-2 cursor-pointer
                            md:w-24 w-full"
              value="Calculate"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
