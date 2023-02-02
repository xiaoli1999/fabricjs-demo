<template>
    <Header />
    <router-view v-slot="{ Component, route }">
        <transition name="slide-right" mode="out-in">
            <main :key="route.path">
                <h2>{{ Route.meta.title }}</h2>
                <keep-alive>
                    <component :is="Component" :key="route.path" />
                </keep-alive>
            </main>
        </transition>
    </router-view>
    <Nav />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const Route = useRoute()
</script>

<style lang="less">
#app {
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
    background: #f7f8fa;
}

main {
    margin: 0 auto;
    max-width: 1200px;
    box-sizing: border-box;
}

h2 {
    padding: 16px 0;
    text-align: center;
}

@media only screen and (max-width: 768px) {
    main {
        padding: 0 8px;
    }

    h2 {
        padding: 8px 0;
    }
}
</style>
