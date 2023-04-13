

<template>
  <div v-if=($store.state.isLoggin)>
    <LoginPage/>
  </div>
  <div v-if= ($store.state.loggin)>
    <router-view />

  </div>

</template>

<script>
import LoginPage from "@/views/LoginPage.vue"

export default {
  name: 'App',
  components: {
    LoginPage
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
