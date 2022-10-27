<template>
    <section class="section intro">
        <div class="content">
            <div class="intro__item">
                <div class="intro__item_header">
                    <span class="item_header_pre_title">{{ introProduct.pre_title }}</span>
                    <h2 class="item_header_title">{{ introProduct.title }}</h2>
                    <h3 class="item_header_subtitle">{{ introProduct.subtitle }}</h3>
                    <app-ui-btn
                        :design="'fill-circle'"
                        :background="'primary'"
                        :color="'white'"
                        :style="'padding: 16px 32px;'"
                        @click="$router.push(introProduct.link)"
                    >
                        Shop By Category
                    </app-ui-btn>
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
                        <app-ui-btn
                            :design="'fill-circle'"
                            :background="topicalButtons[item.id - 1].background"
                            :color="topicalButtons[item.id - 1].color"
                            @click="$router.push(item.link)"
                        >
                            Browse
                        </app-ui-btn>
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
                <app-s-fsitem class="fs-item fs-1" :style="'red'" :img="'assets/img/fsi-2.png'">
                    <template #sale>20% OFF</template>
                    <template #bg-title>FINE SMILE</template>
                    <template #bg-date>15 Nov To 7 Dec</template>
                    <template #pre-title>Beats Solo Air</template>
                    <template #title>Summer Sale</template>
                    <template #desc>Company that's grown from 270 to 480 employees in the last 12 months.</template>
                    <template #btn>
                        <app-ui-btn
                            @click="$router.push('/shop')"
                            :design="'fill-circle'"
                            :background="'white'"
                            :color="'primary'"
                            >Shop</app-ui-btn
                        >
                    </template>
                </app-s-fsitem>
            </div>
        </div>
    </section>

    <section class="section catalog">
        <app-section-header>
            <template #title> Best Seller Products </template>
            <template #subtitle>Speaker there are many variations passages </template>
        </app-section-header>
        <div class="content">
            <div class="content__row">
                <app-catalog-product v-for="product in catalog" :key="product.id" :product="product" />
            </div>
        </div>
    </section>

    <section class="section sale-2">
        <div class="content">
            <div class="content__row">
                <app-s-fsitem class="fs-item fs-2" :style="'green'" :img="'assets/img/fsi-3.png'">
                    <template #sale>20% OFF</template>
                    <template #bg-title>HAPPY<br />HOURSE</template>
                    <template #bg-date>15 Nov To 7 Dec</template>
                    <template #pre-title>Beats Solo Air</template>
                    <template #title>Summer Sale</template>
                    <template #desc>Company that's grown from 270 to 480 employees in the last 12 months.</template>
                    <template #btn>
                        <app-ui-btn
                            @click="$router.push('/shop')"
                            :design="'fill-circle'"
                            :background="'white'"
                            :color="'green'"
                            >Shop</app-ui-btn
                        >
                    </template>
                </app-s-fsitem>
            </div>
        </div>
    </section>

    <section class="section blog__posts">
        <app-section-header>
            <template #title>Recent News</template>
            <template #subtitle>There are many variations passages</template>
        </app-section-header>
        <app-s-blog :blogPosts="blogPosts" />
    </section>
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
                link: "/shop/headphones/",
            },
            catalog: [
                {
                    id: 4,
                    article: "ql4ieyn0",
                    name: "\"15.6\" Ноутбук ASUS VivoBook 15 OLED K513EA-L13069 черный",
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
                        "https://c.dns-shop.ru/thumb/st4/fit/500/500/93cc1778198f08bec9713264fcf6aee0/bedeeb3668700fe6bc4f73bf8057057797cbf4a5408f1170210f5d2825988f94.jpg.webp"
                    ],
                    price_original: 1139,
                    price_current: 1139,
                    sale: 0,
                    quantity: 1,
                    rating: 4,
                    reviews: 71,
                    category: ["computers", "laptops"],
                    breadcrumbs: ["computers", "laptops", "4-\"15.6\" Ноутбук ASUS VivoBook 15 OLED K513EA-L13069 черный"]
                },
                {
                    id: 4,
                    article: "ql4ieyn0",
                    name: "\"15.6\" Ноутбук ASUS VivoBook 15 OLED K513EA-L13069 черный",
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
                        "https://c.dns-shop.ru/thumb/st4/fit/500/500/93cc1778198f08bec9713264fcf6aee0/bedeeb3668700fe6bc4f73bf8057057797cbf4a5408f1170210f5d2825988f94.jpg.webp"
                    ],
                    price_original: 1139,
                    price_current: 1139,
                    sale: 0,
                    quantity: 1,
                    rating: 4,
                    reviews: 71,
                    category: ["computers", "laptops"],
                    breadcrumbs: ["computers", "laptops", "4-\"15.6\" Ноутбук ASUS VivoBook 15 OLED K513EA-L13069 черный"]
                },
                {
                    id: 4,
                    article: "ql4ieyn0",
                    name: "\"15.6\" Ноутбук ASUS VivoBook 15 OLED K513EA-L13069 черный",
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
                        "https://c.dns-shop.ru/thumb/st4/fit/500/500/93cc1778198f08bec9713264fcf6aee0/bedeeb3668700fe6bc4f73bf8057057797cbf4a5408f1170210f5d2825988f94.jpg.webp"
                    ],
                    price_original: 1139,
                    price_current: 1139,
                    sale: 0,
                    quantity: 1,
                    rating: 4,
                    reviews: 71,
                    category: ["computers", "laptops"],
                    breadcrumbs: ["computers", "laptops", "4-\"15.6\" Ноутбук ASUS VivoBook 15 OLED K513EA-L13069 черный"]
                },
                {
                    id: 4,
                    article: "ql4ieyn0",
                    name: "\"15.6\" Ноутбук ASUS VivoBook 15 OLED K513EA-L13069 черный",
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
                        "https://c.dns-shop.ru/thumb/st4/fit/500/500/93cc1778198f08bec9713264fcf6aee0/bedeeb3668700fe6bc4f73bf8057057797cbf4a5408f1170210f5d2825988f94.jpg.webp"
                    ],
                    price_original: 1139,
                    price_current: 1139,
                    sale: 0,
                    quantity: 1,
                    rating: 4,
                    reviews: 71,
                    category: ["computers", "laptops"],
                    breadcrumbs: ["computers", "laptops", "4-\"15.6\" Ноутбук ASUS VivoBook 15 OLED K513EA-L13069 черный"]
                }
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
<script setup>
import { onUpdated } from 'vue';
onUpdated(() => {
    console.log(123);
})
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
</style>
