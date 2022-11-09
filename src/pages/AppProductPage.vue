<template>
    <section class="section product__page">
        <div class="content">
            <div class="content__row">
                <div class="product__media">
                    <app-section-slider :slides="product.img" />
                </div>
                <div class="product__content">
                    <div class="product__header">
                        <h2 class="product__header_name">{{ product.name }}</h2>
                        <div class="rating">
                            <app-ui-input-rating v-model="product.rating" />
                            <span>({{ product.reviewsCount }} customer review)</span>
                        </div>
                        <app-section-price
                            :priceOriginal="product.price_original"
                            :priceCurrent="product.price_current"
                            :sale="product.sale"
                            :styleOriginalPriceSize="28"
                            :styleCurrentPriceSize="30"
                        />
                    </div>
                    <div class="product__description">
                        <p>{{ product.description }}</p>
                    </div>
                    <div class="product__buttons">
                        <app-ui-input-num v-model="product.quantity" :min="1" :max="9" class="product__buttons_num" />
                        <app-ui-btn
                            :design="'fill-bgc'"
                            :background="'primary'"
                            :color="'white'"
                            @click="addNewProductToCart(product)"
                        >
                            Add to Cart
                        </app-ui-btn>
                    </div>
                    <div class="product__categories">
                        Category:
                        <router-link
                            v-for="item in product.category"
                            :key="item"
                            :to="`/shop/${item}/`"
                            class="category__link"
                        >
                            {{ item }}
                            <span v-if="product.category.length > 1">, </span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section product__specifications">
        <div class="tabs__controlls">
            <app-ui-btn
                class="tab__cont"
                :class="activeTab == 1 ? 'active' : ''"
                :data-tab-target="1"
                @click="switchTab"
                >Description</app-ui-btn
            >
            <app-ui-btn
                class="tab__cont"
                :class="activeTab == 2 ? 'active' : ''"
                :data-tab-target="2"
                @click="switchTab"
                >Technical Details</app-ui-btn
            >
            <app-ui-btn
                class="tab__cont"
                :class="activeTab == 3 ? 'active' : ''"
                :data-tab-target="3"
                @click="switchTab"
                >Reviews ({{ product.lastReviews.length }})</app-ui-btn
            >
        </div>
        <div class="tabs">
            <div class="tabs__wrapper" :style="`transform: translateX(${-100 * (activeTab - 1)}%)`">
                <div class="tab desc" :class="activeTab == 1 ? 'active' : ''" :data-tab="1">
                    <div class="content">
                        <h2 class="title">Description</h2>
                        <div class="content__row">
                            <p>
                                {{ product.description }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="tab spec" :class="activeTab == 2 ? 'active' : ''" :data-tab="2">
                    <div class="content">
                        <h2 class="title">Technical Details</h2>
                        <div class="content__row">
                            <div v-for="spec in product.technical" :key="spec.title" class="content__block">
                                <h3 class="title">{{ spec.title }}</h3>
                                <div v-for="line in spec.data" :key="line.name" class="line">
                                    <h4 class="name">{{ line.name }}</h4>
                                    <span class="content">{{ line.content }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab reviews" :class="activeTab == 3 ? 'active' : ''" :data-tab="3">
                    <div class="content">
                        <h2 class="title">Reviews ({{ product.lastReviews.length }})</h2>
                        <div class="content__row">
                            <div v-for="review in product.lastReviews" :key="review.id" class="reviews__item">
                                <div class="review__liked">
                                    <app-ui-input-num v-model="review.reviewsLiked" :wrapStyle="'flex-direction: column-reverse;'" :readonly="true" />
                                </div>
                                <div class="item__header">
                                    <div class="header__user">
                                        <img
                                            src="https://secure.gravatar.com/avatar/5d1041624d973286e770df22bb5d82fc?s=60&d=mm&r=g"
                                            alt="avatar"
                                        />
                                        <div class="user__info">
                                            <h3 class="name">
                                                {{ review.user.name }} - <span>{{ review.date_creation }}</span>
                                            </h3>
                                            <div class="text">{{ review.text }}</div>
                                        </div>
                                    </div>
                                    <app-ui-input-rating v-model="review.ratingByUser" :readonly="true" />
                                </div>
                            </div>
                            
                        </div>
                        <div class="content__row">
                            <div class="review__add">
                                <h2 class="title">Add your review</h2>
                                <h3 class="subtitle">Your email address will not be published. Required fields are marked *</h3>
                                <form action="#" class="form__add_review">
                                    <div style="width: 100%;">
                                        <label for="">Your rating *</label>
                                        <app-ui-input-rating />
                                    </div>
                                    <div style="width: 50%;">
                                        <label for="review__input_author_name">Name *</label>
                                        <app-ui-input :id="'review__input_author_name'" :wrapStyle="'border-radius: 25px;'" />
                                    </div>
                                    <div style="width: 50%;">
                                        <label for="review__input_author_mail">Email *</label>
                                        <app-ui-input :id="'review__input_author_mail'" :wrapStyle="'border-radius: 25px;'" />
                                    </div>
                                    <div  style="width: 100%;">
                                        <label for="review__input_text">Your review *</label>
                                        <app-ui-textarea :id="'review__input_text'" :wrapStyle="'border-radius: 25px;'" />
                                    </div>
                                    <app-ui-btn :design="'fill-bgc'" :background="'primary'" :color="'white'">Submit</app-ui-btn>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section related__products">
        <div class="content">
            <div class="content__row"></div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const product = ref({
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

    category: ["computers", "laptops"],
    technical: [
        {
            title: "Процессор",
            data: [
                { name: "Модель процессора", content: "Intel Core i5-1135G7" },
                { name: "Общее количество ядер", content: "4" },
                { name: "Количество производительных ядер", content: "4" },
                { name: "аксимальное число потоков", content: "8" },
                { name: "Частота процессора", content: "2.4 ГГц" },
                { name: "Автоматическое увеличение частоты", content: "4.2 ГГц" },
            ],
        },
        {
            title: "Экран",
            data: [
                { name: "Тип экрана", content: "OLED" },
                { name: "Диагональ экрана (дюйм)", content: '15.6"' },
                { name: "Разрешение экрана", content: "Full HD (1920x1080)" },
                { name: "Покрытие экрана", content: "глянцевое" },
                { name: "Сенсорный экран", content: "нет" },
                { name: "Максимальная частота обновления экрана", content: "60 Гц" },
                { name: "Яркость", content: "600 Кд/м²" },
                { name: "Плотность пикселей", content: "141 ppi" },
                { name: "Технология динамического обновления экрана", content: "нет" },
                { name: "Цветовой охват", content: "DCI-P3 100%" },
                { name: "HDR", content: "VESA DisplayHDR 600 True Black" },
            ],
        },
        {
            title: "Оперативная память",
            data: [
                { name: "Тип оперативной памяти", content: "DDR4" },
                { name: "Объем оперативной памяти", content: "16 ГБ" },
                { name: "Количество слотов под модули памяти", content: "интегрированная + 1 слот" },
                { name: "Частота оперативной памяти", content: "3200 МГц" },
                { name: "Максимальный объем памяти", content: "24 ГБ" },
                { name: "Свободные слоты для оперативной памяти", content: "нет" },
            ],
        },
        {
            title: "Графический ускоритель",
            data: [
                { name: "Вид графического ускорителя", content: "встроенный" },
                { name: "Модель встроенной видеокарты", content: "Intel Iris Xe Graphics" },
                { name: "Модель дискретной видеокарты", content: "нет" },
            ],
        },
        {
            title: "Накопители данных",
            data: [
                { name: "Общий объем твердотельных накопителей (SSD)", content: "512 ГБ" },
                { name: "Тип SSD диска", content: "M.2 PCIe" },
                { name: "Общий объем жестких дисков (HDD)", content: "нет" },
                { name: "Объем накопителя eMMC", content: "нет" },
            ],
        },
        {
            title: "Встроенное дополнительное оборудование",
            data: [
                { name: "Веб-камера", content: "1 Мп (720p)" },
                { name: "Встроенный микрофон", content: "есть" },
                { name: "Поддержка карт памяти кард-ридером", content: "microSD" },
                { name: "Оптический привод", content: "нет" },
            ],
        },
        {
            title: "Интернет/передача данных",
            data: [
                { name: "Беспроводной интерфейс", content: "WI-FI 6 (802.11ax), Bluetooth 5.0" },
                { name: "Порт Ethernet", content: "нет" },
            ],
        },
        {
            title: "Разъемы периферии",
            data: [
                { name: "Видеоразъемы", content: "HDMI" },
                { name: "Версия видеоразъема", content: "HDMI 1.4" },
                { name: "Аудиоразъемы", content: "3.5 мм jack (микрофон/аудио)" },
                { name: "Разъемы USB Type-A", content: "USB 3.2 Gen1, USB 2.0 x2" },
                { name: "Разъемы USB Type-C", content: "USB 3.2 Gen1" },
                { name: "Thunderbolt", content: "нет" },
                { name: "Дополнительные интерфейсы", content: "нет" },
            ],
        },
        {
            title: "Питание",
            data: [
                { name: "Поддержка USB Power Delivery", content: "нет" },
                { name: "Тип аккумулятора", content: "Li-Ion" },
                { name: "Емкость аккумулятора", content: "42 Вт*ч" },
                { name: "Выходная мощность адаптера питания", content: "65 Вт" },
            ],
        },
        {
            title: "Габариты, вес",
            data: [
                { name: "Глубина", content: "235 мм" },
                { name: "Ширина", content: "359 мм" },
                { name: "Толщина", content: "17.9 мм" },
                { name: "Вес", content: "1.8 кг" },
            ],
        },
    ],
    rating: 4,
    reviewCount: 71,
    lastReviews: [
        {
            id: 1,
            user: {
                name: "Paul",
                img: null,
            },
            date_creation: "October 7, 2019",
            text: "Hello",
            ratingByUser: 3,
            reviewsLiked: 8,
        },
        {
            id: 2,
            user: {
                name: "Paul",
                img: null,
            },
            date_creation: "October 7, 2019",
            text: "Hello",
            ratingByUser: 3,
            reviewsLiked: 8,
        },
    ],
});
const activeTab = ref(3);

const switchTab = (event) => {
    activeTab.value = event.target.closest(".tab__cont").getAttribute("data-tab-target");
};

const addNewProductToCart = (newProduct) => {
    store.dispatch("appCart/ADD_NEW_PRODUCT", newProduct);
};

onMounted(() => {
    document.title = product.value.name + " - Phlox Digital Shop";
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.product__page {
    .content {
        .content__row {
            display: flex;
            align-items: start;
            .product__media {
            }

            .product__content {
                padding: 40px 60px;

                .product__header_name {
                    font-size: 40px;
                    font-weight: 700;
                    color: vars.$color-g-text;
                    margin-bottom: 25px;
                }

                .rating {
                    display: flex;
                    align-items: center;
                    margin-bottom: 40px;

                    span {
                        font-size: 15px;
                        font-weight: 300;
                        color: vars.$color-app-text-08;
                        margin-left: 10px;
                    }
                }

                .product__description {
                    height: 137px;
                    max-width: 375px;
                    color: vars.$color-app-text-06;
                    font-size: 15px;
                    line-height: 1.3;
                    font-weight: 400;
                    overflow: hidden;
                    margin-top: 35px;
                }

                .product__buttons {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 50px;

                    .product__buttons_num {
                        background-color: rgba(0, 0, 0, 0.1);
                        border-radius: 25px;
                        padding: 5px;
                    }
                }

                .product__categories {
                    margin-top: 50px;
                    max-width: 375px;
                    line-height: 1.5;
                    .category__link {
                        color: vars.$color-g-primary;
                    }
                }
            }
        }
    }
}

.product__specifications {
    .tabs__controlls {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 50px 0;

        .ui__component {
            position: relative;
            margin: 0 20px;
            padding-bottom: 4px;

            &.active::before {
                content: "";
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translate(-50%, 0);
                height: 2px;
                width: 70%;
                background-color: vars.$color-g-primary;
            }
        }
    }

    .tabs {
        margin: 20px 100px;
        overflow: hidden;

        .tabs__wrapper {
            display: flex;
            transition: transform 0.5s ease-in-out;
        }

        .tab {
            width: 100%;
            flex-shrink: 0;
            height: 0;
            overflow: hidden;
            opacity: 0;
            transition: all 0.5s ease-in-out;

            .title {
                margin-bottom: 20px;
                font-size: 24px;
                font-weight: 600;
                color: vars.$color-g-text;
            }

            &.desc {
                .content__row p {
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 1.5;
                    letter-spacing: 1.02px;
                }
            }

            &.spec {
                .content__block {
                    margin-bottom: 60px;

                    .title {
                        margin-bottom: 20px;
                        font-size: 20px;
                    }
                    .line {
                        display: flex;
                        align-items: flex-start;
                        padding: 10px 0;
                        border-bottom: 1px solid vars.$color-app-text-04;
                        max-width: 500px;

                        .name {
                            font-size: 15px;
                            font-weight: 500;
                            color: vars.$color-app-text-08;
                            width: 300px;
                            margin-right: 20px;
                        }

                        .content {
                            font-size: 14px;
                            font-weight: 400;
                            color: vars.$color-g-text;
                        }
                    }
                }
            }

            &.reviews {
                .reviews__item {
                    display: flex;
                    align-items: flex-start;
                    width: 100%;
                    padding: 45px;
                    border-radius: 25px;
                    background-color: vars.$color-g-gray-light;
                    margin-bottom: 10px;

                    .review__liked {
                        width: 100px;
                        display: flex;
                        justify-content: start;
                    }

                    .item__header {
                        width: 100%;
                        display: flex;
                        align-items: flex-start;
                        justify-content: space-between;

                        .header__user {
                            display: flex;
                            align-items: start;
                            min-height: 100px;

                            img {
                                width: 60px;
                                height: 60px;
                                border-radius: 50%;
                                overflow: hidden;
                                object-fit: cover;
                                margin-right: 10px;
                            }

                            .user__info {
                                .name {
                                    color: vars.$color-app-text-08;
                                    font-size: 14px;
                                    letter-spacing: 1px;
                                    margin-bottom: 10px;

                                    span {
                                        font-weight: 400;
                                    }
                                }

                                .text  {
                                    font-size: 13px;
                                    font-weight: 400;
                                }
                            }
                        }
                    }
                }

                .review__add {
                    form {
                        display: flex;
                        flex-wrap: wrap;

                        div {
                            padding: 10px;

                            .app__input {
                                height: 72px;
                            }

                            .app__textarea {
                                height: 200px;
                            }

                            &:first-child {
                                display: flex;
                                align-items: center;
                            }
                        }
                    }
                }
            }

            &.active {
                height: 100%;
                opacity: 1;
            }
        }
    }

}
</style>
