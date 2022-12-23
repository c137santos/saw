export const formaGrid = (linhas, colunas) =>{
    const grid = []
    for (let l = 0; l < linhas; l++){
        const linha = [];
        for (let c = 0; c < colunas; c++){
            const add = Math.random() > 0.8
            linha.push(add * 1);
        }
        grid.push(linha)
    }
    return grid
}