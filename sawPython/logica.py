from random import random
from math import floor
import time, os

class Game():
    def __init__(self, linhas, colunas, vivos) -> None:
        self.linhas = linhas
        self.colunas = colunas
        self.celulas = [False if random() > (vivos/100) else True for _ in range(linhas * colunas)] 
    
    def __repr__(self) -> str:
        gridizinho = ''
        for y in range(self.linhas):
            for x in range(self.colunas): 
                gridizinho += '#' if self.celulas[y * self.colunas + x] else '.' 
                gridizinho +=' ' 
            gridizinho +='\n'
        return gridizinho

    def update(self) -> list:
        new_grid = [x for x in self.celulas]
        for pos, val in enumerate(self.celulas):
            alive_n = self.__alive_nbs(pos)
            if val:
                if alive_n < 2 or alive_n > 3:
                    new_grid[pos] = False
            else:
                if alive_n == 3:
                    new_grid[pos] = True
        self.celulas = new_grid

    def __into_to_coord(self, pos):
        x = pos % self.colunas
        y = floor(pos/self.colunas)
        return x, y

    def __alive_nbs(self, pos):
        par_ordenado = self.__into_to_coord(pos)
        count = 0
        vizinhos = []
        for linha in range(par_ordenado[1]-1, par_ordenado[1]+2): 
            for coluna in range(par_ordenado[0]-1, par_ordenado[0]+2):
                if linha < 0 or linha >= self.linhas or coluna >= self.colunas or coluna < 0:
                    continue
                if (coluna, linha) == par_ordenado:
                    continue
                vizinhos.append((linha, coluna))
        r = []
        for v in vizinhos:
            r.append(v[0] *self.colunas +v[1])
        for p in r:
            if self.celulas[p]:
                count += 1
        return count

       

if __name__ ==  '__main__':
    while True:
        try:
            matriz_size = int((input('Qual será o tamaho da Matriz? Se por número quebrado eu vou arrendodar. To logo avisando! Sugestão 0 - 100: ')))
            break
        except:
            print("Vamos lá, você não está querendo colaborar. É UM NÚMERO")
    alives = 0
    while True:
        try:
            alives = int((input('Quantos percentos de vivos você deseja? 0 - 100. Vai: ')))
            if (alives > 100) or (alives < 0):
                print("Precisa ser de ZERO a CEM. Para de bagunçar o jogo! Vai: ")
            else:
                break
        except:
            print("Vamos lá, você não está querendo colaborar. É UM NÚMERO")
    grid = Game(matriz_size, matriz_size, alives)
    while True:
        print(grid)
        grid.update()
        time.sleep(0.5)
        os.system('clear')

