from random import random
from math import floor
import time, os

class Game():
    def __init__(self, linhas, colunas, vivos) -> None:
        self.linhas = linhas
        self.colunas = colunas
        self.celulas = [False if random() > (vivos/100) else True for _ in range(linhas * colunas)] #O conjunto dessas células forma a grande lista! Colocando o random como o construtor você joga menos de 10% dos vivos no meio. 
    
    def __repr__(self) -> str:
        gridizinho = '' #string que vai ser printada ao final
        for x in range(self.linhas): #montando o grid, para cada linha
            for y in range(self.colunas): # percorro as colunas
                gridizinho += '#' if self.celulas[x * self.colunas + y] else '.' # é atribuido a cada vez que celular for verdadeiro (if self.celulas[posição calculada ai]). Faço isso para cada células das colunas, verificando o valor da celula pelo par ordenado x,y. Onde x é o numero atual de linhas, multiplicado pelo numero de colunas que temos, somado a atual coluna que se esta (y). Isso se justifica porque estamos trabalhando com uma lista continua.
                gridizinho +=' ' # isso é śo um espaço
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
        x = floor(pos/self.colunas)
        y = pos % self.colunas
        return x, y

    def __alive_nbs(self, pos):
        par_ordenado = self.__into_to_coord(pos)
        count = 0
        vizinhos = []
        for linha in range(par_ordenado[0]-1, par_ordenado[0]+2):
            for coluna in range(par_ordenado[1]-1, par_ordenado[1]+2):
                if linha < 0 or linha >= self.linhas or coluna >= self.colunas or coluna < 0:
                    continue
                if (linha, coluna) == par_ordenado:
                    continue
                vizinhos.append((linha, coluna))
        r = []
        for v in vizinhos:
            r.append(v[0] *self.colunas +v[1])
        for p in r:
            if self.celulas[p]:
                count += 1
        return count

       

# IMPLEMENTAÇÃO ITERATIVA FUTURA
#  if __name__ ==  '__main__':
#     matriz_size = int((input('Qual será o tamaho da Matriz? Se por número quebrado eu vou arrendodar. To logo avisando! Vai : ')))
#     alives = 101
#     while alives > 100:
#         alives = int((input('Quantos percentos de vivos você deseja? 0 - 100. Vai: ')))
#         if (alives > 100) or (alives < 0):
#             print("Precisa ser de ZERO a CEM. Para de bagunçar o jogo! Vai: ")
#             alives = 101
    
#     grid= Game(matriz_size, matriz_size, alives)
#     grid.play_game()

grid = Game(10, 10, 20)

while True:
    print(grid)
    grid.update()
    time.sleep(0.5)
    os.system('clear')
#colelulas
