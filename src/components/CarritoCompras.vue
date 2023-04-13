<template>
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Mi Carrito</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
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
                        <td class="cantidad">
                            <div class="suma">{{carro.cantidad}}</div>

                            <font-awesome-icon :icon="['fas', 'arrow-up']" @click="agregar(carro)" class="me-2" style="color: #19b81c;"/>
                            <font-awesome-icon :icon="['fas', 'arrow-down']" @click="restar(carro)" style="color: #c93c2c;"/>
                         

                        </td>
                        <td>{{carro.precio}}</td>
                        <td><ion-icon name="trash-outline"  @click="eliminar(carro)"></ion-icon></td>
                    </tr>
                </tbody>
                </table>
                <div class="summary">
                    <p>Total: {{valores}}</p>
                </div>
                <div class="d-grid gap-2 col-10 mx-auto">
                    <button class="btn btn-outline-success" type="button" @click="limpiarCarro()">Limpiar mi Carrito</button>
                    <button class="btn btn-success" type="button">Finalizar mi compra</button>
                </div>
      </div>
    </div>

</template>


<script >

import {mapState, mapMutations} from 'vuex'


export default {
    name:'App',
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
    ...mapState(['valores'])    
  },

methods: {
    ...mapMutations(['agregar']),
    ...mapMutations(['restar']),
    ...mapMutations(['eliminar']),
    ...mapMutations(['limpiarCarro'])
}


}

</script>
<style scoped>
.cantidad {
    display: flex;
}
.controlador{
    width: 70px;
    margin-left: 15px;
    margin-right: 15px;
}
.suma{
    margin-left: 10px;
    margin-right: 10px;
}
</style>
