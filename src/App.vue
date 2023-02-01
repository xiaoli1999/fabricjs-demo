<template>
    <el-tag>App</el-tag>
    <router-view v-slot="{ Component, route }">
        <transition name="slide-right" mode="out-in">
            <div class="router-box" :key="route.path">
                <keep-alive>
                    <component :is="Component" :key="route.path" />
                </keep-alive>
            </div>
        </transition>
    </router-view>
</template>

<style lang="less">
#app {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    min-height: 100vh;
}
</style>
