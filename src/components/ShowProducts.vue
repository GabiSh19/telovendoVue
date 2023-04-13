<template>
  
  <div class="text-center container py-5">
    <h4 class="mt-4 mb-5"><strong>Productos</strong></h4>
    <div class="barraB">
      <input type="text" v-model="buscarP" placeholder="Buscar..." v-on:keyup.enter="searchData">
      <button class="button btn-success" v-on:click="searchData">Buscar</button>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4" v-for="producto in disponibles" :key="producto.id">
        <div class="card">
          <!-- lanzador de modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>
  <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
  Tooltip on top
</button>
  <!-- lanzador de modal -->
          <button class = "btn btn-success"  @click="agregar(producto)">Agregar</button>
          <img :src="producto.imagen" class="w-100" />
          <div class="card-body">
              <h5 class="card-title mb-3">{{producto.nombre}}</h5>
              <p>{{producto.descripcion}}</p>
            <h6 class="mb-3">${{producto.precio}}</h6>
          </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script >
import {ProductService} from "../services/ProductService"
import {mapState, mapMutations} from 'vuex'
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

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
      this.productos = this.productos.filter((prod) => prod.nombre.toLowerCase().includes(this.buscarP.toLowerCase()))
    },
    reseteoP(){
      this.productos = this.productosTodos
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
</style>