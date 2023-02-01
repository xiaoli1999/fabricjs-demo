/**
 * @file config.ts config store
 * @description 配置项store
 * @author xiao li
 * @copyright 黎<https://www.xiaoli.vip>
 * @createDate 2023-02-1 17:10
 */
import { defineStore, StoreDefinition } from 'pinia'
import { judgePC } from '@/tools/common'


export const configStore: StoreDefinition = defineStore('Config', {
    state: () => ({
        IsPcDevice: true
    }),
    getters: {
        getTestCount: (state) => {
            return `count-${state.count}`
        }
    },
    actions: {
        SetDevice() {
            this.IsPcDevice = judgePC()
        }
    }
})
