<template>
    <nav class="navbar">
        <div class="navbar__icon">
            <i class="material-icons">landscape</i>
            <h1>VueDashboard</h1>
        </div>
        <div class="navbar__buttons">
            <router-link to="/">Dashboard</router-link>
            <router-link to="/">Predictions</router-link>
        </div>
        
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>