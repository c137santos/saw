const vizinhos = (grid, x, y) => {
      //recebe a atual matriz, além da posição no eixo x e no eixo y de cada celula analisada
      let vivos = 0;
      for (let linha_x of [-1, 0, 1]) {
        for (let coluna_y of [-1, 0, 1]) {
          if (linha_x == 0 && coluna_y == 0) continue; // posição [0,0] se trata da célula em questão, então não é contabilizada

          const vizinho_x = x + linha_x;
          const vizinho_y = y + coluna_y;

          if (grid[vizinho_x]?.[vizinho_y]) {
            vivos += 1;
          }
        }
      }
      return vivos;
    };

const formaGrid = (numeroMatriz) => {
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
}

export { formaGrid, vizinhos}