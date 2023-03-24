const metodo5 = (cantidad: number, semilla: number, k: number, g: number) => {
  console.log("Semilla ", semilla);
  console.log("k ", k);
  console.log("g ", g);

  const numerosGenerados: string[] = [];

  let x = semilla;
  const a = 5 + 8 * k;
  const m = 2 ** g;

  for (let i = 0; i < cantidad; i++) {
    x = (a * x) % m;
    numerosGenerados.push((x / (m - 1)).toFixed(4).toString());
  }

  return numerosGenerados;
};

const numeros5 = metodo5(4, 17, 2, 5);
console.log(numeros5);
console.log("Probabilidades: " + numeros5);
