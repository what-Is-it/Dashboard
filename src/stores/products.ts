import {defineStore} from 'pinia'
import {computed, ref, Ref} from 'vue'
import axios from 'axios'
import {AxiosResponse} from 'axios'
import {
    GetProductsResponse,
  } from "./types";

export const useProductStore = defineStore('product', {
    state: ()=> ({
        products: ref([]) as Ref<GetProductsResponse[]>
    }),

    actions: {
        async getProducts():Promise<void> {
            await axios.get('http://localhost:1337/product/products')
                .then((response: AxiosResponse<GetProductsResponse[]>) => {
                this.products.push(...response.data)
            })
            .catch((error) => {
                console.log(error)
                return error
            })
        }
    },
    getters: {
        price():number[] {
            return this.products.map((el)=>el.price)
        },
        expense():number[] {
            return this.products.map((el)=>el.expense)
        },
    }
})