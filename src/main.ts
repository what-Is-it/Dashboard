import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import material from 'material-design-icons-iconfont'

createApp(App).use(router).use(material).mount('#app')
