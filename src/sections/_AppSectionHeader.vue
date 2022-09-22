<template>
    <section class="app__section__header component">
        <div class="section__header">
            <h2 class="section__header_title">
                <slot name="title"></slot>
            </h2>
            <h3 class="section__header_subtitle">
                <span><slot name="subtitle"></slot></span>
            </h3>
            <div v-if="$slots.content" class="section__header_content">
                <slot name="content"></slot>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "app-section-header",
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/vars';
.app__section__header {
    width: 100%;
    margin-bottom: 20px;

    .section__header {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        .section__header_title {
            color: vars.$color-g-text;
            font-size: 45px;
            font-weight: 700;
            line-height: 1.5em;
            letter-spacing: -0.05em;
        }
        .section__header_subtitle {
            color: vars.$color-app-text-08;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5em;
        }

        .section__header_content {
            font-size: 16px;
            font-weight: 400;
            line-height: 2;
            max-width: 430px;
            margin: 20px 0;
        }
    }

    &.tal {
        .section__header {
            text-align: left;
            align-items: start;
        }
    }

    &.min {
        .section__header_title {
            font-size: 35px;
        }
    }

    &._page-headers {
        .section__header_title {
            font-size: 16px;
            color: vars.$color-g-primary;
        }
        .section__header_subtitle {
            font-size: 40px;
            font-weight: 700;
            color: vars.$color-g-text;
        }

        &._max-content {
            .section__header_content {
                margin: 40px 0;
                font-size: 1em;
                font-weight: 300;
                line-height: 1.8;
                color: vars.$color-g-text;
                max-width: 535px;
                margin-bottom: 40px;
            }
        }
    }
}
</style>
