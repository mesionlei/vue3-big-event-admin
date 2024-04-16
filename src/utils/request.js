import router from '@/router'
import { useUserStore } from '@/stores'
import axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'http://big-event-vue-api-t.itheima.net'
const request = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL,
  timeout: 100000
})

request.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  (error) => Promise.reject(error)
)

request.interceptors.response.use(
  (response) => {
    // TODO 3. 处理业务失败
    // TODO 4. 摘取核心响应数据
    if (response.data.code === 0) {
      return response
    }
    ElMessage.error(response.data.message || '服务异常')
    return Promise.reject(response.data)
  },
  (error) => {
    // TODO 5. 处理401错误
    ElMessage.error(error.response.data.message || '服务异常')
    if (error.response?.status === 401) {
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

export default request
export { baseURL }
