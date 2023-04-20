<template>
    <div class="card-header">
        <div class="card-header__title">
            <h3>{{title}}</h3>
            <h5>{{subTitle}}</h5>
        </div>
        <h5 class="card-header__percent">{{percent}}</h5>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: {
            type: String,
            required: false,
        },
        subTitle: {
            type: String,
            required: false
        },
        percent: {
            type: String,
            required: false
        }
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>