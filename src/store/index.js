import { createStore } from 'vuex'

export default createStore({

    state: {
        carrito: [],
        valores: 0
    },

    mutations: {
        agregar(state, payload){

            state.carrito.push(payload) 
        },

        eliminar(state, payload){
            state.carrito = state.carrito.filter((element)=>{
                return element.id != payload.id;
            })

            if(yaExiste){
                payload.cantidad = payload.cantidad + 1 
                state.valores = state.valores+(payload.precio) 
            }else{
                state.carrito.push(payload) 
                state.valores = state.valores+(payload.precio) 
            }

            // // let buscaEnCarro = state.carrito.map( e=>e.id)
            // console.log(buscaEnCarro)

        }


    },
    
    action: {

    },    
    modules: {

    }

})