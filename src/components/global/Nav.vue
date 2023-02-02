<template>
    <div class="nav" @click="showList = true">
        <el-icon><List /></el-icon>
    </div>
    <el-drawer title="其他demo" v-model="showList" :size="IsPcDevice ? '30%' : '100%'">
        <el-timeline style="padding: 8px;">
            <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card>
                    <h4>Update Github template</h4>
                    <p>Tom committed 2018/4/12 20:46</p>
                </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
                <el-card>
                    <h4>Update Github template</h4>
                    <p>Tom committed 2018/4/3 20:46</p>
                </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card>
                    <h4>Update Github template</h4>
                    <p>Tom committed 2018/4/2 20:46</p>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs  } from 'pinia'
import { useRouter } from 'vue-router'
import { configStore } from '@/store/config'
import { List } from '@element-plus/icons-vue'

const ConfigStore = configStore()

const { IsPcDevice } = storeToRefs(ConfigStore)

const showList = ref<boolean>(false)


console.log(useRouter().getRoutes())
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

@media only screen and (max-width: 768px) {
    /* 移动端 */
}
</style>
