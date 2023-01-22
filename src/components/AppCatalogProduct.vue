<template>
    <article class="app_product_item component" :data-item="product.id">
        <div class="item__wrapper">
            <div class="item__media">
                <router-link :to="'/shop/product/' + product.id + '-' + product.en_name">
                    <img :src="product.img[0]" alt="product img" />
                </router-link>
            </div>

            <div class="item__header">
                <div class="item__header_title">
                    <router-link :to="'/shop/product/' + product.id + '-' + product.en_name">
                        <h3>{{ product.name }}</h3>
                    </router-link>
                </div>

                <app-section-price 
                    :priceOriginal="product.price_original"
                    :priceCurrent="product.price_current"
                    :sale="product.sale"
                />

                <app-ui-btn
                    class="_btn-catalog"
                    :design="'static'"
                    :background="'primary'"
                    :color="'white'"
                    @click="addNewProductToCart(product)"
                >
                Add To Cart
                </app-ui-btn>
            </div>

            <span v-if="product.sale > 0" class="item__sale">{{ product.sale }}</span>
        </div>
    </article>
</template>

<script>
export default {
    name: "app-catalog-product",
};
</script>

<script setup>
import { useStore } from "vuex";
defineProps({
    product: {
        type: Object,
        required: true,
    },
});
const store = useStore();

const addNewProductToCart = (newProduct) => {
    store.dispatch("appCart/ADD_NEW_PRODUCT", newProduct);
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.app_product_item {
    padding: 5px 20px 25px 0;
    width: 25%;

    .item__wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;

        .item__media {
            width: 100%;
            max-height: 260px;
            height: 360px;
            border-radius: 25px;
            overflow: hidden;
            margin-bottom: 20px;

            a {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            img {
                width: 60%;
                margin: auto auto;
            }

            @media (max-width: 1024px) {
                max-height: 360px;
            }
        }

        .item__header {
            position: relative;
            overflow: hidden;
            .item__header_title {
                font-size: 14px;
                font-weight: 500;
                margin-bottom: 10px;
                width: 100%;
                min-height: 40px;
                h3 {color: vars.$color-app-text-08;}

                @media (max-width: 767px) {
                    font-size: 12px;
                }
            }

            ._btn-catalog {
                position: absolute;
                bottom: 0;
                left: -100%;
                transition: all 0.32s ease-in-out;
                transform: scale(0.5);
            }
        }

        .item__sale {
            position: absolute;
            top: 0;
            left: 0;
            margin: 15px;
            font-size: 18px;
            font-weight: 700;
            color: vars.$color-g-white;
            background-color: vars.$color-g-primary;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            &::before {
                content: "-";
            }
            &::after {
                content: "%";
            }
        }

        &:hover {
            .item__header {
                .price {
                    opacity: 0;
                }
                ._btn-catalog {
                    left: 0;
                    transform: scale(1);
                }
            }
        }
    }

    @media (max-width: 1024px) {
        width: 50%;
    }

    @media (max-width: 767px) {
        width: 65%;
        padding: 0;
        padding-bottom: 20px;
        margin-bottom: 40px;
    }

    @media (max-width: 525px) {
        width: 100%;
        padding: 0 10px 20px;
    }
}
</style>
