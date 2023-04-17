<template>
  <div class="container">
    <div class="row my-5 justify-content-center">
      <div class="col-md-6 my-5 ">
        <div class="card shadow-lg">
          <div class="card-header bg-success text-white">
            <p class="h3">Ingreso</p>
          </div>
          <div class="card-body bg-light">
            <form @submit.prevent="validarLogin({usuario: user.email, contrasena: user.password, usuarios: usuarios})">
                <input v-model="user.email"  class="form-control mt-3" placeholder="Email" type="email">
                <input v-model="user.password"  class="form-control mt-3" placeholder="Password" type="password">
                <input class="btn btn-success mt-3" type="submit" value="Ingresar">
            </form>
            <div v-if="!loggin" class="mt-4">{{mensajeError}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterPage/>
  <CarritoCompras/>
</template>

<script>
import { UserService } from "@/services/UserService";
// // import router from "../router";
import {mapState, mapMutations} from 'vuex'
import FooterPage from "@/components/FooterPage.vue"
import CarritoCompras from "@/components/CarritoCompras.vue"

export default {
  name: 'LoginVue',
  components: {
    FooterPage,
    CarritoCompras
  },
  data: function() {
      return {
        usuarios: [],
        user: {
            email: '',
            password: ''
        },
    };
  },
  created: async function() {
    try {
      let response = await UserService.getAllUsers();
      this.usuarios = response;
    } catch (error) {
      this.errorMessage = error;
    }
  },
  computed: {
    ...mapState(['mensajeError'])
  },

    methods: {
    ...mapMutations(['validarLogin'])
  },
};
</script>

<style>
</style>