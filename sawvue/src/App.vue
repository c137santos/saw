<template>
  <div>
    <topNavBat></topNavBat>
    <div class="divdoinput">
      <div class="centralizador">
        <p>Informe o tamanho da sua matriz - 1 a 99</p>
        <input type="number" v-model="numeroMatriz"  pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==2) return false;" />
        <div class="dosbotoes">
          <button @click.prevent="playGame">PLAY!!</button>
          <button @click="reiniciaJogo">Reiniciar!!</button>
        </div> 
      </div>  
    </div>
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
import { formaGrid } from "./life";
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
      numeroMatriz:"",
    };
  },
  methods: {
    update() {
      let new_matriz = JSON.parse(JSON.stringify(this.grid));
      for (let i = 0; i < this.numeroMatriz; i++) {
        for (let j = 0; j < this.numeroMatriz; j++) {
          let alives = this.vizinhos(this.grid, i, j);
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
      this.grid = new_matriz;
      return new_matriz;
    },
    vizinhos(grid, x, y) {
      let vivos = 0;
      for (let linha_x of [-1, 0, 1]) {
        for (let coluna_y of [-1, 0, 1]) {
          if (linha_x == 0 && coluna_y == 0) continue;

          const vizinho_x = x + linha_x;
          const vizinho_y = y + coluna_y;

          if (grid[vizinho_x]?.[vizinho_y]) {
            vivos += 1;
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
    reiniciaJogo(){
      this.grid = []
    },
    playGame(){
        return this.grid = formaGrid(parseInt(this.numeroMatriz))
      },
      acabate(){
        setTimeout(() =>{
          this.update()
        }, 100)
      },
    },
  watch:{
    grid(){
      console.log("chamando")
      this.acabate()
    }
  },
};
</script>

<style scoped>
.divdoinput {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  background-color: #000000;
  background-image: url("./static/sky.jpg") ;
  background-size: cover; 
}
input {
  background: white;
}
.centralizador {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-items: center;
}
p {
  margin: 5%;
  color: white;
  text-align:center ;
}
table td {
  border: 1px solid #eee;
  width: 30px;
  height: 30px;
  background-color: white;
}
.pintado {
  background-color: black;
}
.tabelinha {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  min-height: 50vh;
}

.dosbotoes {
  display:flex;
  height: 40%;
}

button {
  background: white;
  margin: 5%;
  width: 50%;
  height: 70%;
  text-align: center;
  align-self: center;
  font-size: 12px;
  border-radius: 5px;
  border: 2px solid rgb(82, 78, 78);
}
</style>
