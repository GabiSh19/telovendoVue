<template>
  <div class="text-center container py-5">
    <h4 class="mt-4 mb-5"><strong>Productos</strong></h4>

    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4" v-for="producto in productos" :key="producto.id">
        <div class="card" >
          <button class = "btn btn-success"  @click="agregarProducto(producto.id)">Agregar</button>
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
import ShowProducts from "./ShowProducts.vue"; 

export default {
  data: function(){
    return{
        productos: [],
        newProductos:  []
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
  methods:{
    
    agregarProducto: function (producto){
      // const productosParaCarrito = JSON.parse(JSON.stringify(this.productos));
      // const carrito = JSON.parse(JSON.stringify(this.newProductos));
      // console.log(productosParaCarrito)
      // let fila = productosParaCarrito.map(e => e.id).indexOf(producto);
      // this.newProductos.push(productosParaCarrito[fila]);
      // console.log("carrito");
      // console.log(carrito);
      console.log("hola")

      // let fila = this.productos.map(e => e.id).indexOf(producto);

      // let product ={
      //           id: this.productos[fila].id,
      //           name: this.productos[fila].nombre,
      //           description: this.productos[fila].descripcion,
      //           price: this.productos[fila].precio,
      //           // image: producto.image,
      //           cantidad: 1,
      //       }
      // this.newProductos.push(product); 
 
    }




    }
  }

</script>

<style scoped>
</style>