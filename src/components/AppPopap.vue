<template>
    <transition appear>
        <div class="app__popap component" v-if="show" :class="design" :style="style">
            <div class="popap__wrapper">
                <div v-if="$slots.close" class="popap__close" @click="onBtnClose">
                    <slot name="close"></slot>
                </div>
                <div v-if="$slots.title" class="popap__header">
                    <h3 class="popap__title"><slot name="title"></slot></h3>
                </div>
                <div v-if="$slots.text" class="popap__content">
                    <div class="popap__text">
                        <slot name="text"></slot>
                    </div>
                    <app-ui-btn :design="'fill-bgc'" :background="'primary'" :color="'white'" @click="close">
                        <slot name="btn"></slot>
                    </app-ui-btn>
                </div>
                <div v-if="$slots.media" class="popap__media" @click="$emit('popap:open')">
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
import { watch } from "vue";
const props = defineProps({
    show: {
        type: Boolean,
        required: true,
    },
    style: String,
    design: String,
    stopScroll: { type: Boolean, default: true },
});
const emit = defineEmits(["popap:close"]);

if (props.stopScroll)
    watch(
        () => props.show,
        (value) => {
            document.querySelector("html").style = `overflow: ${value ? "hidden" : "auto"};`;
        }
    );

const close = () => emit("popap:close");
const onBtnClose = (event) => {
    if (event.target.closest(".btn__popap_close")) close();
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.app__popap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    transition: all 0.5s ease-in-out;

    .popap__wrapper {
        background-color: vars.$color-g-white;
        padding: 0;
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
        }
    }

    &._full {
        position: fixed;
        background-color: rgba(0, 0, 0, 0.5);

        .popap__wrapper {
            padding: 20px;
        }
    }

    &._full-screen {
        .popap__wrapper {
            width: 100%;
            height: 100%;
        }
    }

    &._fade-left-skew.v-enter-active,
    &._fade-left-skew.v-leave-active {
        .popap__wrapper {
            transition: all 0.5s ease-in-out;
        }
    }

    &._fade-left-skew.v-enter-from,
    &._fade-left-skew.v-leave-to {
        background-color: rgba(0, 0, 0, 0.5);
        .popap__wrapper {
            transform: translate(1000px, 150px) scale(0.3) skew(45deg);
            opacity: 0;
        }
    }

    &._fade-down.v-enter-active,
    &._fade-down.v-leave-active {
        .popap__wrapper {
            transition: all 0.3s ease-in-out;
        }
    }

    &._fade-down.v-enter-from,
    &._fade-down.v-leave-to {
        .popap__wrapper {
            transform: translate(0, 150px);
            opacity: 0;
        }
    }
}
</style>

<style lang="scss">
@use "@/assets/scss/vars";
.app__popap {
    .popap__wrapper {
        .popap__text {
            a {
                color: vars.$color-g-text;
                transition: all 0.2s ease;
                font-weight: 400;

                &:hover {
                    color: vars.$color-g-primary;
                }
            }
        }
    }
}
</style>
