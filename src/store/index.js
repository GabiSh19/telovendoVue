import { createStore } from 'vuex'

export default createStore({

    state: {
        carrito: []
    },

    mutations: {
        agregar(state, payload){
            state.carrito.push(payload) 
        }
    },
    
    action: {

    },    
    modules: {

    }

})