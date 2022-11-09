<template>
    <div class="app__input ui__component">
        <label class="component__wrapper" :style="wrapStyle">
            <div class="input__wrapper">
                <input
                    :type="type"
                    :value="modelValue"
                    :placeholder="placeholder"
                    :style="style"
                    :id="id"
                    @input="returnValue"
                    @change="returnValue"
                />
            </div>

            <div v-if="$slots.btn" class="input__button">
                <slot name="btn"></slot>
            </div>
        </label>
    </div>
</template>

<script>
export default {
    name: "app-ui-input",
};
</script>

<script setup>
const props = defineProps({
    type: { type: String, default: "text" },
    id: String,
    modelValue: String,
    placeholder: String,
    style: String,
    wrapStyle: String
});

const emit = defineEmits(["input", "sumbit"]);

const returnValue = (event) => {
    if (props.type == "tel") event.target.value = validateNumber(event.target.value);
    emit("update:modelValue", event.target.value);
};

const validateNumber = (value) => {
    if (value == "") return value;
    return /^\d+$/.test(value) ? value : validateNumber(value.substring(0, value.length - 1));
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.app__input {
    .component__wrapper {
        background-image: vars.$gradient-gray-light-gray-273;
        display: flex;
        align-items: center;
        max-width: 100%;
        height: 100%;
    }

    .input__wrapper {
        width: 100%;
        height: 100%;

        input {
            border: 0;
            outline: none;
            width: 100%;
            height: 100%;
            background-color: transparent;
            font-size: 16px;
        }
    }

    .input__button {
        text-align: right;
    }

    &._app__input_bgc-none {
        .component__wrapper {
            background: transparent;
        }
    }

    &._app__input_text {
        .component__wrapper {
            border-radius: 50px;
            padding: 8px;
        }
        .input__wrapper {
            height: 44px;

            input {
                padding: 0 20px;
            }
        }
    }
}
</style>
