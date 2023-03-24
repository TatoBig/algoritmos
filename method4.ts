const metodo4 = (
  cantidad: number,
  semilla: number,
  a: number,
  c: number,
  m: number
) => {
  console.log("Semilla ", semilla);
  console.log("a ", a);
  console.log("c ", c);
  console.log("m ", m);

  const numerosGenerados: string[] = [];

  let x = semilla;

  for (let i = 0; i < cantidad; i++) {
    x = (a * x + c) % m;
    numerosGenerados.push((x / (m - 1)).toFixed(4).toString());
  }

  return numerosGenerados;
};

const numeros4 = metodo4(4, 37, 19, 33, 100);
console.log(numeros4);
console.log("Probabilidades: " + numeros4);
