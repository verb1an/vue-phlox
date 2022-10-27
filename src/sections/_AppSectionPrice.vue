<template>
    <div class="price" :style="style">
        <span v-if="sale > 0" class="price__item price__sale" :style="`font-size: ${styleOriginalPriceSize}px;`">{{ priceOriginal }}</span>
        <span class="price__item price__curr_price" :style="`font-size: ${styleCurrentPriceSize}px;`">{{ priceCurrent }}</span>
    </div>
</template>

<script>
export default {
    name: "app-section-price",
}
</script>
<script setup>
defineProps({
    priceOriginal: {type: Number, required: true},
    priceCurrent: {type: Number, required: true},
    sale: {type: Number, required: false, default: 0},
    style: String,
    styleOriginalPriceSize: Number,
    styleCurrentPriceSize: Number
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/vars';
.price {
    transition: opacity 0.32s ease-in-out;

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

        @media (max-width: 767px) {
            font-size: 18px;
        }
    }

    .price__curr_price {
        font-size: 24px;
        font-weight: 700;
        padding: 10px 0;
        color: vars.$color-g-text;

        @media (max-width: 767px) {
            font-size: 18px;
        }
    }
}
</style>