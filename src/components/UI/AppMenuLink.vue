<template>
    <li class="app__menu_link component" >
        <router-link :to="link" :style="style">
            <span><slot></slot></span>
        </router-link>
    </li>
</template>

<script>
export default {
    name: "app-menu-link",
};
</script>

<script setup>
defineProps({
    link: {
        type: String,
        required: true,
    },
    style: String
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.app__menu_link {
    transition: 0.12s;
    a {
        text-decoration: none;
        color: inherit;
        letter-spacing: -0.48;
        padding: 0 1em 0 0.75em;

        & + a {
            margin-left: 5px;
        }

        span {
            font-weight: inherit;
        }
    }

    &.current {
        color: vars.$color-g-text;
    }

    &.footer__menu_item {
        margin-bottom: 10px;
        width: 100%;
        a {
            padding: 0;
        }

        &:hover {
            color: vars.$color-g-primary;
        }
    }
}
</style>
