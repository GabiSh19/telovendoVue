<template> 
  <nav class="navbar navbar-expand-lg bg-success">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="container">
          <a style="" class="navbar-brand" href="#">
            <img src="../assets/Logo2.png" alt="" width="120px" height="120px" style="float: left; margin-left: 20px;">
          </a>
        </div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->
              <button class="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Carrito</button>
            </li>
            <li class="nav-item" style="margin-left: 15px;">
              <button class="btn btn-outline-dark" type="button" data-bs-toggle="modal" data-bs-target="#loggoutModal">Logout</button>
            </li>
          </ul>
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


export default {
  components: {
    RouterLink,
  },
}
</script>