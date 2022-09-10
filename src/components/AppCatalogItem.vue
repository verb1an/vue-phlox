<template>
    <article class="app_product_item component" :data-item="item.id">
        <div class="item__wrapper">
            <div class="item__media">
                <router-link :to="'/shop/' + item.id + '-' + item.name">
                    <img :src="item.img" alt="" />
                </router-link>
            </div>

            <div class="item__header">
                <div class="item__header_title">
                    <router-link :to="'/shop/' + item.id + '-' + item.name">
                        <h3>{{ item.name }}</h3>
                    </router-link>
                </div>

                <div class="item__header_prices">
                    <span v-if="item.sale > 0" class="header_prices_price header__prices_sale">{{
                        item.price_original
                    }}</span>
                    <span class="header_prices_price header__prices_current">{{ item.price_current }}</span>
                </div>
                <app-btn class="btn-catalog" :design="'static'" :background="'primary'" :color="'white'"
                    >Add To Cart</app-btn
                >
            </div>

            <span v-if="item.sale > 0" class="item__sale">{{ item.sale }}</span>
        </div>
    </article>
</template>

<script>
export default {
    name: "app-catalog-item",
};
</script>

<script setup>
defineProps({
    item: {
        type: Object,
        required: true,
    },
});
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
            border-radius: 25px;
            overflow: hidden;
            margin-bottom: 20px;
            img {
                width: 100%;
                height: auto;
            }

            @media (max-width: 1024px) {
                max-height: 360px;
            }
        }

        .item__header {
            position: relative;
            overflow: hidden;
            .item__header_title {
                font-size: 18px;
                font-weight: 500;
                margin-bottom: 10px;
                width: 100%;
            }

            .item__header_prices {
                transition: opacity 0.32s ease-in-out;
                .header__prices_sale {
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

                .header__prices_current {
                    font-size: 24px;
                    font-weight: 700;
                    padding: 10px 0;
                    color: vars.$color-g-text;
                }
            }

            .btn-catalog {
                position: absolute;
                bottom: 0;
                left: -100%;
                transition: all 0.32s ease-in-out;
                transform: scale(0.5);
            }

            .header_prices_price {
                &::before {
                    content: "$";
                }
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
                .item__header_prices {
                    opacity: 0;
                }
                .btn-catalog {
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
