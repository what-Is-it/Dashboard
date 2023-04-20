<template>
    <div class="grid" :style="{'background-color': bgColor, 'grid-area': gArea}">
        <CardHeader :percent="percent" :title="title" :subTitle="subTitle"/>
        <div class="pie-container">
            <slot></slot>
            <div>
                <h5>Target sales</h5>
                <h3>83</h3>
                <h6>Finance goals of the campaign that is desired</h6>
            </div>
            <div>
                <h5>Losses in Revenue</h5>
                <h6>Losses are down 25%</h6>
                <h5>Profit margins</h5>
                <h6>Margins are up by 30% from last month.</h6>
            </div>
        </div>
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
    h3 {
        color: rgb(229, 155, 255);
    }
    h5 {
        color: rgba(255, 255, 255, 0.479);
    }
    h6 {
        color: rgba(255, 255, 255, 0.233);
    }
</style>