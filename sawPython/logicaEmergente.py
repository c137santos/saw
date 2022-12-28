##Refazendo jogo em forma linear

import random
import time, os
numero_matriz = 30

def vivo_ou_morto():
    celula = random.random()
    if celula > 0.8:
        celula = 1
        return celula
    celula = 0
    return celula
    

def desenhar_matriz(numero_matriz):
    linha = []
    matriz_alfa =[]
    for eixo_x in range(numero_matriz):
        for eixo_y in range(numero_matriz):
            celula = vivo_ou_morto()
            linha.append(celula)
        matriz_alfa.append(linha)
        linha = []
    return matriz_alfa


def atualizar_grid(matriz_alfa):
    matriz_atualizada=[]
    for eixo_x, lista_da_linha in enumerate(matriz_alfa):
        linha=[]
        for eixo_y, celula in enumerate(lista_da_linha):
            vivos = calcular_vizinhos_vivos(matriz_alfa, eixo_x, eixo_y)
            if matriz_alfa[eixo_x][eixo_y] == 1:
                if vivos < 2 or vivos > 3:
                    linha.append(0)
                else:
                    linha.append(1)
            else:
                if vivos == 3:
                    linha.append(1)
                else:
                    linha.append(0)
        matriz_atualizada.append(linha)
    return matriz_atualizada


def calcular_vizinhos_vivos(matriz_alfa, eixo_x, eixo_y):
    cubo = [-1 ,0, 1]
    eu = matriz_alfa[eixo_x][eixo_y] 
    vivos=0
    if eu == 1:
        vivos = -1 
    for x in cubo:
        for y in cubo:
            if (eixo_y + y) >= 0 and (eixo_x + x) >= 0:
                if (eixo_y + y) < len(matriz_alfa) and (eixo_x + x) < len(matriz_alfa):
                    vivos += matriz_alfa[eixo_x + x][eixo_y + y]
    return vivos


matriz_alfa = desenhar_matriz(numero_matriz)
while True:
    matriz_atualizada = atualizar_grid(matriz_alfa)
    time.sleep(0.5)
    for i in matriz_atualizada:
        print(i)
    matriz_alfa = matriz_atualizada
    os.system('clear')
