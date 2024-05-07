import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetInfoService } from '@/api/user.js'

export const useUserStore = defineStore(
  'big-user',
  () => {
    const token = ref('')
    const setToken = (newValue) => (token.value = newValue)
    const userInfo = ref({})
    const getUserInfo = async () => {
      const res = await userGetInfoService()
      userInfo.value = res.data.data
    }
    const setUserInfo = (newValue) => {
      userInfo.value = newValue
    }
    return {
      token,
      setToken,
      userInfo,
      getUserInfo,
      setUserInfo
    }
  },
  {
    persist: true //本地持久化
  }
)
