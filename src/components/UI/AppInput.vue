<template>
    <div class="app__input ui__compontent">
        <div class="item__wrapper">
            <div class="input__wrapper">
                <input 
                    :type="type" 
                    :modelValue="value"
                    :placeholder="placeholder"
                    
                    @input="returnValue"
                    @change="returnValue"
                />
            </div>

            <div v-if="$slots.btn" class="input__button">
                <slot name="btn"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "app-input",
};
</script>

<script setup>
defineProps({
    type: {type: String, default: "text"},
    value: String,
    placeholder: String
})

const emit = defineEmits(['input', 'sumbit']);
const returnValue = (event) => {
    emit('update:modelValue', event.target.value);
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/vars';
.app__input{

    .item__wrapper{
        background-image: vars.$gradient-gray-light-gray-273;
        border-radius: 50px;
        display: flex;
        align-items: center;
        padding: 8px;
        max-width: 100%;
    }
    
    .input__wrapper {
        height: 44px;
        width: 100%;
        
        input {
            border: 0;
            outline: none;
            width: 100%;
            height: 100%;
            background-color: transparent;

            font-size: 16px;
            padding: 0 20px;
        }
    }

    .input__button{
        text-align: right;
    }
}
</style>
