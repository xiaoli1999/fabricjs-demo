<template>
    <div>首页</div>
</template>

<script lang="ts" setup>
import { StoreGeneric, storeToRefs } from 'pinia'
import { testStore } from '@/store/test'

const TestStore: StoreGeneric = testStore()
const { count } = storeToRefs(TestStore)

const add = () =>  (TestStore.count++)
const adds = () =>  (TestStore.setCountAdd())
const reset = () =>  (TestStore.$reset())

</script>

<style scoped>
.home {
    width: 100%;
    height: auto;
}
</style>
