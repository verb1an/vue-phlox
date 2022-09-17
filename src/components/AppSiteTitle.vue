<template>
    <header class="app__site_title component">
        <div class="item__wrapper">
            <div class="content">
                <div class="content__row">
                    <ul>
                        <li v-for="alias in allAlias" :key="alias.path">
                            <router-link v-if="alias != allAlias.at(-1)" :to="alias.path">{{ alias.title }}</router-link>
                            <h3 v-else>{{ alias.title }}</h3>
                        </li>
                    </ul>
                    <h3 class="title">
                        {{ allAlias.at(-1).title }}
                    </h3>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "app-site-title",
};
</script>

<script setup>
const props = defineProps({
    aliases: {
        type: Array,
        required: true,
    },
});

let allAlias = [
    {
        title: "Home",
        path: "/",
    },
    ...props.aliases,
];
</script>

<style lang="scss" scoped>
@use '@/assets/scss/vars';
.app__site_title {
    background: vars.$gradient-gray-light-gray-90;
    .content {
        padding: 50px 0 55px;
        .content__row {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            ul {
                padding: 0;
                list-style: none;
                display: flex;
                align-items: center;

                li {
                    display: flex;
                    align-items: center;

                    a, h3 {
                        font-size: 16px;
                        font-weight: 500;
                        text-transform: capitalize;
                        color: vars.$color-app-text-06;
                        transition: color 0.2s ease-in-out;
                    }
                    
                    a:hover {
                        text-decoration: underline;
                        color: vars.$color-app-pale-cyan-blue;
                    }

                    &:not(:last-child) {
                        margin-right: 20px;
                        &::after {
                            content: '\e90b';
                            font-family: 'phlox' !important;
                            font-size: 12px;
                            display: block;
                            transform-origin: center;
                            transform: rotateZ(-90deg);
                            color: vars.$color-app-text-06;
                            margin-left: 20px;
                        }
                    }

                }
            }

            .title {
                font-size: 35px;
                font-weight: 700;
                color: vars.$color-g-text;
            }
        }
    }
}
</style>
