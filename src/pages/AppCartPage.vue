<template>
    <div class="section__content">
        <section class="section cart">
            <div class="content">
                <div class="content__row">
                    <div class="item product" v-for="item in cartItems" :key="item.id" :data-product="item.id">
                        <div class="item__media">
                            <router-link :to="`/shop/${item.id}-${item.name}/`">
                                <img :src="item.img" alt="product image" />
                            </router-link>
                        </div>
                        <div class="item__content">
                            <div class="item__header">
                                <h2 class="item__header_name">
                                    <router-link :to="`/shop/${item.id}-${item.name}/`">{{ item.name }}</router-link>
                                </h2>
                                <span class="item__header_artcile"></span>
                                <div class="price">
                                    <span v-if="item.sale > 0" class="price__item price__sale">{{
                                        item.price_original
                                    }}</span>
                                    <span class="price__item price__curr_price">{{ item.price_current }}</span>
                                </div>
                            </div>
                            <div class="item__buttons">
                                <app-ui-btn
                                    :type="'button'"
                                    :design="'static'"
                                    :hover="'primary'"
                                    :style="'font-weight: 400;'"
                                    >
                                    В избранное
                                </app-ui-btn >
                                <app-ui-btn
                                    :type="'button'"
                                    :design="'static'"
                                    :hover="'primary'"
                                    :style="'font-weight: 400;'"
                                    @click="removeItem"
                                >
                                    Удалить
                                </app-ui-btn>
                            </div>
                        </div>
                        <div class="item__quan">
                            <app-ui-input-num v-model="item.quantity" :max="9" :min="0" class="_app__input_text" />
                        </div>
                    </div>
                </div>
                <div class="content__row">
                    <div class="cart__empty">
                        <div class="title">
                            <app-ui-icon :icon="'i-cart'" :style="'font-size: 32px; opacity: 0.7;'" />
                            <h2>Your cart is currently empty.</h2>
                        </div>
                        <app-ui-btn :design="'fill-bgc'" :background="'primary'" :color="'white'" @click="$router.push('/shop/')">
                            Return to shop
                        </app-ui-btn>
                    </div>
                </div>
            </div>
        </section>
        <section v-if="cartItems.length" class="section total__amount">
            <div class="content">
                <div class="content__row">
                    <h2 class="title">Cart totals</h2>

                    <div class="cupon__activ">
                        <app-ui-input
                            :type="'text'"
                            :placeholder="'Apply coupon'"
                            class="_app__input_text"
                            :style="'font-weigth: 600;'"
                        />
                    </div>

                    <div class="total__amount_content">
                        <h3 class="subtitle">Total:</h3>
                        <div class="subtotal">
                            <div class="item__quantity">
                                <span>{{ itemsQuantity }}</span> Products
                            </div>
                            <div class="price">
                                <span class="total__sale">{{ totalSale }}$</span>
                                <span class="total__price">{{ totalPrice }}$</span>
                            </div>
                        </div>
                    </div>

                    <app-ui-btn :type="'submit'" :design="'fill-bgc'" :background="'primary'" :color="'white'">
                        Proceed to checkout
                    </app-ui-btn>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from 'vuex';

const store = useStore();
const cartItems = computed(() => store.getters["appCart/GET_CART"])

const itemsQuantity = computed(() => store.getters['appCart/GET_ITEMS_QUANTITY']);
const totalSale = computed(() => store.getters['appCart/GET_TOTAL_PRICE_WITHOUT_SALE']);
const totalPrice = computed(() => store.getters['appCart/GET_TOTAL_PRICE']);

const removeItem = (event) => {
    const productId = event.target.closest(".product").getAttribute('data-product');
    store.dispatch("appCart/REMOVE_ITEM", productId)
}

</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.section__content {
    display: flex;
    align-items: start;
}
.section.cart {
    flex: 0 0 80%;
    .content {
        .content__row {
            padding: 10px 50px;

            .item {
                position: relative;
                display: flex;
                align-items: start;
                padding: 25px 10px;
                transition: all .2s ease-in-out;

                .item__media {
                    width: 200px;
                    height: 200px;
                    margin-right: 40px;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }

                .item__content {
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    justify-content: space-between;
                    padding: 5px 0;
                    width: 30%;
                    height: 200px;
                    min-width: 200px;

                    .item__header_name {
                        margin-bottom: 20px;

                        a {
                            cursor: pointer;
                            font-size: 24px;
                            font-weight: 600;
                            color: vars.$color-app-text-08;
                            transition: all 0.2s ease-in-out;

                            &:hover {
                                color: vars.$color-g-primary;
                            }
                        }
                    }

                    .price {
                        .price__item {
                            &::before {
                                content: "$";
                            }
                        }

                        .price__sale {
                            position: relative;
                            font-size: 22px;
                            font-weight: 700;
                            color: vars.$color-app-text-04;
                            padding: 0 5px;
                            margin-right: 15px;
                            line-height: 40px;

                            &::after {
                                content: "";
                                position: absolute;
                                display: block;
                                top: 50%;
                                left: 0;
                                width: 100%;
                                height: 3px;
                                border-radius: 2px;
                                background-color: vars.$color-app-text-04;
                            }
                        }

                        .price__curr_price {
                            font-size: 24px;
                            font-weight: 700;
                            padding: 10px 0;
                            color: vars.$color-g-text;
                        }
                    }
                }

                .item__buttons {
                    flex: 0 0 20%;
                    display: flex;
                    align-items: center;
                }

                .item__quan {
                    padding: 2px;
                    border-radius: 8px;
                    border: 1px solid vars.$color-g-gray;
                }

                &::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    transform: translate(5%, 0);
                    width: 80%;
                    background: vars.$color-g-gray;
                    height: 1px;
                }

                &:hover {
                    background-color: rgba(0, 0, 0, .05);
                }
            }

            .cart__empty {
                display: flex;
                flex-direction: column;
                align-items: start;
                padding: 50px 0;

                .title {
                    display: flex;
                    align-items: center;
                    margin-bottom: 40px;

                    h2 {
                        font-size: 20px;
                        color: vars.$color-app-bg-gray;
                        font-weight: 600;
                        margin-left: 20px;
                    }
                    
                }
            }
        }
    }
}
.section.total__amount {
    position: relative;
    flex: 0 0 20%;
    padding: 20px;
    border: 1px solid vars.$color-g-gray;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

    .content {
        .content__row {
            .title {
                margin-bottom: 40px;
                font-size: 20px;
                font-weight: 600;
            }

            .cupon__activ {
                margin-bottom: 20px;
            }

            .subtitle {
                margin-bottom: 15px;
                font-weight: 600;
                color: vars.$color-app-text-08;
            }

            .subtotal {
                display: flex;
                align-items: flex-end;
                justify-content: space-between;

                .item__quantity {
                    font-size: 17px;
                    span {
                        font-weight: 500;
                    }
                }

                .price {
                    display: flex;
                    flex-direction: column;

                    .total__sale {
                        position: relative;
                        font-size: 15px;
                        font-weight: 400;
                        opacity: 0.8;
                        margin-bottom: 5px;

                        &::before {
                            content: "";
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            width: 100%;
                            height: 1px;
                            background-color: vars.$color-app-text-08;
                        }
                    }

                    .total__price {
                        font-size: 16px;
                        font-weight: 600;
                    }
                }
            }

            .app__button {
                width: 100%;
                margin: 40px 0;
            }
        }
    }
}
</style>
