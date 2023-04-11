<template>
    <!-- poner el router-view? -->
    <Products/>
  </template>
  
  <script>
  import ShowProducts from "@/components/ShowProducts.vue.js"
  
  export default {
    name: 'HomePage',
    components: {
      ShowProducts,
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