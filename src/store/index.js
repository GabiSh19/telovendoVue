import { createStore } from 'vuex'

export default createStore({

    state: {
        carrito: [],
        valores: 0
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

        eliminar(state, payload){
            state.carrito = state.carrito.filter((element)=>{
                return element.id != payload.id;
            })


            // // let buscaEnCarro = state.carrito.map( e=>e.id)
            // console.log(buscaEnCarro)

        }


    },
    
    action: {

    },    
    modules: {

    }

})