<template>
    <nav class="app__menu_catalog component">
        <div class="menu__wrapper">
            <div @click="showHideMenu" class="menu__title">
                <h3>{{ title }}</h3>
            </div>
            <ul>
                <!-- ! Need to final or rewrite something -->
                <li><router-link :to="'/shop/earphones/'">Earphones</router-link></li>
                <li><router-link :to="'/shop/gadgets/'">Gadgets</router-link></li>
                <li><router-link :to="'/shop/gaming/'">Gaming</router-link></li>
                <li><router-link :to="'/shop/headphone/'">Headphone</router-link></li>
                <li><router-link :to="'/shop/laptop/'">Laptop</router-link></li>
                <li><router-link :to="'/shop/speaker/'">Speaker</router-link></li>
                <li><router-link :to="'/shop/uncategorized/'">Uncategorized</router-link></li>
            </ul>
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
    menu: {
        type: Array,
        required: true,
    },
});

const showHideMenu = (event) => {
    const menu = event.target.closest(".app__menu_catalog");
    const ul = menu.children[0].children[1]; // <!-- ? Ul el -->
    menu.classList.toggle("show");
    console.log(ul.children.length)
    menu.classList.contains("show") ? (ul.style = `height: ${ul.children.length * 28.4}px`) : (ul.style = ""); // <!-- ? mt10 + h18.4 -->
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
                transition: all .4s ease-in-out;
            }
        }
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            height: 0;
            opacity: 0;
            overflow: hidden;
            transition: all 0.4s ease-in-out;
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
    }

    &.show {
        .menu__wrapper{
            .menu__title {
                &::after {
                    transform: rotateZ(0);
                }
            }
            ul {
                opacity: 1;
            }
        }
    }
}
</style>
