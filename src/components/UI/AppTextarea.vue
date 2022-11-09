<template>
    <div class="app__textarea ui__component">
        <label class="component__wrapper" :style="wrapStyle">
            <div class="textarea__wrapper">
                <textarea 
                    :placeholder="placeholder"
                    :style="`resize: ${resize}; ${style}`"
                    :modelValue="value"
                    :id="id"
                    @input="returnValue"
                    @change="returnValue"
                ></textarea>
            </div>
        </label>
    </div>
</template>

<script>
export default {
    name: "app-ui-textarea",
};
</script>

<script setup>
defineProps({
    resize: {String, default: 'none'},
    value: String,
    id: String,
    placeholder: String,
    style: String,
    wrapStyle: String
})

const emit = defineEmits(['input', 'sumbit']);
const returnValue = (event) => {
    emit('update:modelValue', event.target.value);
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/vars';
.app__textarea{
    .component__wrapper{
        background-image: vars.$gradient-gray-light-gray-273;
        display: flex;
        align-items: center;
        padding: 8px;
        max-width: 100%;
        height: 100%;
    }
    
    .textarea__wrapper {
        width: 100%;
        height: 100%;
        
        textarea {
            border: 0;
            outline: none;
            width: 100%;
            height: 100%;
            background-color: transparent;

            font-size: 16px;
            padding: 30px 20px;
        }
    }

    .input__button{
        text-align: right;
    }
}
</style>
