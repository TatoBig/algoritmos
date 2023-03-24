const metodo2 = (cantidad: number, semilla: number, semilla2: number) => {
  console.log("Semilla 1 ", semilla);
  console.log("Semilla 2 ", semilla2);

  if (semilla.toString().length !== semilla2.toString().length) {
    throw new Error("Las semillas no tienen la misma cantidad de dígitos");
  }

  const numerosGenerados: string[] = [];

  const digits = semilla.toString().length;
  console.log(digits);
  let initial = semilla;
  let second = semilla2;

  for (let i = 0; i < cantidad; i++) {
    const step1 = initial * second;
    const step2 = step1.toString();
    const step3 =
      digits % 2 === 1 && step2.length % 2 !== 1 ? "0" + step2 : step2;
    console.log(`N${i + 1}: ` + step3);

    const step4 = step3.slice(
      step3.length / 4 + 1,
      step3.length / 4 + digits + 1
    );
    numerosGenerados.push(step4);
    initial = second;
    second = parseInt(step4);
  }

  return numerosGenerados;
};

const numeros2 = metodo2(5, 321, 456);
console.log(numeros2);
console.log(
  "Probabilidades: " +
    numeros2.map((x: string) => {
      return `0.${x}`;
    })
);
