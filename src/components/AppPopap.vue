<template>
    <transition appear>
        <div class="app__popap component" v-if="show" :class="design" :style="style">
            <div class="popap__wrapper">
                <div class="popap__header">
                    <h3 class="popap__title"><slot name="title"></slot></h3>
                </div>
                <div class="popap__content">
                    <div class="popap__text">
                        <slot name="text"></slot>
                    </div>
                    <app-btn :design="'fill-bgc'" :background="'primary'" :color="'white'" @click="close">
                        <slot name="btn"></slot>
                    </app-btn>
                </div>
                <div class="popap__media">
                    <slot name="media"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "app-popap",
};
</script>

<script setup>
import { onMounted } from 'vue';
defineProps({
    show: {
        type: Boolean,
        required: true
    },
    style: String,
    design: String,
   
});
const emit = defineEmits(["popap:close"]);

const close = () => {
    document.querySelector('html').style = 'overflow:auto;';
    emit("popap:close");
};

onMounted(() => {
    document.querySelector('html').style = 'overflow:hidden;';
})
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.app__popap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    transition: all 0.5s ease-in-out;
    background-color: rgba(0, 0, 0, 0.5);

    .popap__wrapper {
        background-color: vars.$color-g-white;
        padding: 20px;
        box-shadow: 0 0 14px rgba(0, 0, 0, 0.3);
        max-width: 100%;
        width: 600px;

        .popap__title {
            font-size: 18px;
            font-weight: 700;
            color: vars.$color-g-text;
            margin-bottom: 15px;
            letter-spacing: -0.4px;
        }

        .popap__text {
            font-size: 15px;
            font-weight: 400;
            color: vars.$color-app-text-08;
            line-height: 1.5;
            max-width: 80%;
            margin-bottom: 40px;

            a {
                color: vars.$color-g-text;
                transition: all .2s ease;
            }
        }
    }

    &.v-enter-active,
    &.v-leave-active {
        .popap__wrapper {
            transition: all 0.5s ease-in-out;
        }
    }

    &.v-enter-from,
    &.v-leave-to {
        background-color: rgba(0, 0, 0, 0.5);
        .popap__wrapper {
            transform: translate(1000px, 150px) scale(0.3) skew(45deg);
            opacity: 0;
        }
    }
}
</style>
