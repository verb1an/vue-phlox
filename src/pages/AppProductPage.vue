<template>
    <section class="section product__page">
        <div class="content">
            <div class="content__row">
                <div class="product__preloader">
                    <span class="prel__media"></span>
                    <div class="info__preloader">
                        <span class="prel__name"></span>
                        <span class="prel__rating"></span>
                        <span class="prel__price"></span>
                        <div class="buttons__preloader">
                            <span class="prel__count"></span>
                            <span class="prel__buy"></span>
                        </div>
                    </div>
                </div>
                <div class="product__media">
                    <swiper>
                        <swiper-slide v-for="img in product.img" :key="img">
                            <div class="media__item">
                                <img :src="img" alt="product" />
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="product__content">
                    <div class="product__header">
                        <h2 class="product__header_name">{{ product.name }}</h2>
                        <div class="rating">
                            <app-ui-input-rating v-model="product.rating" />
                            <span>({{ product.reviewsCount ?? 0 }} customer review)</span>
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
                            :to="`/shop/${$store.getters[`appCategory/GET_CATEGORY`](item).title}/`"
                            class="category__link"
                        >
                            <span v-if="item !== product.category[0]">, </span>
                            <span class="name">{{ $store.getters[`appCategory/GET_CATEGORY`](item).title }}</span>
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
                                    <app-ui-input-num
                                        v-model="review.reviewsLiked"
                                        :wrapStyle="'flex-direction: column-reverse;'"
                                        :readonly="true"
                                    />
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
                                <h3 class="subtitle">
                                    Your email address will not be published. Required fields are marked *
                                </h3>
                                <form action="#" class="form__add_review">
                                    <div class="form__input_label">
                                        <label for="">Your rating *</label>
                                        <app-ui-input-rating />
                                    </div>
                                    <div class="form__input_label">
                                        <label for="review__input_author_name">Name *</label>
                                        <app-ui-input
                                            :id="'review__input_author_name'"
                                            :wrapStyle="'border-radius: 25px;'"
                                        />
                                    </div>
                                    <div class="form__input_label">
                                        <label for="review__input_author_mail">Email *</label>
                                        <app-ui-input
                                            :id="'review__input_author_mail'"
                                            :wrapStyle="'border-radius: 25px;'"
                                        />
                                    </div>
                                    <div class="form__input_label">
                                        <label for="review__input_text">Your review *</label>
                                        <app-ui-textarea
                                            :id="'review__input_text'"
                                            :wrapStyle="'border-radius: 25px;'"
                                        />
                                    </div>
                                    <app-ui-btn :design="'fill-bgc'" :background="'primary'" :color="'white'"
                                        >Submit</app-ui-btn
                                    >
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
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from 'vue-router'
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const route = useRoute();
const store = useStore();

const productId = route.params.article.split('-')[0];
const product = computed(() => store.getters['appCatalog/GET_PRODUCT_BYID'](Number(productId)));

const activeTab = ref(1);

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
                width: 60%;
                height: 100%;
                overflow: hidden;

                .media__item {
                    width: 100%;
                    height: 100%;
                    min-height: 600px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: vars.$color-g-gray-light;
                    border-radius: 25px;

                    img {
                        height: 100%;

                        @media (max-width: 767px) {
                            width: 100%;
                        }
                    }

                    @media (max-width: 767px) {
                        min-height: 440px;
                    }
                }

                @media (max-width: 991px) {
                    width: 100%;
                }

                @media (max-width: 767px) {
                    max-height: 600px;
                    margin-bottom: 40px;
                }
            }

            .product__content {
                padding: 40px 60px;

                .product__header_name {
                    font-size: 40px;
                    font-weight: 700;
                    color: vars.$color-g-text;
                    margin-bottom: 25px;

                    @media (max-width: 767px) {
                        font-size: 24px;
                    }
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

                        span.name {
                            text-transform: capitalize;
                        }
                    }
                }

                @media (max-width: 767px) {
                    padding: 20px 5%;
                }
            }

            @media (max-width: 991px) {
                flex-direction: column;
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
                            text-align: right;
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

                                .text {
                                    font-size: 13px;
                                    font-weight: 400;
                                }
                            }
                        }

                        @media (max-width: 767px) {
                            flex-direction: column;
                        }
                    }

                    @media (max-width: 767px) {
                        padding: 25px 15px;
                    }
                }

                .review__add {
                    form {
                        display: flex;
                        flex-wrap: wrap;

                        .form__input_label {
                            padding: 10px;

                            .app__input {
                                height: 72px;
                                width: 100%;
                            }

                            .app__textarea {
                                height: 200px;
                                width: 100%;
                            }

                            &:nth-child(1) {
                                display: flex;
                                align-items: center;
                                width: 100%;
                            }
                            &:nth-child(2),
                            &:nth-child(3) {
                                width: 50%;

                                @media (max-width: 767px) {
                                    width: 100%;
                                }
                            }
                            &:nth-child(4) {
                                width: 100%;
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

        @media (max-width: 767px) {
            margin: 20px 5%;
        }
    }
}
</style>
