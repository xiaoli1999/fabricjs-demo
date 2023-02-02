<template>
    <header>
        <div @click="Router.replace('/')">
            <img src="../../assets/img/logo.jpg" alt="">
            <span>fabricjs-demo</span>
        </div>
        <p @click="goMyGithub">
            <img src="https://img.shields.io/github/watchers/xiaoli1999/fabricjs-demo" alt="">
            <img src="https://img.shields.io/github/forks/xiaoli1999/fabricjs-demo" alt="">
            <img src="https://img.shields.io/github/stars/xiaoli1999/fabricjs-demo" alt="">
        </p>
    </header>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const Router = useRouter()

const goMyGithub = () => window.open('https://github.com/xiaoli1999/fabricjs-demo','_blank')
</script>

<style lang="less" scoped>
header {
    position: sticky;
    top: 0;
    z-index: 99;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 calc((100% - 1200px) / 2);
    margin: 0 auto;
    max-width: 1200px;
    height: 48px;
    backdrop-filter: saturate(50%) blur(4px);
    border-bottom: 1px solid #dcdfe6;

    > div {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #323232;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.24s;

        > img {
            overflow: hidden;
            margin-right: 8px;
            width: 36px;
            height: 36px;
            border-radius: 50%;
        }

        &:hover {
            color: #000;
        }
    }

    > p {
        display: flex;

        > img {
            margin-left: 8px;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
                opacity: 0.8;
            }
        }
    }
}

@media only screen and (max-width: 768px) {
    /* 移动端 */
    header {
        padding: 0 8px;
        max-width: 100%;

        > div {
            > img {
                display: none;
            }
        }
    }
}
</style>
