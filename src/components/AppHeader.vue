<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <div class="logo__link">
                    <app-logo />
                </div>

                <transition name="toggle-menu">
                    <section v-show="deviceWidth > 746 || showMenu" class="header__menu_wrapper">
                        <nav class="header__menu">
                            <ul>
                                <app-btn @click="toggleMenu(false)" class="menu__btn_close">
                                    <app-icon :icon="'i-close'"></app-icon>
                                </app-btn>
                                <app-menu-link
                                    :class="currentUrlPath == '' ? 'current' : ''"
                                    :link="'/'"
                                    @click="toggleMenu()"
                                    >Home</app-menu-link
                                >
                                <app-menu-link
                                    :class="currentUrlPath == 'shop' ? 'current' : ''"
                                    :link="'/shop/'"
                                    @click="toggleMenu()"
                                    >Shop</app-menu-link
                                >
                                <app-menu-link
                                    :class="currentUrlPath == 'about-us' ? 'current' : ''"
                                    :link="'/about-us/'"
                                    @click="toggleMenu()"
                                    >About Us</app-menu-link
                                >
                                <app-menu-link
                                    :class="currentUrlPath == 'blog' ? 'current' : ''"
                                    :link="'/blog/'"
                                    @click="toggleMenu()"
                                    >Blog</app-menu-link
                                >
                                <app-menu-link
                                    :class="currentUrlPath == 'contact-us' ? 'current' : ''"
                                    :link="'/contact-us/'"
                                    @click="toggleMenu()"
                                    >Contact Us</app-menu-link
                                >
                            </ul>
                        </nav>
                    </section>
                </transition>

                <div class="user__menu">
                    <app-btn>Login</app-btn>
                </div>

                <div class="search__btn_side">
                    <app-btn name="search">
                        <app-icon :icon="'i-search'"></app-icon>
                    </app-btn>
                </div>

                <div class="cart__btn_side">
                    <app-btn name="cart">
                        <app-icon :icon="'i-cart'"></app-icon>
                    </app-btn>
                </div>

                <div class="menu__btn_mobile">
                    <app-btn @click="toggleMenu(true)" name="mobile-menu">
                        <div class="btn__menu_wrapper">
                            <span class="line"></span>
                            <span class="line"></span>
                            <span class="line"></span>
                        </div>
                    </app-btn>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "app-header"
};
</script>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = new useRouter();

const deviceWidth = ref(window.innerWidth);
const showMenu = ref(false);
const currentUrlPath = ref('/');

const toggleMenu = (show = false) => {
    showMenu.value = show;
};

// <!-- Rerender for spec width -->
window.addEventListener("resize", () => {
    deviceWidth.value = window.innerWidth;
});

router.beforeEach((to, from, next) => {
    currentUrlPath.value = to.path.split('/')[1]; // <!-- ? [1] because, path start '/', after split first el is empty -->
    next();
})
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.header {
    background-color: vars.$color-g-white;
    padding: 25px 0;

    .header__inner {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0 20px;
    }

    .logo__link {
        width: 22%;
    }

    .header__menu_wrapper {
        width: 100%;
        ul {
            padding: 0;
            list-style: none;
            display: flex;
            align-items: center;
            color: vars.$color-app-text-04;
            font-weight: 500;

            .menu__btn_close {
                display: none;
            }
        }

        /* media */
        @media (max-width: 746px) {
            position: fixed;
            width: 100%;
            height: 100%;
            background-color: vars.$color-g-white;
            top: 0;
            left: 0;
            z-index: 100;

            ul {
                flex-direction: column;
                justify-content: center;
                height: 100vh;

                .menu__btn_close {
                    display: block;
                    margin-bottom: 40px;
                }

                li {
                    margin-bottom: 20px;
                    font-size: 22px;
                }
            }
        }
        /* animation */
        &.toggle-menu-enter-active,
        &.toggle-menu-leave-active {
            transition: opacity 0.4s ease-in;
        }
        &.toggle-menu-enter-active {
            ul {
                transition: 0.3s linear;
            }
        }
        &.toggle-menu-leave-active {
            ul {
                transition: 0.2s linear;
            }
        }
        &.toggle-menu-enter-from,
        &.toggle-menu-leave-to {
            opacity: 0;

            ul {
                transform: scale(2);
                opacity: 0;
            }
        }
    }

    .user__menu {
        width: 12%;
        text-align: right;

        /* media */
        @media (max-width: 746px) {
            width: 100%;
        }
    }
    .search__btn_side,
    .cart__btn_side,
    .menu__btn_mobile {
        width: 4%;

        /* media */
        @media (max-width: 746px) {
            width: 10%;
        }
    }

    .menu__btn_mobile {
        display: none;
        .btn__menu_wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: end;
            width: 24px;
            height: 14px;
            margin: 15px 0;
            .line {
                display: block;
                width: 100%;
                background-color: vars.$color-app-text-08;
                height: 2px;

                &:nth-child(2) {
                    width: 80%;
                }
            }
        }

        /* media */
        @media (max-width: 746px) {
            display: block;
        }
    }
}
</style>
