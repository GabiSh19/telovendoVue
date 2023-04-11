<template>
  <div class="text-center container py-5">
    <h4 class="mt-4 mb-5"><strong>Productos</strong></h4>
    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4" v-for="producto in productos" :key="producto.id">
        <div class="card" >
          <button class = "btn btn-success"  @click="agregar(producto)">Agregar</button>
          <img :src="producto.imagen" class="w-100" />
          <div class="card-body">
              <h5 class="card-title mb-3">{{producto.nombre}}</h5>
              <p>{{producto.descripcion}}</p>
            <h6 class="mb-3">${{producto.precio}}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script >
import {ProductService} from "../services/ProductService"
import {mapState, mapMutations} from 'vuex'

export default {
  data: function(){
    return{
        productos: [],
        arrayCarrito:  [],
    };
  },
  created: async function() {
    try {
      let response = await ProductService.ProductAll();
      this.productos = response;
  
    } catch (error) {
      this.errorMessage = error;
    }
  },
  computed: {
    ...mapState(['carrito'])

  },

  methods:{
    ...mapMutations(['agregar'])
    
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