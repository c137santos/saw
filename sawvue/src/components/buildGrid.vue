<template>
  <table>
    <td v-for="(line, r) in grid" :key="JSON.stringify([line, r])">
      <tr v-for="(coluna, c) in line" :key="JSON.stringify([r, c, coluna])">
        <p :style="pintacommeupinto(coluna)">&nbsp;</p>
      </tr>
    </td>
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
        for(var i = 0; i < this.grid.length; i++) {
            var cube = this.grid[i];
            for(var j = 0; j < cube.length; j++) {
                this.grid[i][j] = Math.random() > 0.5 ? 1 : 0
            }
        }
        this.grid.push([])
        this.grid.pop()
      },
      pintacommeupinto(coluna){
        if(coluna === 1){
          return 'background-color:black'
        }
        return 'background-color:white'
      }
    },
    created(){
      const acabate = ()=> {
        this.update()
        this.count++
        console.log("aaaa")
        setTimeout(acabate, 500)
      }
      acabate()
    }
  }
</script>