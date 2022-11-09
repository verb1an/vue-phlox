<template>
    <article class="app_product_item component" :data-item="product.id">
        <div class="item__wrapper">
            <div class="item__media">
                <router-link :to="'/shop/product/' + product.article">
                    <img :src="product.img[0]" alt="product img" />
                </router-link>
            </div>

            <div class="item__header">
                <div class="item__header_title">
                    <router-link :to="'/shop/' + product.id + '-' + product.name">
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
                    @click="addNewProductToCart(propd)"
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

const propd = {
        id: 4,
        article: "ql4ieyn0",
        name: '"15.6" Ноутбук ASUS VivoBook 15 OLED K513EA-L13069 черный',
        description:
            "ASUS VivoBook 15 K513 – это яркий ноутбук, который добавит динамизма и стиля в твою повседневную жизнь. Конфигурация с процессором Intel Core i5 и видеокартой Intel Iris Xe Graphics обеспечит всю необходимую для дел вычислительную мощность, а для хранения файлов предлагется высокоскоростной твердотельный накопитель и дополнительный слот для установки традиционного жесткого диска большой емкости.",
        img: [
            "https://c.dns-shop.ru/thumb/st1/fit/500/500/b5f7ed7fb964a44c69b1eb9c0f3f0090/f31291747d686d67e8a0a2bbf0bea951454f0ab253fbbe53da70c97541ad5fec.jpg.webp",
            "https://c.dns-shop.ru/thumb/st4/fit/500/500/b1e5b63794bb5e9d28127126ae95fff1/d12c2e1121c5df4eaaea6d8076000fb789dd969ce9a4ffbeba8e3f9caa9f5111.jpg.webp",
            "https://c.dns-shop.ru/thumb/st4/fit/500/500/c431f15135e63b6b47509281fb0c695f/1abb89a95ba650a549bfdcf9a294842be87cdc98a5e90f22c1ca53342d6bbbf9.jpg.webp",
            "https://c.dns-shop.ru/thumb/st4/fit/500/500/6342c9318975200ad3508fb4028761a6/f7107856e8e5e625a8c05774d7c3f96130d95ac8bc5fbe7b9d4e0280347a6585.jpg.webp",
            "https://c.dns-shop.ru/thumb/st1/fit/500/500/ff1fa64c43f6bfb0d4bfc2a859d468e2/8b321ee8b9fd7215185a1f22f3c6a2212a3cda44c71142194f958f3f755b50de.jpg.webp",
            "https://c.dns-shop.ru/thumb/st4/fit/500/500/3202abdbdff530600fe38326e7542d80/2da195182830e1fa4e3cafd96cb973468ee3634fd01129fddd6d5f3722975131.jpg.webp",
            "https://c.dns-shop.ru/thumb/st4/fit/500/500/942077030e7d5c14fedbbcb4a854ca2f/7c66b3fa63184a8a1ef498de96ae5c672731cf49ad444f3a83c453491ae4b54b.jpg.webp",
            "https://c.dns-shop.ru/thumb/st1/fit/500/500/326a39027ad973aa7f26f50195f6bfe1/d28ffb8e7aacdfe32b4a46091cb75d5d4c1f0cf244811b461e3795e7ed42ef12.jpg.webp",
            "https://c.dns-shop.ru/thumb/st4/fit/500/500/c7ac1fee349576e5d49fb8636e144279/3564ddc9574fec64d9f02278d79830e5e4f22870b039da67eb45db50c295e3e6.jpg.webp",
            "https://c.dns-shop.ru/thumb/st1/fit/500/500/326b6813485b5349f7f36a08e9077352/25949f321aee7eacb60e5d19782cfbcecce96231c39f7abab221c76ecb89703d.jpg.webp",
            "https://c.dns-shop.ru/thumb/st1/fit/500/500/b6563bf2fb1356e16712162e9c84eb10/537351249d12ab5d312c7af1156a88ad29b417d226f294ce7dbf37e329d840e2.jpg.webp",
            "https://c.dns-shop.ru/thumb/st4/fit/500/500/2303e0b329d23914449987dfb9b28c8e/c7c56b434112f9205596401efa1848976207c7ef44e47766b021e49826badac5.jpg.webp",
            "https://c.dns-shop.ru/thumb/st1/fit/500/500/b1288946dabbc4346235b5c84fa39022/3f91a9ea4b5566796aeea536d87a20a93384a1a041e9fa25c276127bc4efe642.jpg.webp",
            "https://c.dns-shop.ru/thumb/st1/fit/500/500/db99bd021ce4f49ede4e0903207c39ac/73b1ea2ebff0a2096b5458340686ec41c757db16003ce75d57c17da655f647b8.jpg.webp",
            "https://c.dns-shop.ru/thumb/st4/fit/500/500/93cc1778198f08bec9713264fcf6aee0/bedeeb3668700fe6bc4f73bf8057057797cbf4a5408f1170210f5d2825988f94.jpg.webp",
        ],
        price_original: 1139,
        price_current: 1139,
        sale: 0,
        quantity: 1,
        rating: 4,
        reviews: 71,
        category: ["computers", "laptops"],
        breadcrumbs: ["computers", "laptops", '4-"15.6" Ноутбук ASUS VivoBook 15 OLED K513EA-L13069 черный'],
}

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
                font-size: 14px;
                font-weight: 500;
                margin-bottom: 10px;
                width: 100%;
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
