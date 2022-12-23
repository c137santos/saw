<template>
  <table>
    <tr v-for="(line, r) in grid" :key="`${line}-${r}`">
      <td v-for="(coluna, c) in line" :key="`${r}-${c}-${coluna}`" :class="classes(r, c)">
      </td>
    </tr>
  </table>
</template>

<script>
  export default {
    data () {
      return {
        grid: [
          [0,1,0,0],
          [0,0,1,0],
          [0,0,0,1],
          [1,0,0,0]
        ],
        line: 4,
        columns: 4
      }
    },
    methods:{
      update(){
        let new_matriz = Array(this.line).fill(Array(this.columns).fill(0))
        for (let i=0; i <this.line; i++){
          for (let y=0; y<this.columns; y++){
            let alives = this.vizinhos(this.grid, i, y)
            new_matriz[i][y] = parseInt((this.new_matriz[i][y] === 0 && alives === 3) || (this.grid[i][y] === 1 && !(alives<2 || alives>3 )))
              return new_matriz
            }
          }
          this.grid.push([])
          this.grid.pop()
      },
      vizinhos(){
        return
      },
      classes(linha, coluna){
        console.log(this.grid[linha][coluna])
        return {
          "pintado": this.grid[linha][coluna]
        }
      }
    },
    created(){
      const acabate = ()=> {
        this.update()
        // console.log("aaaa")
        setTimeout(acabate, 500)
      }
      acabate()
    }
  }
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

</style>