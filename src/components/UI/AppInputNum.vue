<template>
    <div class="app__input_num ui__component">
        <label class="component__wrapper">
            <app-ui-btn @click="returnValue(modelValue - 1)">
                <div class="input__num_control minus">
                    <span></span>
                </div>
            </app-ui-btn>

            <div class="input__num_wrapper">
                <app-ui-input
                    :type="'text'"
                    :modelValue="modelValue"
                    :style="'padding: 0; text-align: center; font-weight: 600; font-size: 20px;'"
                    class="_app__input_bgc-none"

                    @update:modelValue="returnValue"
                />
            </div>
            <app-ui-btn @click="returnValue(modelValue + 1)">
                <div class="input__num_control plus">
                    <span></span>
                    <span></span>
                </div>
            </app-ui-btn>

        </label>
    </div>
</template>

<script>
import { watch } from 'vue';
export default {
    name: "app-ui-input-num",
};
</script>

<script setup>
const props = defineProps({
    modelValue: {
        type: Number,
        default: 0,
    },
    max: Number,
    min: Number,
});
const emit = defineEmits(["input", "changeValue"]);

const returnValue = (value) => {
    emit("update:modelValue", Number(value));
};

watch(() => props.modelValue, () => {
    if(isNaN(props.modelValue)) returnValue(props.min ?? 0);
    if(props.max && props.modelValue > props.max) returnValue(props.max)
    if(props.min && props.modelValue < props.min) returnValue(props.min)
})
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.app__input_num {
    .component__wrapper {
        display: flex;
        align-items: center;
    }

    .input__num_wrapper {
        .app__input {
            height: 40px;
            width: 40px;
        }
    }

    .input__num_control {
        position: relative;
        height: 28px;
        width: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
        transition: all 0.2s ease-in-out;

        span {
            position: absolute;
            display: block;
            background-color: vars.$color-g-secondary;
            border-radius: 4px;
            height: 2px;
            width: 16px;
            transition: all 0.2s ease-in-out;
        }
        &.plus {
            span {
                &:first-child {
                    transform: rotateZ(90deg);
                }
            }
        }

        &:hover {
            background-color: vars.$color-g-secondary;

            span {
                background-color: vars.$color-app-dark-gray;
            }
        }
    }
}
</style>
