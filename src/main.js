import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './mock/index'

// Vue.config.productionTip = false
createApp(App).use(router).mount('#app')
