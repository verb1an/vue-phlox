<template>
    <div class="app-wrapper">
        <app-header />
        <router-view></router-view>
        <app-footer />

        <transition name="_show-btn-to-up">
            <app-btn v-show="showBtnToUp" class="btn-to-up" @click="toUpDocument">
                <app-icon class="icon_arrow" :icon="'i-arrow-up'" :style="'font-size: 15px;'" />
            </app-btn>
        </transition>

        <!-- <app-popap :show="showHelloPopap" @popap:close="showHelloPopap = false">
            <template #title>
                <span>Hi, everyone!</span>
            </template>
            <template #text>
                <p>This project is only a free interpretaion of the <a href="">demo.phlox</a> website and is not intended for commercial use</p>
            </template>
            <template #btn>
                <span>Ok</span>
            </template>
            <template #media>
                <div class="media__wrapper" id="helloPopapChart"></div>
            </template>
        </app-popap> -->
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { MakeChart } from '@/hooks/makeChart';

const showBtnToUp = ref(false);
const showHelloPopap = ref(true);

window.addEventListener("scroll", () => {
    window.pageYOffset > 700 ? (showBtnToUp.value = true) : (showBtnToUp.value = false);
});

const toUpDocument = () => {
    window.scrollTo(0, 0);
};

// onMounted(() => {
//     const elements = [
//         10, 20, 20
//     ];
//     const colors = [
//         '#f94144', '#577590', 'green'
//     ]
//     const mc = new MakeChart(`#helloPopapChart`, {
//         count: 50,
//         elements,
//         colors
//     });
//     mc.create()
// })

</script>

<style lang="scss">
@use "@/assets/scss/null";
@use "@/assets/scss/fonts";
@use "@/assets/scss/vars";
@use "@/assets/scss/mixins";
#app {
    font-family: "Montserrat";
    font-size: 16px;
    font-weight: 400;

    .container {
        max-width: 1600px;
        width: 100%;
        margin: 0 auto;

        @media (max-width: 1600px) {
            padding: 0 25px;
        }

        @media (max-width: 991px) {
            padding: 0 10px;
        }
    }

    .btn-to-up {
        cursor: pointer;
        position: fixed;
        bottom: 0;
        right: 0;
        margin: 2% 4%;
        border-radius: 50%;
        border: 1px solid #000;
        width: 40px;
        height: 40px;
        z-index: 100;
        background-color: vars.$color-g-white;
        overflow: hidden;

        .icon_arrow {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 15px;
            transition: all 0.3s ease-in-out;
        }

        &::before {
            content: "";
            position: absolute;
            // pointer-events: none;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            transform: translate(-50%, -50%);
            transition: all 0.3s ease-in-out;
            background-color: #3d3d3d;
            border-radius: 50%;
        }

        &:hover {
            border-color: transparent;
            .icon_arrow {
                color: vars.$color-g-white;
                animation: btn-to-app-animation 0.3s ease-in-out;
            }
            &::before {
                width: 100px;
                height: 100px;
            }
        }

        @keyframes btn-to-app-animation {
            0% {
                opacity: 0;
                transform: translate(-50%, 10px) scale(0);
            }
            100% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }

        &._show-btn-to-up-enter-active,
        &._show-btn-to-up-leave-active {
            transition: all 0.5s ease;
        }

        &._show-btn-to-up-enter-from,
        &._show-btn-to-up-leave-to {
            opacity: 0;
            transform: translateY(50px);
        }
    }
}
</style>
