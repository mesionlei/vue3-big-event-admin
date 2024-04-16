import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'big-user',
  () => {
    const token = ref('')
    const setToken = (newValue) => (token.value = newValue)
    return {
      token,
      setToken
    }
  },
  {
    persist: true //本地持久化
  }
)
