<!-- <template>
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
                    <tr v-for="carro in carrito" :key="carro.nombre">
                        <td>{{carro.nombre}}</td>
                        <td>{{ carro.cantidad }}</td>
                        <td>{{carro.precio}}</td>
                        <td>mod</td>
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
      
<script>

    export default {
    data: function() {
    return {
        newProducts:[]
        };
    },
    Methods:{
        agregarProducto: function (producto) {
            let existe = this.newProducts.some((element) => {
                return producto.id == element.id
            });
            console.log(existe)
            if(!existe){
                let product ={
                id:producto.id,
                name: producto.name,
                description: producto.description,
                price: producto.price,
                stock: producto.stock,
                image: producto.image,
                cantidad: 1,
            }
            this.newProducts.push(product);
            }else{
                this.newProducts = this.newProducts.map((element)=>{
                    if(element.id === producto.id){
                        element.cantidad = element.cantidad+1;
                        return element;
                    }else{
                        return element;
                    }
                })
            }
        },
        eliminarProducto: function(producto){
            this.newProducts = this.newProducts.filter((element)=>{ 
                return element.id != producto.id;
            })
        }
    }
  }
</script>
            // escribirProducto(){
            //     let objeto = JSON.parse(localStorage.getItem("recibe"));
            //     this.carrito.push(objeto);
            //     console.log(this.carrito);
            // } 
<style scoped>
    .summary{
        text-align: left;
      }
</style> -->