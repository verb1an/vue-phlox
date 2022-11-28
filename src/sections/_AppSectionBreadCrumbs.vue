<template>
    <div class="app__breadcrumbs">
        <div class="paths">
            <div v-for="bc in bread" :key="bc.path" class="bc__item">
                <router-link :to="bc.path">{{ bc.title }}</router-link>
            </div>
        </div>
        
        <div class="current__page">
            <h2 class="title">{{ bread.at(-1).title }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "app-s-breadcrumbs"
}
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    breadcrumbs: {
        type: Array,
        required: true
    }
});

const startPage = [{title: "Home", path: "/"}]

const bread = computed(() => {
    return startPage.concat(props.breadcrumbs)
})
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.app__breadcrumbs {
    padding: 50px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: vars.$color-g-gray;
    margin-bottom: 20px;

    .paths {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 10px;

        .bc__item {
            margin-right: 20px;
            a{
                color: vars.$color-app-text-08;
                transition: all .2s ease-in-out;
                text-transform: capitalize;
            }

            &:not(:last-child) {
                display: flex;
                align-items: center;
                &::after {
                    display: block;
                    content: '\e90b';
                    font-family: 'phlox' !important;
                    transform: rotateZ(-90deg);
                    color: vars.$color-app-text-06;
                    transform-origin: center;
                    margin-left: 20px;
                }
            }

            &:hover a {
                color: vars.$color-app-pale-cyan-blue;
            }
        }
    }

    .current__page .title {
        font-size: 28px;
        font-weight: 600;
        color: vars.$color-g-text;
        text-transform: capitalize;
    }
}
</style>