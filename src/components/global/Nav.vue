<template>
    <div class="nav" @click="showList = true">
        <el-icon><List /></el-icon>
    </div>
    <el-drawer title="demo列表" v-model="showList" :size="IsPcDevice ? '30%' : '100%'">
        <el-timeline class="timeline">
            <el-timeline-item v-for="(route, rIndex) in routerList" :key="rIndex" :timestamp="route.meta.time" :color="route.path === Route.path ? '#409eff' : ''" hollow placement="top">
                <div class="timeline-item">
                    <el-tag class="ml-2" :type="route.meta.level === '基础' ? 'warning' : ''" size="small">{{ route.meta.level }}</el-tag>
                    <el-link type="primary" @click="goOther(route.path)">{{ route.meta.title }}</el-link>
                </div>
            </el-timeline-item>
        </el-timeline>
    </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { storeToRefs  } from 'pinia'
import { configStore } from '@/store/config'
import { List } from '@element-plus/icons-vue'

const Router = useRouter()
const Route = useRoute()

const showList = ref<boolean>(false)

const ConfigStore = configStore()
const { IsPcDevice } = storeToRefs(ConfigStore)

const routerList = Router.getRoutes().filter(i => i.path !== '/').reverse()
const goOther = (path)  => {
    showList.value = false
    Router.push(path)
}
</script>

<style lang="less" scoped>
.nav {
    position: fixed;
    right: 10%;
    bottom: 80px;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
    font-size: 24px;
    color: #409eff;
    border-radius: 50%;
    box-shadow: 0 0 8px rgb(0 0 0 / 14%);
    transition: all 0.24s;
    cursor: pointer;

    &:hover {
        background: #f2f6fc;
    }
}

.timeline {
    padding: 8px !important;

    .timeline-item {
        display: flex;
        align-items: center;
        padding: 4px 0;
        transition: all 0.24s;

        > span {
            margin-right: 8px;
        }
    }
}

@media only screen and (max-width: 768px) {
    /* 移动端 */
}
</style>
