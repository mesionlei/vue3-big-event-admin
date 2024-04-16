import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate' //pinia本地持久化插件

const pinia = createPinia()
pinia.use(persist)

export default pinia

export * from '@/stores/modules/user' //将user下边的属性和方法全部向外曝出
