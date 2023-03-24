const metodo6 = (cantidad: number, semillas: number[], m: number) => {
  console.log("Semillas ", semillas);
  console.log("m ", m);

  const numerosGenerados: string[] = [];

  let first = semillas[0];
  let last = semillas[semillas.length - 1];
  let lastCounter = semillas.length - 1;

  for (let i = 0; i < cantidad; i++) {
    const newNumber = (first + last) % m
    semillas.push(newNumber);
    lastCounter++;
    first = semillas[i + 1];
    last = semillas[lastCounter];
    numerosGenerados.push((newNumber / (m - 1)).toFixed(4).toString());
  }

  return numerosGenerados;
};

const numeros6 = metodo6(8, [65, 89, 98, 3, 69], 100);
console.log(numeros6);
console.log("Probabilidades: " + numeros6);
