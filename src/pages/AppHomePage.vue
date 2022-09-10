<template>
    <div class="main">
        <div class="container">
            <section class="section intro">
                <div class="content">
                    <div class="intro__item">
                        <div class="intro__item_header">
                            <span class="item_header_pre_title">{{ introProduct.pre_title }}</span>
                            <h2 class="item_header_title">{{ introProduct.title }}</h2>
                            <h3 class="item_header_subtitle">{{ introProduct.subtitle }}</h3>
                            <app-btn
                                :design="'fill-circle'"
                                :background="'primary'"
                                :color="'white'"
                                :style="'padding: 16px 32px;'"
                                @click="$router.push(introProduct.link)"
                            >
                                Shop By Category
                            </app-btn>
                        </div>
                        <div class="media__content">
                            <img :src="introProduct.img" alt="" />
                        </div>
                        <div class="item__content">
                            <h3 class="item__content_title">Description</h3>
                            <div class="item__content_desc">
                                <p>
                                    There are many variations passages of Lorem Ipsum available, but the majority have
                                    suffered alteration
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section topical__products">
                <div class="content">
                    <div class="content__row">
                        <app-topical-item v-for="item in topical" :key="item.id" :img="item.img">
                            <template #pre_title>{{ item.pre_title }}</template>
                            <template #title>{{ item.title }}</template>
                            <template #subtitle>{{ item.subtitle }}</template>
                            <template #btn>
                                <app-btn
                                    :design="'fill-circle'"
                                    :background="topicalButtons[item.id - 1].background"
                                    :color="topicalButtons[item.id - 1].color"
                                    @click="$router.push(item.link)"
                                >
                                    Browse
                                </app-btn>
                            </template>
                        </app-topical-item>
                    </div>
                </div>
            </section>

            <section class="section advantages">
                <div class="content">
                    <div class="content__row">
                        <app-advantages-item v-for="item in advantages" :key="item.id" :item="item" />
                    </div>
                </div>
            </section>

            <section class="section sale-1" >
                <div class="content">
                    <div class="content__row">
                        <app-fs-viewitem class="fs-item fs-1" :style="'red'" :img="'assets/img/fsi-2.png'">
                            <template #sale>20% OFF</template>
                            <template #bg-title>FINE SMILE</template>
                            <template #bg-date>15 Nov To 7 Dec</template>
                            <template #pre-title>Beats Solo Air</template>
                            <template #title>Summer Sale</template>
                            <template #desc>Company that's grown from 270 to 480 employees in the last 12 months.</template>
                            <template #btn>
                                <app-btn
                                    @click="$router.push('/shop')"
                                    :design="'fill-circle'"
                                    :background="'white'"
                                    :color="'primary'"
                                    >Shop</app-btn
                                >
                            </template>
                        </app-fs-viewitem>
                    </div>
                </div>
            </section>

            <section class="section catalog">
                <app-section-header>
                    <template #title> Best Seller Products </template>
                    <template #subtitle> speakerThere are many variations passages </template>
                </app-section-header>
                <div class="content">
                    <div class="content__row">
                        <app-catalog-item v-for="item in catalog" :key="item.id" :item="item" />
                    </div>
                </div>
            </section>

            <section class="section sale-2">
                <div class="content">
                    <div class="content__row">
                        <app-fs-viewitem class="fs-item fs-2" :style="'green'" :img="'assets/img/fsi-3.png'">
                            <template #sale>20% OFF</template>
                            <template #bg-title>HAPPY<br />HOURSE</template>
                            <template #bg-date>15 Nov To 7 Dec</template>
                            <template #pre-title>Beats Solo Air</template>
                            <template #title>Summer Sale</template>
                            <template #desc>Company that's grown from 270 to 480 employees in the last 12 months.</template>
                            <template #btn>
                                <app-btn
                                    @click="$router.push('/shop')"
                                    :design="'fill-circle'"
                                    :background="'white'"
                                    :color="'green'"
                                    >Shop</app-btn
                                >
                            </template>
                        </app-fs-viewitem>
                    </div>
                </div>
            </section>

            <section class="section blog__posts">
                <app-section-header>
                    <template #title>Recent News</template>
                    <template #subtitle>There are many variations passages</template>
                </app-section-header>
                <div class="content">
                    <div class="content__row">
                        <app-blog-item v-for="item in blogPosts" :key="item.id" :item="item"></app-blog-item>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            introProduct: {
                pre_title: "Beats Solo",
                title: "Wireless",
                subtitle: "Headphone",
                img: "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/Group_1271-1.png",
                link: "/shop/headphones",
            },
            catalog: [
                {
                    id: 1,
                    name: "Beats",
                    img: "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                    price_original: 995,
                    price_current: 995,
                    sale: 10,
                },
                {
                    id: 2,
                    name: "Beats",
                    img: "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                    price_original: 995,
                    price_current: 995,
                    sale: 10,
                },
                {
                    id: 3,
                    name: "Beats",
                    img: "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                    price_original: 995,
                    price_current: 995,
                    sale: 10,
                },
                {
                    id: 4,
                    name: "Beats",
                    img: "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                    price_original: 995,
                    price_current: 995,
                    sale: 10,
                },
                {
                    id: 5,
                    name: "Beats",
                    img: "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                    price_original: 995,
                    price_current: 995,
                    sale: 10,
                },
                {
                    id: 6,
                    name: "Beats",
                    img: "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                    price_original: 995,
                    price_current: 995,
                    sale: 10,
                },
                {
                    id: 7,
                    name: "Beats",
                    img: "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                    price_original: 995,
                    price_current: 995,
                    sale: 10,
                },
                {
                    id: 8,
                    name: "Beats",
                    img: "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                    price_original: 995,
                    price_current: 995,
                    sale: 10,
                },
            ],
            topical: [
                {
                    id: 1,
                    pre_title: "Enjoy",
                    title: "With",
                    subtitle: "earphone",
                    img: "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Mask-Group-5-1.png",
                    link: "/shop/category/earphone",
                },
                {
                    id: 2,
                    pre_title: "New",
                    title: "Wear",
                    subtitle: "gadgets",
                    img: "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/clay-apple-watch-mockup-07.png",
                    link: "/shop/category/smart-watch",
                },
                {
                    id: 3,
                    pre_title: "Trend",
                    title: "Devices",
                    subtitle: "laptop",
                    img: "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Laptop.png",
                    link: "/shop/category/laptops",
                },
                {
                    id: 4,
                    pre_title: "Best",
                    title: "Gaming",
                    subtitle: "console",
                    img: "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/NicePng_ps4-png_193822.png",
                    link: "/shop/category/consoles",
                },
                {
                    id: 5,
                    pre_title: "Play",
                    title: "Game",
                    subtitle: "oculus",
                    img: "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/man-wearing-virtual-reality-headset-at-home-D7AYCTV-2.png",
                    link: "/shop/brend/oculus",
                },
                {
                    id: 6,
                    pre_title: "New",
                    title: "Amazon",
                    subtitle: "speaker",
                    img: "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/P6YUXW1.png",
                    link: "/shop/category/speakers",
                },
            ],
            topicalButtons: [
                { background: "primary", color: "white" },
                { background: "white", color: "yellow" },
                { background: "white", color: "primary" },
                { background: "primary", color: "white" },
                { background: "white", color: "green" },
                { background: "white", color: "blue" },
            ],
            advantages: [
                {
                    id: 1,
                    title: "Free Shipping",
                    subtitle: "Free Shipping On All Order",
                    icon: "i-delivery",
                },
                {
                    id: 2,
                    title: "Money Guarantee",
                    subtitle: "30 Day Money Back",
                    icon: "i-quarantee",
                },
                {
                    id: 3,
                    title: "Online Support 24/7",
                    subtitle: "Technical Support 24/7",
                    icon: "i-onlinesupport",
                },
                {
                    id: 4,
                    title: "Secure Payment",
                    subtitle: "All Cards Accepted",
                    icon: "i-payment",
                },
            ],
            blogPosts: [
                {
                    id: 12,
                    alias: 'How-to-choose-perfect-gadgets',
                    title: "How to choose perfect gadgets",
                    img: "assets/img/blog/blog-main-img0012.jpg",
                    creation_date: "2019-10-05",
                    text: "When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s",
                    author: {
                        id: 1,
                        name: 'Paul'
                    },
                },
                {
                    id: 11,
                    alias: 'How-to-choose-perfect-gadgets',
                    title: "How to choose perfect gadgets",
                    img: "assets/img/blog/blog-main-img0011.jpg",
                    creation_date: "2019-10-05",
                    text: "When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s",
                    author: {
                        id: 1,
                        name: 'Paul'
                    },
                },
                {
                    id: 10,
                    alias: 'How-to-choose-perfect-gadgets',
                    title: "How to choose perfect gadgets",
                    img: "assets/img/blog/blog-main-img0010.jpg",
                    creation_date: "2019-10-05",
                    text: "When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s",
                    author: {
                        id: 1,
                        name: 'Paul'
                    },
                }
            ]
        };
    },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.section {
    margin-top: 190px;
}
.section.intro {
    margin-top: 0;
    .content {
        overflow: hidden;
        .intro__item {
            position: relative;
            background: linear-gradient(105deg, #dcdcdc 54%, #eee 68%);
            border-radius: 25px;
            height: 100vh;
            max-height: 1000px;
            padding: 15% 10% 10% 10%;

            display: flex;
            align-items: center;
            justify-content: start;

            .intro__item_header {
                .item_header_pre_title {
                    font-size: 30px;
                    font-weight: 500;
                    color: vars.$color-g-text;
                    line-height: 1.5;

                    /* media */
                    @media (max-width: 991px) {
                        font-size: 24px;
                    }
                    @media (max-width: 551px) {
                        font-size: 15px;
                        line-height: 1;
                    }
                }
                .item_header_title {
                    font-size: 80px;
                    font-weight: 700;
                    color: vars.$color-g-text;
                    line-height: 1.5;
                    letter-spacing: -0.05em;

                    /* media */
                    @media (max-width: 991px) {
                        font-size: 50px;
                    }
                    @media (max-width: 551px) {
                        font-size: 32px;
                        line-height: 1;
                    }
                }
                .item_header_subtitle {
                    font-size: 12vw;
                    text-transform: uppercase;
                    font-weight: 900;
                    line-height: 150px;
                    color: vars.$color-g-white;
                    margin-bottom: 20px;
                    margin-left: -10px;

                    /* media */
                    @media (max-width: 551px) {
                        font-size: 12vw;
                        line-height: 1.5;
                        margin-left: 0;
                    }
                }

                /* media */
                @media (max-width: 991px) {
                    padding: 5%;
                }
            }

            .media__content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                pointer-events: none;
                max-width: 1400px;
                width: 100%;

                img {
                    max-width: 100%;
                }

                /* media */
                @media (max-width: 1149px) {
                    left: 75%;
                }
            }

            .item__content {
                position: absolute;
                bottom: 0;
                right: 0;
                margin: 5%;
                text-align: right;
                font-size: 15px;
                line-height: 1.4;

                .item__content_title {
                    font-weight: 700;
                    color: vars.$color-g-text;
                }

                .item__content_desc {
                    font-weight: 400;
                    color: vars.$color-app-text-08;
                    max-width: 290px;
                    margin: 10px 0;
                }

                /* media */
                @media (max-width: 991px) {
                    display: none;
                }
            }

            /* media */
            @media (max-width: 991px) {
                padding: 10% 5%;
                height: auto;
            }
        }
    }
}
.section.topical__products {
    display: flex;
    align-items: start;
    margin-top: 25px;

    .content{
        width: 100%;
        .content__row {
            display: grid;
            column-gap: 40px;
            width: 100%;
            grid-template-columns: repeat(4, 1fr);

            @media (max-width: 1149px) {
                column-gap: 20px;
            }

            @media (max-width: 767px) {
                display: block;
            }
        }
    }
    
}
.section.advantages{
    margin-top: 25px;
    
    .content{
        padding-right: 50px;
        padding-left: 50px;
        .content__row{
            display: flex;
            justify-content: space-between;
            align-items: center;

            @media (max-width:767px) {
                flex-wrap: wrap;
            }
        }

        @media (max-width:767px) {
            padding-right: 5%;
            padding-left: 5%;
        }
    }

    @media (max-width: 1024px) {
        margin-top: 100px;
    }

    @media (max-width: 556px) {
        margin-top: 20px;
    }
}
.section.catalog {
    .content__row {
        padding: 25px 0;
        display: flex;
        flex-wrap: wrap;

        @media (max-width: 767px) {
            justify-content: center;
        }
    }
}
.section.blog__posts{
    .content{
        padding: 10px 0;
        .content__row{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
        }
    }
}
</style>
