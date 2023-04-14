import { createStore } from 'vuex'
import router from "../router";



export default createStore({

    state: {
        carrito: [],
        valores: 0,
        loggin: false,
        isLoggin: true,
        mensajeError: ""
    },

    mutations: {

        validarLogin(state,payload){
            console.log(payload.usuario)
            console.log(payload.contrasena)
            let encontro = payload.usuarios.map(element => element.email).indexOf(payload.usuario)
            if (encontro !== -1) {
                if (payload.contrasena == payload.usuarios[encontro].password) {
                    state.loggin = true;
                    state.isLoggin = false;
                    // this.mensajeError = "Ingreso"
                }else{
                    state.loggin = false;
                }
            }else{
                state.loggin = false;
            }
            if (state.loggin) {
                router.push('/HomePage')
            }else{
                router.push('/');
                state.mensajeError = "Usuario o contraseña inválido" 
            }
        },

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