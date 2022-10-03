<template>
    <div class="section__content">
        <section class="section filters">
            <div class="content">
                <!-- ? Search block -->
                <div class="content__row">
                    <form action="#">
                        <app-ui-input :type="'text'" :placeholder="'Search Here'" class="_app__input_text">
                            <template #btn>
                                <app-ui-btn
                                    :type="'submit'"
                                    :design="'fill-circle'"
                                    :background="'primary'"
                                    :color="'white'"
                                    :style="'padding: 10px 12px;'"
                                >
                                    <app-ui-icon :icon="'i-search'" :style="'font-size: 14px;'" />
                                </app-ui-btn>
                            </template>
                        </app-ui-input>
                    </form>
                </div> 
                <div class="content__row">
                    <app-menu-catalog :title="'Product categories'" :menu="defMenu" />
                </div>
                <div class="content__row">
                    <app-menu-catalog :title="'Choose price'">
                        <template #content>
                            <!-- ! Need final -->
                            <!-- <app-ui-input-range /> -->
                        </template>
                    </app-menu-catalog>
                </div>
            </div>
        </section>

        <section class="section catalog">
            <app-section-header class="tal min">
                <template #title>Shop</template>
                <template #subtitle>
                    {{
                        `Showing ${meta.limit * meta.page - meta.limit + 1}
                        -${meta.limit * meta.page} 
                        of ${meta.totalArt} results`
                    }}</template
                >
            </app-section-header>
            <div class="content">
                <div class="content__row">
                    <app-catalog-item v-for="item in catalog" :key="item.id" :item="item" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// const catalog = [];
const meta = {
    page: 1,
    totalArt: 10,
    limit: 9,
};

const defMenu = [
    {
        title: "Earphones",
        path: "/shop/earphone/",
    },
    {
        title: "Gadgets",
        path: "/shop/gadgets/",
    },
    {
        title: "Gaming",
        path: "/shop/gaming/",
    },
    {
        title: "Headphone",
        path: "/shop/headphone/",
    },
    {
        title: "Laptop",
        path: "/shop/laptop/",
    },
    {
        title: "Speaker",
        path: "/shop/speaker/",
    },
    {
        title: "Uncategorized",
        path: "/shop/uncategorized/",
    },
];
const catalog = [
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
];
</script>

<style lang="scss" scoped>
.section__content {
    display: flex;
    align-items: start;

    @media (max-width: 991px) {
        flex-direction: column;
    }
}
.section.filters {
    width: 100%;
    .content {
        margin-top: 10px;
        width: 100%;
        max-width: 300px;
        min-width: 300px;
        .content__row {
            margin-bottom: 30px;

            @media (max-width: 991px) {
                flex: 0 0 100%;
            }
        }

        @media (max-width: 991px) {
            max-width: 100%;
        }
    }
}
.section.catalog {
    margin-left: 80px;

    .content {
        .content__row {
            display: flex;
            align-items: start;
            flex-wrap: wrap;

            .app_product_item {
                flex: 0 0 33%;

                @media (max-width: 1149px) {
                    flex: 0 0 50%;
                }

                @media (max-width: 767px) {
                    flex: 0 0 100%;
                }
            }

            @media (max-width: 767px) {
                padding: 0 10%;
            }
        }
    }

    @media (max-width: 991px) {
        margin-left: 0;
    }
}
</style>
