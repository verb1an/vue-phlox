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
                                <app-ui-btn @click="toggleMenu(false)" class="menu__btn_close">
                                    <app-ui-icon :icon="'i-close'"></app-ui-icon>
                                </app-ui-btn>
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
                    <app-ui-btn>Login</app-ui-btn>
                </div>

                <div class="search__btn_side">
                    <app-ui-btn name="search" @click="$emit('searchPopap:show')">
                        <app-ui-icon :icon="'i-search'"></app-ui-icon>
                    </app-ui-btn>
                </div>

                <div class="cart__btn_side" @mouseenter="showCartPopap = true" @mouseleave="showCartPopap = false">
                    <app-ui-btn name="cart" @click="$router.push('/cart/')">
                        <app-ui-icon :icon="'i-cart'"></app-ui-icon>
                    </app-ui-btn>

                    <app-popap :show="showCartPopap" class="cart__popap _fade-down" :stopScroll="false">
                        <template #media>
                            <div class="items__wrapper" v-if="cartItems.length">
                                <transition-group>
                                    <div
                                        v-for="item in cartItems"
                                        :key="item.id"
                                        class="item product"
                                        :data-product="item.id"
                                    >
                                        <div class="item__wrapper">
                                            <div class="item__media"><img :src="item.img" alt="product" /></div>
                                            <div class="item__header">
                                                <h3 class="item__header_name">{{ item.name }}</h3>
                                                <div class="quantity__price">
                                                    <app-ui-input-num v-model="item.quantity" :max="15" :min="1" />
                                                    <div class="price">
                                                        <span class="price__item price__curr_price"
                                                            >{{ item.price_current * item.quantity }}$</span
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item__buttons">
                                                <app-ui-btn :type="'button'" @click="removeItem">
                                                    <app-ui-icon :icon="'i-close'" :style="'font-size: 14px;'" />
                                                </app-ui-btn>
                                            </div>
                                        </div>
                                    </div>
                                </transition-group>
                            </div>
                            <div class="buttons" v-if="cartItems.length">
                                <app-ui-btn :design="'square-stroke'" @click="$router.push('/cart/')"> View Cart </app-ui-btn>
                                <app-ui-btn :design="'square-stroke'" :background="'gray'" :color="'white'">
                                    Proceed To Checkout
                                </app-ui-btn>
                            </div>
                            <div class="cart__empty" v-else>
                                <app-ui-icon :icon="'i-cart'" :style="'font-size: 32px; opacity: 0.7;'" />
                                <h3 class="title">
                                    Cart is empty
                                </h3>
                            </div>
                        </template>
                    </app-popap>
                </div>

                <div class="menu__btn_mobile">
                    <app-ui-btn @click="toggleMenu(true)" name="mobile-menu">
                        <div class="btn__menu_wrapper">
                            <span class="line"></span>
                            <span class="line"></span>
                            <span class="line"></span>
                        </div>
                    </app-ui-btn>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "app-header",
};
</script>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = new useRouter();
const store = useStore();

const deviceWidth = ref(window.innerWidth);
const showMenu = ref(false);
const currentUrlPath = ref("/");
const showCartPopap = ref(false);

const cartItems = computed(() => store.getters["appCart/GET_CART"]);
const removeItem = (event) => {
    const productId = event.target.closest(".product").getAttribute("data-product");
    store.dispatch("appCart/REMOVE_ITEM", productId);
};

const toggleMenu = (show = false) => {
    if (deviceWidth.value > 746) return;
    document.querySelector("html").classList.toggle("hidden");
    showMenu.value = show;
};

// <!-- Rerender for spec width -->
window.addEventListener("resize", () => {
    deviceWidth.value = window.innerWidth;
});

router.beforeEach((to, from, next) => {
    currentUrlPath.value = to.path.split("/")[1]; // <!-- ? [1] because, path start '/', after split first el is empty -->
    next();
});
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
        text-align: center;
        width: 6%;

        /* media */
        @media (max-width: 746px) {
            width: 10%;
        }
    }

    .cart__btn_side {
        position: relative;

        .cart__popap {
            width: 400px;
            top: 100%;
            bottom: 0;
            transform: translate(-85%, 0);
            padding-top: 15px;
            display: block;

            .items__wrapper {
                max-height: 300px;
                overflow: auto;
                border-bottom: 1px solid vars.$color-g-gray;
                margin-bottom: 10px;

                .item {
                    margin: 10px;
                    cursor: pointer;
                    transition: all 0.2s ease-in-out;
                    overflow: hidden;
                    height: 100px;

                    .item__wrapper {
                        display: flex;
                    }

                    .item__media {
                        flex: 0 0 25%;
                        width: 100px;
                        height: 100px;
                        background-color: vars.$color-g-gray;
                        border-radius: 8px;
                        overflow: hidden;
                        margin-right: 10px;

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }

                    .item__header {
                        flex: 0 0 65%;
                        padding: 5px 0;
                        text-align: left;
                        .item__header_name {
                            font-size: 500px;
                            font-size: 16px;
                            margin-bottom: 5px;
                        }

                        .quantity__price {
                            display: flex;
                            align-items: center;

                            .price {
                                padding: 0 10px;
                                .price__item {
                                    font-weight: 500;
                                    font-size: 15px;
                                }
                            }
                        }
                    }

                    .item__buttons {
                        display: flex;
                        align-items: center;
                        flex: 0 0 10%;
                    }

                    &:hover {
                        background-color: rgba(0, 0, 0, 0.05);
                    }

                    &.v-enter-active,
                    &.v-leave-active {
                        transition: all 0.3s ease-in-out;
                    }

                    &.v-enter-from,
                    &.v-leave-to {
                        opacity: 0;
                        height: 0;
                    }
                }
            }

            .buttons {
                padding: 20px;

                .app__button {
                    margin-bottom: 10px;
                }
            }

            .cart__empty {
                padding: 50px 0;
                .title {
                    color: vars.$color-app-bg-gray;
                }
            }
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
