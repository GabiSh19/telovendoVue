<template>
  <div class="container">
    <div class="row mt-5 justify-content-center">
      <div class="col-md-6">
        <div class="card shadow-lg">
          <div class="card-header bg-success text-white">
            <p class="h3">Ingreso</p>
          </div>
          <div class="card-body bg-light">
            <form @submit.prevent="validarInformacion()">
                <input v-model="user.email"  class="form-control mt-3" placeholder="Email" type="email">
                <input v-model="user.password"  class="form-control mt-3" placeholder="Password" type="password">
                <input class="btn btn-success mt-3" type="submit" value="Ingresar">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserService } from "@/services/UserService";
import router from "../router";
export default {
  name: 'LoginVue',
  data: function() {
      return {
        usuarios: [],
        user: {
            email: '',
            password: ''
        }
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
  methods: {
    validarInformacion: function() {
        let loggin = false
        let encontro = this.usuarios.map(element => element.email).indexOf(this.user.email)
        if (encontro !== -1) {
            if (this.user.password === this.usuarios[encontro].password) {
                loggin = true;
            }else{
                loggin = false;
            }
        }else{
            loggin = false;
        }
        if (loggin) {
            router.push('./HomePage')
        }else{
            console.log('Usuario NO Logueado')
        }
    }
  }
};
</script>

<style>
</style>