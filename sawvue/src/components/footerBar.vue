<template>
  <v-footer dark padless >
    <v-card flat tile class="indigo lighten-1 white--text text-center" id="footerzinho">
      <v-card-text class="white--text pt-0">
        Game of Life foi desenvolvido por John Conway em 1970, concretizou a descrição da máquina de Turing Universal(máquina capaz de construir cópias de si) com regras
        simples. 
        <br /> O mais importante desse projeto foi
        que ele inaugurou o campo da matemática denominada de autômatos celulares.
        <br />
        Game of Life é um trabalho simples, mas originou as simulações computacionais.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong><a :href="url">Santos</a></strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      url: "https://www.linkedin.com/in/clarasantosmf/"
    }
  }};
</script>

<style scoped>
a {
  color:white
}

#footerzinho{
  flex-direction: column;
  display: flex;
  width: 100%;
  display: fixed;
}

</style>