<template>
  <div>
    <topNavBat></topNavBat>
    <div class="tabelinha">
    <table>
      <tr v-for="(line, r) in grid" :key="`${line}-${r}`">
        <td
        v-for="(coluna, c) in line"
        :key="`${r}-${c}-${coluna}`"
        :class="classes(r, c)"
        ></td>
      </tr>
    </table>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
import { formaGrid } from '../life.js';
import topNavBat from './components/topNavBat.vue';
import footerBar from './components/footerBar.vue'

const lines = 20
const columns = 20

export default {
  components: {
    topNavBat,
    footerBar
  },
  data() {
    return {
      grid: formaGrid(lines, columns),
      lines: lines,
      columns: columns,
    };
  },
  methods: {
    update() {
      let new_matriz = JSON.parse(JSON.stringify(this.grid))

      for (let i = 0; i < this.lines; i++) {
        for (let j = 0; j < this.columns; j++) {
          let alives = this.vizinhos(this.grid, i, j);
          
          if (this.grid[i][j] === 1) { // vivo
            if (alives < 2 || alives > 3) {
              new_matriz[i][j] = 0
            }
          } else { // morto
            if (alives === 3) {
              new_matriz[i][j] = 1
            }
          }

        }
      }
      this.grid = new_matriz;
      return new_matriz
    },
    vizinhos(grid, x, y) {
      let vivos = 0;
      for (let linha_x of [-1, 0, 1]) {
        for (let coluna_y of [-1, 0, 1]) {
          if (linha_x == 0 && coluna_y == 0) continue

          const vizinho_x = x + linha_x;
          const vizinho_y = y + coluna_y;

          if (grid[vizinho_x]?.[vizinho_y]) {
            vivos += 1
          }
        }
      }
      return vivos;
    },
    classes(linha, coluna) {
      return {
        pintado: this.grid[linha][coluna],
      };
    },
  },
  created() {
    const acabate = () => {
      this.update();
      setTimeout(acabate, 800);
    };
    acabate();
  },
};
</script>

<style scoped>

table td {
  border: 1px solid #eee;
  width: 30px;
  height: 30px;
  background-color: white;
}
.pintado {
  background-color: black;
}
.tabelinha{
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 10%;
}
</style>
