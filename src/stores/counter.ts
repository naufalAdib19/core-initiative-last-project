import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('store', {
  state: () => {
    return {
      page: 0,
      current_product_category: ""
    }
  },
  actions: {
    increment() {
      this.page++
      if(this.page == 20) {
        this.page = 0
      }
    },
    getCurrentProductCategorys(category: string) {
      this.current_product_category = category
    }
  },
  persist: true,
})

