import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// import {Vue} from 'vue';
import '../src/styles.css'
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers = {
    'Headers' : store.state.user.tokens,
    'Content-type' : 'application/json'
}

createApp(App).use(router).use(router).use(store).mount('#app')
