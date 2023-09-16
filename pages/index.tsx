import { AppLayout, CalcData } from "@/components";
import { CalcExplanation } from "@/components/CalcData/CalcExplanation";
import { FormCalcPopulation } from "@/components/forms";
import { CalcProvider } from "@/context";


export default function Home() {
  return (
    <AppLayout>
      <CalcProvider>
        <main className="" >
          <FormCalcPopulation />
          <CalcData />
        </main>
        <CalcExplanation />

      </CalcProvider>
    </AppLayout>
  )
}
