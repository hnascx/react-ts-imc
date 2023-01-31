export type Level = {
  title: string,
  color: string,
  icon: 'down' | 'up',
  imc: number[],
  yourImc?: number

}

export const levels: Level[] = [
  { title: 'Magreza', color: '#9CA3AB', icon: 'down', imc: [0, 18.5] },
  { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9] },
  { title: 'Sobrepreso', color: '#E2B039', icon: 'down', imc: [25, 30] },
  { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99] }
]

export const calculateImc = (height: number, weight: number) => {
  const imc = weight / (height * height)

  for(let i in levels) {
    if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      let levelCopy: Level = {...levels[i]}
      
      levelCopy.yourImc = parseFloat(imc.toFixed(2))
      return levelCopy
    }
    {/* o for é responsável por verificar cada objeto presente dentro do array de levels, o if é responsável por verificar através da sua condicional
        em qual posição do array imc[] dentro de cada objeto se encontra o resultado da const imc, dentro de calculateImc(), em seguida ele retorna o
        resultado do IMC e o objeto dentro do array de levels *CLASSIFICAÇÃO DO IMC* , que corresponda a análise do if ou, por último, retorna null */}
  }

  return null
}