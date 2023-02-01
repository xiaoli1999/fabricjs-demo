import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
import progress from '../tools/config/progress'
import store from '@/store'
import { configStore } from '@/store/config'

const ConfigStore = configStore(store)

const router = createRouter({
    history: createWebHashHistory(), /* 无# createWebHistory() */
    routes
})

router.beforeEach(() => {
    progress.start()
    ConfigStore.SetDevice()
})

router.afterEach(() => {
    progress.close()
})
export default router
