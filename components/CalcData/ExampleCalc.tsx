import Latex from 'react-latex-next'
import 'katex/dist/katex.min.css';

export const ExampleCalc = () => {
  return (
    <div className="flex flex-col gap-4">
        Ejemplo
    <Latex>
    {
        `
        $\P(t) = C_1 \\cdot e^{rt}\$, es la solución general de la ecuación diferencial $\\frac{dP}{dt} = r \\cdot P$ $\\newline$
    `}
    </Latex>
    <Latex>{
        `
        $\\newline$
        - $\(P(t)\)$ representa la población en un momento $\(t\)$. $\\newline$ 
        - $\(C_1\)$ es una constante de integración que se determina a partir de una condición inicial específica. Esta constante refleja la población inicial  $(P_0\)$ en $\(t = 0\)$, pero necesitas una condición inicial adicional para calcular su valor exacto. $\\newline$ 
        - $\(0.1\)$ es la tasa de crecimiento $\(r\)$, que en este caso es igual a $\(0.1\)$ o $\(10\%\)$ por unidad de tiempo. $\\newline$ 
        - $\(e\)$ es la constante matemática de Euler, aproximadamente igual a $\(2.71828\)$. $\\newline$ 
        `}
    </Latex>
    <Latex>{
        `
        Para calcular la población en un momento específico $\(t\)$, debes proporcionar una condición inicial. Por ejemplo, si tienes una población inicial de $\(P_0 = 10\)$ en $\(t = 0\)$, puedes usar esta condición para encontrar el valor de $\(C_1\)$: $\\newline$ 
        
        `}
    </Latex>
    <Latex>{
        `
        $\[P(0) = C_1 \\cdot e^{0.1 \\cdot 0} = C_1 \\cdot e^0 = C_1 \\cdot 1 = C_1\]$ $\\newline$ 
        
        `}
    </Latex>
    <Latex>{
        `
        Por lo tanto, si $\(P_0 = 10\)$, entonces $\(C_1 = 10\)$, y la solución específica para tu caso sería: $\\newline$ 
        
        `}
    </Latex>
    <Latex>{
        `
        $\[P(t) = 10 \\cdot e^{0.1t}\]$ $\\newline$ 
        `}
    </Latex>
    <Latex>{
        `
        Con esta solución, puedes calcular la población en cualquier momento $\(t\)$ que desees. Por ejemplo, para calcular la población después de 5 años, simplemente sustituye $\(t = 5\)$ en la ecuación: $\\newline$ 
        `}
    </Latex>
    <Latex>{
        `
        $\[P(5) = 10 \\cdot e^{0.1 \\cdot 5}\]$
        `}
    </Latex>
    </div>
  )
}



