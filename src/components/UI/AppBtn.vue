<template>
    <div class="app__button ui__component">
        <div class="button__wrapper">
            <button
                :type="type"
                :style="style"
                class="btn"
                :class="'btn-' + design + ' ' + 'bgc-' + background + ' ' + 'color-' + color"
            >
                <span><slot></slot></span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "app-btn",
};
</script>

<script setup>
defineProps({
    type: { type: String, default: "button" },
    style: { type: String },

    design: { type: String, defaul: "def" },
    background: { type: String, defaul: "def" },
    color: { type: String, defaul: "def" },
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.btn {
    outline: none;
    background-color: transparent;
    cursor: pointer;
    border: 0;
    font-size: 17px;
    font-weight: 500;

    color: vars.$color-app-text-08;

    &.btn-static {
        padding: 8px 15px;
        border-radius: 24px;
        font-size: 15px;
    }

    &.btn-fill-circle {
        position: relative;
        padding: 12px 32px;
        border-radius: 24px;
        transition: 0.36s ease-out;
        overflow: hidden;
        font-size: 15px;

        span {
            position: relative;
        }

        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: all 0.24s ease-in;
            background-color: vars.$color-g-text;
            border-radius: 50%;

            width: 0;
            height: 0;
        }

        &:hover {
            color: vars.$color-g-white;
            &::before {
                width: 200px;
                height: 200px;
            }
        }

        @media (max-width: 551px) {
            padding: 12px 24px;
        }
    }

    &.btn-fill-bgc{
        background-color: vars.$color-g-primary;
        color: vars.$color-g-white;
        padding: 12px 32px;
        font-size: 15px;
        border-radius: 24px;
        transition: all 0.24s ease-in;

        &:hover {
            background-color: vars.$color-g-text;
        }

        @media (max-width: 551px) {
            padding: 12px 24px;
        }
    }

    &.bgc-primary {
        background-color: vars.$color-g-primary;
    }
    &.bgc-white {
        background-color: vars.$color-g-white;
    }

    &.color-primary {
        color: vars.$color-g-primary;
    }
    &.color-white {
        color: vars.$color-g-white;
    }
    &.color-green {
        color: vars.$color-app-green;
    }
    &.color-yellow {
        color: #fec62e;
    }
    &.color-blue {
        color: #1a9dff;
    }
}
</style>
