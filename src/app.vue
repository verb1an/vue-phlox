<template>
    <div class="app-wrapper">
        <app-header @searchPopap:show="showSearchPopap = true" />
        <div class="main">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
        <app-footer />

        <transition name="_show-btn-to-up">
            <app-ui-btn v-show="showBtnToUp" class="btn-to-up" @click="toUpDocument">
                <app-ui-icon class="icon_arrow" :icon="'i-arrow-up'" :style="'font-size: 15px;'" />
            </app-ui-btn>
        </transition>

        <app-popap :show="showHelloPopap" @popap:close="closehelloPopap" class="_full _fade-left-skew">
            <template #title>
                <span>Hi, everyone!</span>
            </template>
            <template #text>
                <p>
                    This project is only a free interpretaion of the <a href="" target="_blank">demo.phlox</a> website
                    and is not intended for commercial use
                </p>
                <p>Created by <a href="https://github.com/verb1an" target="_blank">verb1an</a></p>
            </template>
            <template #btn>
                <span>Ok</span>
            </template>
            <template #media>
                <div class="media__wrapper" id="helloPopapChart"></div>
            </template>
        </app-popap>

        <app-popap
            :show="showSearchPopap"
            @popap:close="showSearchPopap = false"
            @popap:open="showSearchPopap = true"
            class="_full _full-screen _fade-left-skew"
        >
            <template #close>
                <app-ui-btn style="float: right" class="btn__popap_close">
                    <app-ui-icon :icon="'i-close'" />
                </app-ui-btn>
            </template>
            <template #media>
                <form class="search__block">
                    <app-ui-input :type="'text'" :placeholder="'Search Here'" class="_app__input_text">
                        <template #btn>
                            <app-ui-btn
                                :type="'submit'"
                                :design="'fill-circle'"
                                :background="'primary'"
                                :color="'white'"
                                :style="'padding: 15px;'"
                            >
                                <app-ui-icon :icon="'i-search'" :style="'display:block;height: 20px; width: 20px;'" />
                            </app-ui-btn>
                        </template>
                    </app-ui-input>
                </form>
            </template>
        </app-popap>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = new useRouter();

const showBtnToUp = ref(false);
const showHelloPopap = ref(localStorage.getItem("showHelloPopap") == "false" ? false : true);
const showSearchPopap = ref(false);

window.addEventListener("scroll", () => {
    window.pageYOffset > 700 ? (showBtnToUp.value = true) : (showBtnToUp.value = false);
});

router.beforeEach((to, from, next) => {
    if (from.path !== to.path) {
        window.scrollTo(0, 0);
    }
    next();
});

const toUpDocument = () => {
    window.scrollTo(0, 0);
};

const closehelloPopap = () => {
    showHelloPopap.value = false;
    localStorage.setItem("showHelloPopap", false);
};
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

    .search__block {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: start;
        padding: 150px 0;

        .ui__component.app__input {
            width: 50%;

            @media (max-width: 767px) {
                width: 90%;
            }
        }

        @media (max-width: 767px) {
            padding: 100px 0;
        }
    }
}
</style>
