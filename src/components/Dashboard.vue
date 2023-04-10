<template>
    <div class="container" v-if="!loading">
        <Card gArea='a' >
                <template v-slot:default>
                    <LineChart :chartData="data" :options="options"/>
                </template>
        </Card>
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
import { defineComponent, onMounted, computed, ref, reactive } from 'vue'
import Card from './Card.vue'
import {useFinanceStore} from '../stores/store'
import { LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);


export default defineComponent({
    setup () {
        const financeStore = useFinanceStore()
        const loading = ref(true)
        onMounted(async ()=>{
            await financeStore.getFinances()
            loading.value = false
            console.log(financeStore.revenueExpenses)
        })

        const months = computed(()=>{
            return financeStore.months
        })
        const expenses = computed(()=>{
            return financeStore.expenses
        })
        const revenue = computed(()=>{
            return financeStore.revenue
        })

        const data = reactive({
        labels: months,
        datasets: [{
                label: 'Revenue',
                data: revenue,
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.5
                },
                {
                    label: 'Expenses',
                data: expenses,
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.5
                }
            ],
        })
        const options = reactive({
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: false
        })

    

        return {financeStore, data, options, loading, months, expenses}
    },
    components: {
        Card,
        LineChart
    }
})
</script>

<style scoped>

</style>