<template>
  <CardDetail/>
  <CarritoCompras/>
  <FooterPage/>
</template>

<script>
import CardDetail from "@/components/CardDetail.vue"
import CarritoCompras from "@/components/CarritoCompras.vue"
import FooterPage from "@/components/FooterPage.vue"


export default {
  name: 'ShowProducts',
  components: {
    CardDetail,
    CarritoCompras,
    FooterPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>