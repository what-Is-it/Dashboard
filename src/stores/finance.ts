import {defineStore} from 'pinia'
import {computed, ref, Ref} from 'vue'
import axios from 'axios'
import {AxiosResponse} from 'axios'
import {
    GetFinanceResponse,
  } from "./types";

export const useFinanceStore = defineStore('finance', {
    state: ()=> ({
        finance: ref([]) as Ref<GetFinanceResponse[]>
    }),

    actions: {
        async getFinances():Promise<void> {
            await axios.get('http://localhost:1337/finance/finances')
                .then((response: AxiosResponse<GetFinanceResponse[]>) => {
                this.finance.push(...response.data)
            })
            .catch((error) => {
                console.log(error)
                return error
            })
        }
    },
    getters: {
        revenueExpenses():any {
            return this.finance[0].monthlyData.map(({month, revenue, expenses})=>{
                return {
                    name: month.substring(0,3),
                    revenue: revenue,
                    expenses: expenses
                }
            })
        },
        months():string[] {
            return this.finance[0].monthlyData.map((el)=>el.month.substring(0,3))
        },
        expenses():number[] {
            return this.finance[0].monthlyData.map((el)=>el.expenses)
        },
        revenue():number[] {
            return this.finance[0].monthlyData.map((el)=>el.revenue)
        },
        operationalExpenses():number[] {
            return this.finance[0].monthlyData.map((el)=>el.operationalExpenses)
        },
        nonOperationalExpenses():number[] {
            return this.finance[0].monthlyData.map((el)=>el.nonOperationalExpenses)
        }
    }
})