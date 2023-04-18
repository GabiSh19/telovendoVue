<template>
  
  <div class="text-center container py-5">
    <h4 class="mt-4 mb-5"><strong>Productos</strong></h4>
    <div class="barraB row justify-content-lg-start" >
      <div class="col-5" id="buscador">
      <input class="form-control w-100 me-3" type="text" v-model="buscarP" placeholder="Buscar..." v-on:keyup.enter="searchData">
      <button class="btn btn-success" v-on:click="searchData">Buscar</button>
    </div>
    </div>

    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4" v-for="producto in disponibles" :key="producto.id">
        <div class="card">
          <h5 class="card-title mb-3 mt-3">{{producto.nombre}}</h5>
          <img :src="producto.imagen" class="w-100" />
          <div class="card-body">
            <h6 class="mb-3"> Precio unitario: $ {{new Intl.NumberFormat('ES', {style: 'currency', currency: 'clp' }).format(producto.precio)}}</h6>
          </div>  
          <button class = "btn btn-outline-success" data-bs-toggle="modal" :data-bs-target="'#myModal' + producto.id" >Ver descripción </button>
          <button class = "btn btn-success  mt-2"  @click="agregar(producto)">Agregar</button>
        <!-- Ventana modal -->
          <div class="modal fade" :id="'myModal' + producto.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">{{producto.nombre}}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  {{producto.descripcion}}
                </div>
                <!-- <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div> -->
              </div>
            </div>
          </div>
          <!-- Ventana modal -->
        </div>
      </div>
    </div>
  </div>
</template>


<script >
// instale popper con el comandoo $npm i @popperjs/core
import {ProductService} from "../services/ProductService"
import {mapState, mapMutations} from 'vuex'

// import { createPopper } from '@popperjs/core';



export default {
  data: function(){
    return{
        productos: [],
        productosTodos: [],
        arrayCarrito:  [],
        disponibles: [],
        buscarP: '',
        // checkStock: true,
        cargando: true,
    };
  },
  created(){
    const obtenerLista = async() => {
    try {
      let response = await ProductService.ProductAll();
      this.productos = response;
      this.productosTodos = response;
      this.disponibles = this.productos.filter((prod) => prod.stock > 0);
      this.cargando = false;  
    } catch (error) {
      this.errorMessage = error;
    }
  };
  obtenerLista()
  },
  computed: {
    ...mapState(['carrito'])

  },

  methods:{
    ...mapMutations(['agregar']),
    searchData(){
      this.reseteoP();
      this.disponibles = this.disponibles.filter((prod) => prod.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.buscarP.toLowerCase()))
    },
    reseteoP(){

      this.disponibles = this.productosTodos

    },

    // checkStock(stock) {
    //   if(stock > 0){
    //     return true;
    //   }
    //   else{
    //     return false;
    //   }
    // }
    // searchData() {
    //   this.productos.filter(
    //     prod =>{
    //       return 
    //     })
    
  //   agregarProducto(producto){
  //     console.log(producto)
      
     
  //     // const productosParaCarrito = JSON.parse(JSON.stringify(this.productos));
  //     // let fila = productosParaCarrito.map(    => e.id).indexOf(producto);
  //     // let fila = this.productos.map(e => e.id).indexOf(producto);
  //     // this.arrayCarrito.push(this.productos[fila]);
  //     // console.log(this.arrayCarrito);

  //   }
  //   }
   }}

</script>

<style scoped>
#buscador{
display: flex; 
align-items: center;
margin-bottom: 2em;

}

img{
  height: 400px;
  object-fit: scale-down;
}

</style>