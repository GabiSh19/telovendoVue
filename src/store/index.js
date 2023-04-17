import { createStore } from 'vuex'
import router from "../router";



export default createStore({

    state: {
        // carrito: [] || localStorage.get('carrito', JSON.stringify([])),
        // carrito: [] || localStorage.setItem('carrito', JSON.stringify([])),
        carrito: JSON.parse(localStorage.getItem('carrito')) ? JSON.parse(localStorage.getItem('carrito')) : [],
        valores: JSON.parse(localStorage.getItem('valores')) ? JSON.parse(localStorage.getItem('valores')) : 0,
        cantCarrito: JSON.parse(localStorage.getItem('cantCarrito')) ? JSON.parse(localStorage.getItem('cantCarrito'))   : 0,
        loggin: false,
        isLoggin: true,
        mensajeError: "",
        usuario: ""
    },

    computed: {

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
                    state.usuario = payload.usuarios[encontro].name
                }else{
                    state.loggin = false;
                }
            }else{
                state.loggin = false;
            }
            if (state.loggin) {
                router.push('/ShowProducts')
            }else{
                router.push('/LoginPage');
                state.mensajeError = "Usuario o contraseña inválido" 
            }
        },

        cierreSesion(state){
            state.loggin = false;
            console.log("cierre sesión")

        },


        
        agregar(state, payload){
            console.log(state.carrito)
            const yaExiste = state.carrito.some((element) => { 
                return payload.id === element.id
            })
            
            if(yaExiste){
                payload.cantidad = payload.cantidad + 1 
                state.valores = state.valores+(payload.precio) 
            }else{
                state.carrito.push(payload) 
                // state.carrito = JSON.parse(localStorage.getItem('carrito')),
                state.valores = state.valores+(payload.precio) 
            }
            state.cantCarrito = state.carrito.length; 
            localStorage.setItem('carrito', JSON.stringify(state.carrito))
            localStorage.setItem('valores', JSON.stringify(state.valores))
            localStorage.setItem('cantCarrito', JSON.stringify(state.carrito.length))

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
            state.cantCarrito = state.carrito.length;
            localStorage.setItem('carrito', JSON.stringify(state.carrito))
            localStorage.setItem('valores', JSON.stringify(state.valores))
            localStorage.setItem('cantCarrito', JSON.stringify(state.carrito.length))
        },

        eliminar(state, payload){
            state.carrito = state.carrito.filter((element)=>{
                return element.id != payload.id;
            })
            state.valores = state.valores - (payload.precio * payload.cantidad)
            payload.cantidad = 1

            state.cantCarrito = state.carrito.length;
            localStorage.setItem('carrito', JSON.stringify(state.carrito))
            localStorage.setItem('valores', JSON.stringify(state.valores))
            localStorage.setItem('cantCarrito', JSON.stringify(state.carrito.length))
        },

        limpiarCarro(state,payload){
            state.carrito = [];
            state.valores = 0;
            payload.forEach(element => {
                element.cantidad = 1;
            });
            state.cantCarrito = state.carrito.length;
            localStorage.setItem('carrito', JSON.stringify(state.carrito));
            localStorage.setItem('valores', JSON.stringify(state.valores));
            localStorage.setItem('cantCarrito', JSON.stringify(state.carrito.length))
        },

    },
    
    action: {

    }, 

    modules: {

    }
})