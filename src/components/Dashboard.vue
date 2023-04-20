<template>
    <div class="container" v-if="!loading">
        <Card gArea='a' title="Revenue and Expenses" subTitle="top line represents revenue, bottom line represents expenses" percent="+4%">
                <template v-slot:default>
                    <LineChart :chartData="data" :options="options" style="max-height: 240px"/>
                </template>
        </Card>
        <Card gArea='b' title="Profit and Revenue" subTitle="top line represents revenue, bottom line represents profit" percent="+4%" >
            <template v-slot:default>
                <LineChart :chartData="data2" :options="options2" style="max-height: 240px"/>
            </template>
        </Card>
        <Card gArea='c' title="Revenue Month by Month" subTitle="graph represents revenue month by month" percent="+4%">
            <template v-slot:default>
                <BarChart :chartData="data3" :options="options3" style="max-height: 180px"/>
            </template>
        </Card>
        <Card gArea='d' title="Operational vs Non-Operational Expenses" percent="+4%" >
            <template v-slot:default>
                <LineChart :chartData="data4" :options="options4" style="max-height: 200px"/>
            </template>
        </Card>
        <PieCard gArea='e' title="Operational vs Non-Operational Expenses" percent="+4%" >
            <template v-slot:default>
                <PieChart :chartData="data5" :options="options5" style="min-width: 100px"/>
            </template>
        </PieCard>
        <Card gArea='f' title="Product Prices vs Expenses" percent="+4%" >
            <template v-slot:default>
                <ScatterChart :chartData="data6" :options="options6" style="max-height: 200px"/>
            </template>
        </Card>
        <Card gArea='g' />
        <Card gArea='h' />
        <Card gArea='i' />
        <Card gArea='j' />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, ref, reactive } from 'vue'
import Card from './Card.vue'
import PieCard from './PieCard.vue'
import {useFinanceStore} from '../stores/finance'
import {useProductStore} from '../stores/products'
import { LineChart, BarChart, PieChart, ScatterChart } from 'vue-chart-3';
import {data, options, data2, options2, data3, options3, data4, options4, data5, options5, data6, options6} from '../charts/chartsData'
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);


export default defineComponent({
    setup () {
        const financeStore = useFinanceStore()
        const productStore = useProductStore()
        const loading = ref(true)
        onMounted(async ()=>{
            await Promise.all([financeStore.getFinances(), productStore.getProducts()])
            loading.value = false
            console.log(financeStore.revenueExpenses)
            console.log(scatterData.value)
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
        const profit = computed(()=>{
            const expenses = financeStore.expenses
            const revenue = financeStore.revenue
            const profit: number[] = []
            for (let i=0;i<expenses.length && revenue.length; i++) {
                const profitValue:number = +(revenue[i] - expenses[i]).toFixed(2)
                profit.push(profitValue)
            }
            return profit
        })
        const operationalExpenses = computed(()=>{
            return financeStore.operationalExpenses
        })
        const nonOperationalExpenses = computed(()=>{
            return financeStore.nonOperationalExpenses
        })
        const price = computed(()=>{
            return productStore.price
        })
        const expense = computed(()=>{
            return productStore.expense
        })
        const scatterData = computed(()=>{
            return price.value.map((i,idx)=>{
                return {
                    x: i,
                    y: expense.value[idx]
                }
            })
        })

        data.labels = months
        data.datasets[0].data = revenue
        data.datasets[1].data = expenses
        data2.labels = months
        data2.datasets[0].data = revenue
        data2.datasets[1].data = profit
        data3.labels = months
        data3.datasets[0].data = revenue
        data4.labels = months
        data4.datasets[0].data = operationalExpenses
        data4.datasets[1].data = nonOperationalExpenses
        data6.datasets[0].data = scatterData



        return {financeStore,productStore, price, expense, loading, months, expenses,operationalExpenses,nonOperationalExpenses,scatterData ,data, options, data2, options2, data3, options3, data4, options4, data5, options5, data6, options6}
    },
    components: {
        Card,
        PieCard,
        LineChart,
        BarChart,
        PieChart,
        ScatterChart
    }
})
</script>

<style scoped>

</style>