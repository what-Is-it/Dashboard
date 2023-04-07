<template>
    <div class="grid" :style="{'background-color': bgColor, 'grid-area': gArea}">

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        bgColor: {
            type: String,
            required: false,
        },
        gArea: {
            type: String,
            required: true
        }
    },
    setup (props) {
        

        return {}
    }
})
</script>

<style scoped>

</style>