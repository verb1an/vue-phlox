<template>
    <div class="app__advatages_item component">
        <div class="item__wrapper">
            <div class="item__media">
                <img :src="require(`@/assets/icons/advantages/${item.icon}.svg`)" alt="advantage" />
            </div>
            <div class="item__header">
                <h3 class="item__header_title">{{ item.title }}</h3>
                <div class="item__header_subtitle">
                    <p>{{ item.subtitle }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "app-advantages-item",
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
.app__advatages_item {
    .item__wrapper {
        display: flex;
        align-items: start;

        .item__media {
            margin-right: 20px;

            @media (max-width: 767px) {
                margin-right: 0;
                margin-bottom: 20px;
            }
        }

        .item__header {
            .item__header_title {
                font-size: 16px;
                font-weight: 700;
                line-height: 1.4;
                color: vars.$color-g-text;
                letter-spacing: -0.3px;

                @media (max-width: 767px) {
                    font-size: 14px;
                }
            }
            .item__header_subtitle {
                font-size: 15px;
                font-weight: 400;
                line-height: 1.4;
                color: vars.$color-app-text-04;
                letter-spacing: -0.5px;

                @media (max-width: 767px) {
                    font-size: 12px;
                }
            }
        }

        @media (max-width: 767px) {
            flex-direction: column;
            align-items: center;
            justify-content: start;
        }
    }

    @media (max-width: 767px) {
        width: 50%;
        margin-bottom: 50px;
    }
}
</style>
