

<template>
  <NavBar />  
  <router-view />
  <!-- <div v-if=($store.state.isLoggin)>
    <LoginPage/>
  </div>
  <div v-if= ($store.state.loggin)>
    <router-view />

  </div> -->

</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  margin:0px;
  padding:0px;
}
</style>
