import { createStore } from 'vuex'

export default createStore({

    state: {
        carrito: []
    },

    mutations: {
        agregar(state, payload){
            state.carrito.push(payload) 
        },

        eliminar(state, payload){
            state.carrito = state.carrito.filter((element)=>{
                return element.id != payload.id;
            })
        }


    },
    
    action: {

    },    
    modules: {

    }

})