<template>
    <div class="grid" :style="{'background-color': bgColor, 'grid-area': gArea}">
        <CardHeader :percent="percent" :title="title" :subTitle="subTitle"/>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardHeader from './CardHeader.vue'

export default defineComponent({
    props: {
        bgColor: {
            type: String,
            required: false,
        },
        gArea: {
            type: String,
            required: true
        },
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
    setup (props) {
        

        return {}
    },
    components: {CardHeader}
})
</script>

<style scoped>

</style>