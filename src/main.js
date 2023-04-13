import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";  
import store from "./store";  

// Bootstrap CSS , JS

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



createApp(App).use(router).use(store).mount('#app')
