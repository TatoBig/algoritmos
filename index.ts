const metodo1 = (cantidad: number, semilla: number) => {
  if (semilla.toString().length % 2 !== 0) {
    throw new Error("No se permite una semilla con dígitos impares");
  }
  const numerosGenerados: string[] = [];

  const digits = semilla.toString().length;
  console.log(digits);
  let initial = semilla;

  for (let i = 0; i < cantidad; i++) {
    const step1 = initial ** 2;
    const step2 = step1.toString();
    const step3 = step2.length % 2 === 1 ? "0" + step2 : step2;
    console.log(`N${i + 1}: ` + step3);

    const step4 = step3.slice(step3.length / 4, step3.length / 4 + digits);
    numerosGenerados.push(step4);
    initial = parseInt(step4);
  }

  return numerosGenerados;
};

const numeros = metodo1(5, 3215);
console.log(numeros);

