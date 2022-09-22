<template>
    <nav class="app__menu_catalog component">
        <div class="menu__wrapper">
            <div @click="showHideMenu" class="menu__title">
                <h3>{{ title }}</h3>
            </div>
            <ul v-if="!$slots.content" class="_toggle_hidden">
                <li v-for="item in menu" :key="item.path">
                    <router-link :to="item.path">{{ item.title }}</router-link>
                </li>
            </ul>
            <div v-else class="content _toggle_hidden">
                <slot name="content"></slot>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "app-menu-catalog",
};
</script>

<script setup>
defineProps({
    title: String,
    menu: Array,
});

const showHideMenu = (event) => {
    const targetElement = event.target.closest(".component").children[0].children[1];
    let showedTargetHeight = 0;
    for (let i = 0; i < targetElement.children.length; i++) {
        showedTargetHeight += targetElement.children[i].offsetHeight;

        const margin = window.getComputedStyle(targetElement.children[i], null).margin;
        if (!margin || margin == "0px") continue;
        console.log(margin);
        const allMargins = margin.replaceAll("px", "").split(" ");
        showedTargetHeight += Number.parseInt(allMargins[0]) + Number.parseInt(allMargins[2]); // <!-- ? Top and bottom -->
    }

    targetElement.classList.toggle("_show");
    targetElement.classList.contains("_show")
        ? (targetElement.style = `height: ${showedTargetHeight+25}px`) // <!-- 50px for something wrong -->
        : (targetElement.style = ""); // <!-- ? mt10 + h18.4 -->
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.app__menu_catalog {
    .menu__wrapper {
        .menu__title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
            cursor: pointer;
            &::after {
                content: "\e90b";
                font-family: "phlox" !important;
                font-size: 14px;
                font-weight: 400;
                transform: rotateZ(-90deg);
                transition: all 0.4s ease-in-out;
            }
        }
        ul {
            list-style: none;
            li {
                margin-top: 10px;
                padding: 0 40px;
                a {
                    font-size: 16px;
                    font-weight: 500;
                    color: vars.$color-app-text-06;
                    transition: all 0.2s ease-in-out;
                }

                &:hover {
                    a {
                        color: vars.$color-g-primary;
                    }
                }
            }
        }

        ._toggle_hidden {
            padding: 0;
            margin: 0;
            height: 0;
            opacity: 0;
            overflow: hidden;
            transition: all 0.4s ease-in-out;

            &._show {
                height: auto;
                opacity: 1;
            }
        }
    }
}
</style>
