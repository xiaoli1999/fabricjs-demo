<template>
    <div class="demo-list">
        <div v-for="(route, rIndex) in routerList" :key="rIndex" class="demo-item" @click="Router.push(route.path)">
            <div>
                <img src="../assets/img/demo/1.png" alt="">
            </div>
            <p>
                <el-tag class="ml-2" :type="route.meta.level === '基础' ? 'warning' : ''" size="small">{{ route.meta.level }}</el-tag>
                {{ route.meta.title }}
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'

const Router = useRouter()
const Route = useRoute()

const routerList = Router.getRoutes().filter(i => i.path !== '/')
</script>

<style lang="less" scoped>
.demo-list {
    display: flex;
    align-items: center;

    .demo-item {
        overflow: hidden;
        margin: 10px;
        width: calc(25% - 20px);
        font-size: 14px;
        background: #fff;
        border-radius: 8px;
        transition: all 0.24s;
        border-bottom: 1px solid #f2f2f2;
        cursor: pointer;

        > div {
            position: relative;
            overflow: hidden;
            width: 100%;
            aspect-ratio: 1.7;

            > img {
                position: absolute;
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: all 0.24s;
            }

            &:hover {
                > img {
                    transform: scale(1.05);
                }
            }
        }

        > p {
            display: flex;
            align-items: center;
            padding: 0 8px;
            height: 30px;
            color: #222;

            > span {
                margin-right: 4px;
            }
        }

        &:hover {
            transform: translateY(-8px);
            box-shadow: 0 0 8px #00000012;

            > p {
                color: #409eff;
            }
        }
    }
}

@media only screen and (max-width: 992px) {
    .demo-list {
        display: flex;

        .demo-item {
            margin: 0 4px;
            width: calc(33.33% - 8px);
        }
    }
}

@media only screen and (max-width: 768px) {
    .demo-list {
        display: flex;
        justify-content: space-between;

        .demo-item {
            margin: 0;
            width: calc(50% - 6px);
            font-size: 12px;

            > p {
                padding: 0 4px;
            }
        }
    }
}
</style>
