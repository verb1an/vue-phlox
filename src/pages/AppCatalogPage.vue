<template>
    <app-s-breadcrumbs :breadcrumbs="breadcrumbs" />
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
                    <app-menu-catalog
                        :title="'Choose price'"
                        :menu="filters.price"
                        :multyMenu="true"
                        :queryType="'price'"
                        @filters:change="changeFilters"
                    >
                        <template #preContent>
                            <div class="custom__price">
                                <app-ui-input
                                    :type="'tel'"
                                    :placeholder="'from 0$'"
                                    :wrapStyle="'border-radius: 26px;'"
                                    data-custom-price-type="min"
                                    @update:modelValue="filters.price[0].setMin"
                                />
                                <app-ui-input
                                    :type="'tel'"
                                    :placeholder="'to 9999$'"
                                    :wrapStyle="'border-radius: 26px;'"
                                    data-custom-price-type="max"
                                    @update:modelValue="filters.price[0].setMax"
                                />
                            </div>
                        </template>
                        <template #content>
                            <app-ui-btn :design="'fill-bgc'" :background="'primary'" :color="'white'" @click="pushFilters('price')">Show</app-ui-btn>
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
                    <div v-if="!catalog.length" class="products__preloaders">
                        <div v-for="n in 12" :key="n" class="product__preloader">
                            <span class="prel__wrapper"></span>
                            <span class="prel__name"></span>
                            <span class="prel__price"></span>
                        </div>
                    </div>
                    <transition-group appear>
                        <app-catalog-product v-for="product in catalog" :key="product.id" :product="product" />
                    </transition-group>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from 'vuex';

const route = useRoute();
const router = useRouter();
const store = useStore();

const meta = {
    page: 1,
    totalArt: 10,
    limit: 9,
};

const defMenu = computed(() => store.getters['appCategory/GET_ALL_CATEGORY']);
defMenu.value.forEach((el) => el.path = '/shop/' + el.title.replaceAll(" ", "-") + '/' )

const filters = ref({
    category: store.getters["appCategory/GET_CATEGORY_BYTITLE"](route.path.split("/").at(-2)),
    price: [
        {
            title: "",
            path: "0-0",
            doubt: false,
            hide: true,
            setMin(val) {
                filters.value.price[0].path = `${val}-${filters.value.price[0].path.split("-")[1]}`;
                filters.value.price.forEach((el) => el.doubt = false);
                changeFilters({queryType: "price", index: 0, value: true})
            },
            setMax(val) {
                filters.value.price[0].path = `${filters.value.price[0].path.split("-")[0]}-${val}`;
                filters.value.price.forEach((el) => el.doubt = false);
                changeFilters({queryType: "price", index: 0, value: true})
            }
        },
        {
            title: "0 - 199$",
            path: "0-199",
            doubt: false,
        },
        {
            title: "200 - 499$",
            path: "200-499",
            doubt: false,
        },
        {
            title: "500 - 1999$",
            path: "500-1999",
            doubt: false,
        },
    ],
});

// Catalog
const catalog = ref([]);

const getProducts = () => {
    setTimeout(() => {
        catalog.value = store.getters['appCatalog/GET_CATALOG_BYPAGE'](filters.value, meta.page, meta.limit);
    }, 2000);
}

const breadcrumbs = [
    {
        title: "Product",
        path: "/shop/"
    }
]

// Filters 


const changeFilters = (newFilterValue) => {
    filters.value[newFilterValue.queryType][newFilterValue.index].doubt = newFilterValue.value;
};

const setFilters = () => {
    const routeFilter = route.query;
    for (let key in routeFilter) {
        const subRouteFilters = routeFilter[key].split(",");
        subRouteFilters.forEach((el) => {
            filters.value[key].forEach((targetEl) => {
                if (el === targetEl.path) {
                    targetEl.doubt = true;
                } else {
                    targetEl.doubt = false;
                }
            });
        });
    }
};

const pushFilters = (type) => {
    let filterToQuery = "";
    filters.value[type].forEach((el) => {
        if (el.doubt) {
            if (filterToQuery.length) filterToQuery += ",";
            filterToQuery += el.path;
        }
    });

    let wrapperQuery = new Object();
    wrapperQuery[type] = filterToQuery;
    router.push({ query: wrapperQuery });
};

router.beforeEach((to, from, next) => {
    filters.value.category = store.getters["appCategory/GET_CATEGORY_BYTITLE"](to.path.split("/").at(-2)) ?? null;
    getProducts();
    next();
})

onMounted(() => {
    setFilters();
    getProducts();
});
</script>

<style lang="scss" scoped>
@use '@/assets/scss/vars';
.section__content {
    display: flex;
    align-items: start;

    @media (max-width: 991px) {
        flex-direction: column;
    }
}
.section.filters {
    width: 300px;
    .content {
        margin-top: 10px;
        width: 100%;
        max-width: 300px;
        min-width: 300px;
        .content__row {
            margin-bottom: 30px;

            .custom__price {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .app__input {
                    width: 45%;
                    height: 44px;
                }
            }

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
    width: 100%;
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

                &.v-enter-active,
                &.v-leave-active {
                    transition: all 0.3s ease-in-out;
                }

                &.v-enter-from,
                &.v-leave-to {
                    opacity: 0;
                }
            }

            .products__preloaders {
                display: flex;
                align-items: start;
                justify-content: space-between;
                flex-wrap: wrap;
                width: 100%;

                .product__preloader {
                    flex: 0 0 33%;
                    padding: 5px 20px 25px 0;

                    span {
                        position: relative;
                        display: block;
                        background-color: vars.$color-g-secondary;
                        border-radius: 25px;
                        width: 100%;
                        margin-bottom: 10px;
                        overflow: hidden;

                        &.prel__wrapper {
                            height: 260px;
                        }

                        &.prel__name {
                            height: 30px;
                            &::before {
                                left: -200%;
                            }
                        }

                        &.prel__price {
                            height: 30px;
                            max-width: 40%;
                        }

                        &::before {
                            content: '';
                            position: absolute;
                            width: 50px;
                            height: 800px;
                            background-color: rgb(255, 255, 255, .05);
                            transform: translate(-50%, -50%) rotateZ(20deg);
                            top: 50%;
                            left: -150%;
                            animation-name: load;
                            animation-duration: 2s;
                            animation-delay: .4s;
                            animation-iteration-count: infinite;
                        }

                        @keyframes load {
                            100%{
                                left: 150%;
                            }
                        }
                    }

                    

                    @media (max-width: 1149px) {
                        flex: 0 0 50%;
                    }

                    @media (max-width: 767px) {
                        flex: 0 0 100%;
                    }
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
