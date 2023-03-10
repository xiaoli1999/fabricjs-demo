import { defineStore, StoreDefinition } from 'pinia'


export const testStore: StoreDefinition = defineStore('Test', {
    state: () => ({
        count: 0
    }),
    getters: {
        getTestCount: (state) => {
            return `count-${state.count}`
        }
    },
    actions: {
        setCountAdd() {
            this.count++
        }
    }
})
