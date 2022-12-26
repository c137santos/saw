export const formaGrid = (numeroMatriz) => {
  const grid = [];
  for (let l = 0; l < numeroMatriz; l++) {
    const linha = [];
    for (let c = 0; c < numeroMatriz; c++) {
      const add = Math.random() > 0.8;
      linha.push(add * 1);
    }
    grid.push(linha);
  }
  return grid;
};