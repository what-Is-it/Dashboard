import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import material from 'material-design-icons-iconfont'
import {createPinia} from 'pinia'

createApp(App).use(router).use(material).use(createPinia()).mount('#app')
