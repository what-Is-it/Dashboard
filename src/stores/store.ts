import {defineStore} from 'pinia'
import {computed, ref, Ref} from 'vue'
import axios from 'axios'
import {AxiosResponse} from 'axios'
import {
    GetFinanceResponse,
    GetProductsResponse,
    GetTransactionsResponse,
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
        months():String[] {
            return this.finance[0].monthlyData.map((el)=>el.month)
        },
        expenses():Number[] {
            return this.finance[0].monthlyData.map((el)=>el.expenses)
        },
        revenue():Number[] {
            return this.finance[0].monthlyData.map((el)=>el.revenue)
        }
    }
})