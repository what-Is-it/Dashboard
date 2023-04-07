import {createRouter, createWebHistory} from 'vue-router'
import AppVue from '../App.vue'

const routes = [
    {
        path: '/',
        name: 'WelcomePage',
        component: AppVue,
        // meta: {
        //     layout: 'welcome',
        // },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
