<template>
  <div>
    <topNavBat></topNavBat>
    <div class="divdoinput">
      <p>Informe o tamanho da sua matriz: 1 a 99</p>
      <div class="centralizador">
        <input
          type="number"
          min="1"
          v-model="numeroMatriz"
          pattern="/^-?\d+\.?\d*$/"
          onKeyPress="if(this.value.length==2) return false;"
        />
        <div class="dosbotoes">
          <button id="reinicia" @click="reiniciaJogo">Reiniciar</button>
          <button v-if="ativarBotaoPlay" @click.prevent="playGame">Play</button>
        </div>
        <p>Estamos na geração {{ geracoes }}</p>
      </div>
    </div>
    <div class="tabelinha">
      <table>
        <tr v-for="(line, r) in grid" :key="`${line}-${r}`">
          <td
            v-for="(coluna, c) in line"
            :key="`${r}-${c}-${coluna}`"
            :class="classes(r, c)"
            @click="clickUsuario(r, c)"
          >
            &nbsp;
          </td>
        </tr>
      </table>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
import { formaGrid, vizinhos } from "./life";
import topNavBat from "./components/topNavBat.vue";
import footerBar from "./components/footerBar.vue";

export default {
  components: {
    topNavBat,
    footerBar,
  },
  data() {
    return {
      grid: [],
      numeroMatriz: 0,
      gameOver: false,
      geracoes: 0,
      ativarBotaoPlay: true,
      rotina: null,
    };
  },
  methods: {
    playGame() {
      this.ativarBotaoPlay = false;
      let loopAtualizacao = () => {
        if (this.gameOver == true) {
          clearInterval(this.rotina);
        } else {
          this.calculoDaNovaMatriz();
          this.geracoes++;
        }
      };
      this.grid = formaGrid(this.numeroMatriz);
      this.rotina = setInterval(loopAtualizacao, 500); // Esta parte dispara as atualizações da matriz
    },
    calculoDaNovaMatriz() {
      let new_matriz = JSON.parse(JSON.stringify(this.grid));
      for (let i = 0; i < this.numeroMatriz; i++) {
        for (let j = 0; j < this.numeroMatriz; j++) {
          let alives = vizinhos(this.grid, i, j); // função que calcula quantos vivos está ao rodar de cada celula
          if (this.grid[i][j] === 1) {
            // vivo
            if (alives < 2 || alives > 3) {
              new_matriz[i][j] = 0;
            }
          } else {
            // morto
            if (alives === 3) {
              new_matriz[i][j] = 1;
            }
          }
        }
      }
      if (JSON.stringify(new_matriz) == JSON.stringify(this.grid)) {
        this.gameOver = true; // Flag que desliga o loop de atualização da matriz
      }
      this.grid = new_matriz;
      return new_matriz;
    },
    classes(linha, coluna) {
      return {
        pintado: this.grid[linha][coluna],
      };
    },
    reiniciaJogo() {
      this.grid = [];
      this.gameOver = false;
      this.geracoes = 0;
      this.ativarBotaoPlay = true;
    },
    clickUsuario(linha, coluna) {
      console.log("Ainda não funciona como deveria");
      if (this.rotina) {
        this.grid[linha][coluna] = this.grid[linha][coluna] == 0 ? 1 : 0
      }
    },
  },
};
</script>

<style scoped>
.divdoinput {
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #000000;
  background-image: url("./static/sky.jpg");
  background-size: cover;
}
input {
  background: white;
}
.centralizador {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
p {
  margin: 2%;
  color: white;
  text-align: center;
  font-size: 20px;
}
table td {
  border: 1px solid #eee;
  width: 30px;
  height: 30px;
  background-color: rgb(0, 0, 0);
}
table {
  margin: 2%;
}
.pintado {
  background-color: white;
}
.tabelinha {
  background-image: url("./static/sky.jpg");
  background-size: cover;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  min-height: 50vh;
}

.dosbotoes {
  margin:2%;
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-around;
}

button {
  background: white;
  margin: 2%;
  width: 20%;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid rgb(82, 78, 78);
}

#reinicia {
  justify-content: flex-end;
}
</style>
