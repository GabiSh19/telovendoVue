<template> 
  <nav v-if="loggin" class="navbar navbar-expand-lg bg-success sticky-top">
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
          <div class="col-7"> 
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
              <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->
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


  <nav v-if="!loggin" class="navbar navbar-expand-lg bg-success sticky-top">
      <div class="container-fluid">
        <div class="row w-100">
          <div class="col-2">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
            <img src="../assets/Logo2.png" alt="" class="logo">
          </div>
          <div class="col-10">
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
              <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->
              <button class="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><ion-icon class="iconCarrito" name="cart-outline"></ion-icon><span v-if="cantCarrito>0" id="cantidadCarrito" >{{ cantCarrito }}</span></button>
            </li>
            <li class="nav-item" style="margin-left: 15px;">
              <button class="btn btn-dark py-2" type="button" data-bs-toggle="modal" data-bs-target="#loggoutModal">Iniciar sesión</button>
            </li> 
          </ul>
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
                    <router-link to="/" class="nav-link active">Logout</router-link>
                  </button>
                </div>
              </div>
            </div>
          </div>
  </template>
  

<script>
import { RouterLink } from 'vue-router'
import {mapState} from 'vuex'

export default {
  components: {
    RouterLink,
  },
  computed: {
    ...mapState(['cantCarrito']),
    ...mapState(['usuario']),
    ...mapState(['loggin'])
  }
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