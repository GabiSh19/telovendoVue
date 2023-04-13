import { createStore } from 'vuex'

export default createStore({

    state: {
        carrito: [],
        valores: 0,
        loggin: false

    },

    mutations: {
        agregar(state, payload){
            const yaExiste = state.carrito.some((element) => { 
                return payload.id === element.id
            })
            
            if(yaExiste){
                payload.cantidad = payload.cantidad + 1 
                state.valores = state.valores+(payload.precio) 
            }else{
                state.carrito.push(payload) 
                state.valores = state.valores+(payload.precio) 
            } 
        },
        restar(state, payload){

            if(payload.cantidad == 1){
                state.carrito = state.carrito.filter((element)=>{
                return element.id != payload.id;
                })
                state.valores = state.valores - (payload.precio * payload.cantidad)
                payload.cantidad = 1
            }
            else if(payload.cantidad > 1){
                payload.cantidad = payload.cantidad - 1
                state.valores = state.valores - (payload.precio)
            }
        },

        eliminar(state, payload){
            state.carrito = state.carrito.filter((element)=>{
                return element.id != payload.id;
            })
            state.valores = state.valores - (payload.precio * payload.cantidad)
            payload.cantidad = 1
        },

        limpiarCarro(state){
            state.carrito = [];
            state.valores = 0
        },
    },
    
    action: {

    }, 

    modules: {

    }
})