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
        count:0,
      }
    },
    methods:{
      update(){
        for(let i = 0; i < this.grid.length; i++) {
            let cube = this.grid[i];
            for(let j = 0; j < cube.length; j++) {
                this.grid[i][j] = Math.random() > 0.5 ? 1 : 0
            }
        }
        this.grid.push([])
        this.grid.pop()
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
        this.count++
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