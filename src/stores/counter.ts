import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('store', {
  state: () => {
    return {
      page: 0,
    }
  },
  actions: {
    increment() {
      this.page++
      if(this.page == 10) {
        this.page = 0
      }
    },
    decrement() {
      this.page--
    }
  },
  persist: true,
})

