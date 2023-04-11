import { createStore } from 'vuex'

export default createStore({

    state: {
        carrito: []
    },

    mutations: {
        agregar(state, payload){
            console.log(payload.id)
            const yaExiste = state.carrito.some((element) => { 
                return payload.id === element.id
            })
            if(yaExiste){
                payload.cantidad = payload.cantidad + 1 
            }else{
                state.carrito.push(payload) 
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