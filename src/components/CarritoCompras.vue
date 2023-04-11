<template>
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Mi Carrito</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <button class="actualizar" @click="escribirProducto()"></button>
        <table class="table table-bordered">
                <thead class=" table-success">
                <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Valor Total</th>
                    <th scope="col">Modificar</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="carro in carrito" :key="carro.cantidad">
                        <td>{{carro.nombre}}</td>
                        <td>{{carro.valor}}</td>
                        <td>{{carro.precio}}</td>
                        <td>botones</td>
                    </tr>
                </tbody>
                </table>
                <div class="summary">
                    <p>Subtotal:</p>
                    <p>Envío:</p>
                    <p>Total:</p>
                </div>
                <div class="d-grid gap-2 col-10 mx-auto">
                    <button class="btn btn-success" type="button">Finalizar mi compra</button>
                </div>
      </div>
    </div>

</template>


<script >

import {mapState} from 'vuex'

export default {
data(){
    return{
        productos: [],
    //     carrito:  [
    //         {nombre: "silla", valor: "1233", precio: "qwe"},
    //         {nombre: "silla", valor: "1233", precio: "qwe"},
    //         {nombre: "silla", valor: "1233", precio: "qwe"}
    // ]
    };
},

computed: {
    ...mapState(['carrito']),
    
  }
    

}

</script>
