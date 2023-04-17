<template>

  <!-- <nav v-if="($store.state.loggin)" class="navbar navbar-expand-lg bg-success sticky-top">
      <div class="container-fluid">
        <div class="row w-100">
          <div class="col-2">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
            <img src="../assets/Logo2.png" alt="" class="logo">
          </div>
          <div class="col-3 mt-4 usuario">
            Bienvenido/a {{ usuario }}
          </div>
          <div class="col-7 collapse" id="navbarTogglerDemo01"> 
            <ul class="navbar-nav  d-flex justify-content-end align-items-center mt-3">
            <li class="nav-item" style="margin-right: 15px;">
              <button class="btn btn-outline-dark" type="button">
                <router-link to="/" class="nav-link active">Home</router-link>
              </button>
            </li> 
            <li class="nav-item" style="margin-right: 15px;">
              <button class="btn btn-outline-dark" type="button">
                <router-link to="/ShowProducts" class="nav-link active">Productos</router-link>
              </button>
            </li>

            <li class="nav-item text-center">
              <button class="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><ion-icon class="iconCarrito" name="cart-outline"></ion-icon><span v-if="cantCarrito>0" id="cantidadCarrito" >{{ cantCarrito }}</span></button>
            </li>
            <li class="nav-item" style="margin-left: 15px;">
              <button class="btn btn-dark py-2" type="button" data-bs-toggle="modal" data-bs-target="#loggoutModal">Cerrar sesión</button>
            </li> 
          </ul>
        </div>
      </div>
      </div>
    </nav>


  <nav v-if="(!$store.state.loggin)" class="navbar navbar-expand-lg bg-success sticky-top">
      <div class="container-fluid">
        <div class="row w-100">
          <div class="col-2">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
            <img src="../assets/Logo2.png" alt="" class="logo">
          </div>
          <div class="col-10 collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav  d-flex justify-content-end align-items-center mt-3">
            <li class="nav-item" style="margin-right: 15px;">
              <button class="btn btn-outline-dark" type="button">
                <router-link to="/" class="nav-link active">Home</router-link>
              </button>
            </li>
            <li class="nav-item" style="margin-right: 15px;">
              <button class="btn btn-outline-dark" type="button">
                <router-link to="/ShowProducts" class="nav-link active">Productos</router-link>
              </button>
            </li>

            <li class="nav-item text-center">
              <button class="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><ion-icon class="iconCarrito" name="cart-outline"></ion-icon><span v-if="cantCarrito>0" id="cantidadCarrito" >{{ cantCarrito }}</span></button>
            </li>
            <li class="nav-item" style="margin-left: 15px;">
              <router-link to="/LoginPage" class="nav-link active">Iniciar sesión</router-link>
            </li> 
          </ul>
        </div>
      </div>
      </div>
    </nav> -->
<!-- <nav class="navbar navbar-expand-lg bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="../assets/Logo2.png" alt="" class="logo">
    </a>
    <div class="col-3 mt-4 usuario">
            Bienvenido/a {{ usuario }}
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#"><router-link to="/" class="nav-link active">Home</router-link></a>
        <a class="nav-link" href="#"><router-link to="/ShowProducts" class="nav-link active">Productos</router-link></a>
        <a class="nav-link" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><ion-icon class="iconCarrito" name="cart-outline"></ion-icon><span v-if="cantCarrito>0" id="cantidadCarrito" >{{ cantCarrito }}</span></a>
        <a class="nav-link " href="#" v-if="($store.state.loggin)"><button class="btn btn-dark py-2" type="button" data-bs-toggle="modal" data-bs-target="#loggoutModal">Cerrar sesión</button></a>
        <a href="" v-if="(!$store.state.loggin)"><router-link to="/LoginPage" class="nav-link active">Iniciar sesión</router-link></a>
      </div>
    </div>
  </div>
</nav> -->

<nav class="navbar navbar-expand-lg bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="../assets/Logo2.png" alt="" class="logo">
    </a>
    <div v-if="($store.state.loggin)" class="col-3 mt-4 usuario">
            Bienvenido/a {{ usuario }}
    </div>
    <button v-if="isMobile" type="navbar-toggler visually-hidden" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" v-bind:class="{ 'collapsed': menuCollapsed }" v-on:click="toggleMenu">
      <span class="navbar-toggler-icon d-lg-none"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup" v-bind:class="{ 'show': !menuCollapsed }">
      <div class="navbar-nav d-flex justify-content-end align-items-center mt-3">
        <a class="nav-link " href="#" v-if="($store.state.loggin)"><button class="btn btn-dark py-2" type="button" data-bs-toggle="modal" data-bs-target="#loggoutModal">Cerrar sesión</button></a>
        <a href="" v-if="(!$store.state.loggin)" style="text-decoration: none;"><router-link to="/LoginPage" class="nav-link active">Iniciar sesión</router-link></a>
        <a class="nav-link active" aria-current="page" href="#"><router-link to="/" class="nav-link active">Home</router-link></a>
        <a class="nav-link" href="#"><router-link to="/ShowProducts" class="nav-link active">Productos</router-link></a>
        <a class="nav-link" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><ion-icon class="iconCarrito" name="cart-outline"></ion-icon><span v-if="cantCarrito>0" id="cantidadCarrito" >{{ cantCarrito }}</span></a>
      </div>
    </div>
  </div>
  </nav>
    <div class="modal fade" id="loggoutModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel"> Ya te vas?</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  Seguro quieres cerrar sesion?
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                    <router-link to="/" class="nav-link active" @click="cierreSesion">Logout</router-link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="container dark" id="nav"></div>
  </template>
  

<script>
import { RouterLink } from 'vue-router'
import {mapState, mapMutations} from 'vuex'

export default {
  data() {
    return {
      menuCollapsed: true,
      screenWidth: window.innerWidth,
    }
  },
  components: {
    RouterLink,
  },
  computed: {
    ...mapState(['cantCarrito']),
    ...mapState(['usuario']),
    ...mapState(['loggin']),
    isMobile() {
      return this.screenWidth < 992; // cambiar el umbral según sea necesario
    },
  },
  methods: {
    ...mapMutations(['cierreSesion']),
    toggleMenu() {
      this.menuCollapsed = !this.menuCollapsed;
    },
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.screenWidth = window.innerWidth;
    });
  },
}


</script>

<style>
.logo{
  width: 100px;
  height: 90px;
}

.usuario{
  font-size: 1.2em;
  color: white;
  letter-spacing: 2px;
  word-spacing: 5px;
}

.iconCarrito{
  font-size: 1.6em;
  position: relative;
  padding: .15em;
  /* padding: 1em; */

}
#cantidadCarrito{
  background-color: rgb(0, 0, 0);
  color: white;
  border-radius: 50%;
  font-size: 10px;
  width: 2em;
  padding: 3px;
  height: 2em;
  top: 15px;
  position: absolute;
}


</style>