<template>
    <section class="app__section__header component">
        <div class="section__header">
            <h2 class="section__header_title">
                <slot name="title"></slot>
            </h2>
            <h3 class="section__header_subtitle">
                <span><slot name="subtitle"></slot></span>
            </h3>
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
    }
}
</style>
