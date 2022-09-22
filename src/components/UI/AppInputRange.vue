<template>
    <div 
        :value="value"
        class="app__input_range ui__component"
        :class="`range__type_${range} color-${color} back-color-${backColor}`"
    >
        <div class="range__wrapper">
            <span class="range__point point__start" :value="startValue" @mousedown="movePoint"></span>
            <span class="range__line"></span>
            <span class="range__point point__end" :value="endValue"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: "app-input-range",
};
</script>

<script setup>
import { ref } from "vue";
const value = ref({});
const startValue = ref(0);
const endValue = ref(0);
defineProps({
    range: { type: String, default: "once" },
    value: { type: [Number, Array] },
    color: { String, default: "def" },
    backColor: { String, default: "def" },
});

const movePoint = (evt) => {
    console.log(evt.target);
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/vars';
.app__input_range {
    .range__wrapper {
        position: relative;
        height: 32px;
        .range__line {
            display: block;
            position: relative;
            height: 8px;
            width: 100%;
            background-color: vars.$color-g-primary;
            border-radius: 50px;
            cursor: pointer;
            
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: vars.$color-g-text;
                opacity: 0.5;
                z-index: -1;
                border-radius: 50px;
                isolation: isolate;
            }
        }
        .range__point {
            cursor: pointer;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            display: block;
            width: 24px;
            height: 24px;
            background-color: vars.$color-g-primary;
            border-radius: 50%;

            &.point__start {
                left: 0;
            }

            &.point__end {
                right: 0;
            }
        }
    }
}
</style>
