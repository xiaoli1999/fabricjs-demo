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
        /* 是否为pc端 */
        IsPcDevice: true,
        /* 画布默认大小 */
        CanvasSize: {
            width: 600,
            height: 600
        }
    }),
    getters: {

    },
    actions: {
        SetDevice() {
            this.IsPcDevice = judgePC()
            this.CanvasSize = {
                width: this.IsPcDevice ? 600 : 320,
                height: this.IsPcDevice ? 600 : 320
            }
        }
    }
})
