const metodo3 = (cantidad: number, semilla: number, constante: number) => {
  console.log("Semilla ", semilla);
  console.log("Constante ", constante);
  const numerosGenerados: string[] = [];

  const digits = semilla.toString().length;
  console.log(digits);
  let initial = semilla;

  for (let i = 0; i < cantidad; i++) {
    const step1 = initial * constante;
    const step2 = step1.toString();
    const step3 = step2.length % 2 === 1 ? "0" + step2 : step2;
    console.log(`N${i + 1}: ` + step3);

    const step4 = step3.slice(step3.length / 4, step3.length / 4 + digits);
    numerosGenerados.push(step4);
    initial = parseInt(step4);
  }

  return numerosGenerados;
};

const numeros3 = metodo3(5, 8521, 9632);
console.log(numeros3);
console.log(
  "Probabilidades: " +
    numeros3.map((x: string) => {
      return `0.${x}`;
    })
);
