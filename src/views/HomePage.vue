<template>
  <!-- poner el router-view? -->
  <NavBar></NavBar>

  <ShowProducts/>
  <CarritoCompras/>
</template>

<script>
import ShowProducts from "@/components/ShowProducts.vue"
import NavBar from "@/components/NavBar.vue"
import CarritoCompras from "@/components/CarritoCompras.vue"


export default {
  name: 'HomePage',
  components: {
    NavBar,
    ShowProducts,
    CarritoCompras
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
  margin-top: 60px;
}
</style>