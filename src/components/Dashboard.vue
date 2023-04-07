<template>
    <div class="container">
        <Card gArea='a' />
        <Card gArea='b' />
        <Card gArea='c' />
        <Card gArea='d' />
        <Card gArea='e' />
        <Card gArea='f' />
        <Card gArea='g' />
        <Card gArea='h' />
        <Card gArea='i' />
        <Card gArea='j' />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from './Card.vue'


export default defineComponent({
    setup () {
        

        return {}
    },
    components: {
        Card
    }
})
</script>

<style scoped>

</style>