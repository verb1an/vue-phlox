<template>
    <div class="section__content">
        <section class="section about">
            <div class="content">
                <div class="content__col left">
                    <app-section-header class="tal _page-headers _max-content">
                        <template #title>Welcome To Phlox</template>
                        <template #subtitle>Who We Are ?</template>
                        <template #content>
                            <p style="line-height: 1.5; max-width: 535px;">When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray</p>
                            <p style="line-height: 1.5; max-width: 535px;">gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me . when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence.</p>
                        </template>
                    </app-section-header>
                    <!-- <div class="about__header">
                        <h2 class="about__title">Who We Are ?</h2>
                    </div>
                    <div class="about__content">
                        <p>When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray</p>
                        <p>gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me . when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence.</p>
                    </div> -->
                    <app-ui-btn
                        :type="'button'"
                        :design="'fill-circle'"
                        :background="'primary'"
                        :color="'white'"
                        :style="'padding: 17px 60px;'"
                        @click="$router.push('/contact-us/')"
                    >Contact Us</app-ui-btn>
                </div>
                <div class="content__col right">
                    <div class="media__content">
                        <img src="@/assets/img/about/main-about.jpg" alt="">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use '@/assets/scss/vars';
.section.about {
    padding: 7% 2% 6%;
    .content {
        display: flex;
        align-items: start;
        padding: 0 20px;
        .content__col {
            flex: 0 0 50%;

            .about__header {
                .about__pre_title {
                    font-size: 16px;
                    font-weight: 500;
                    color: vars.$color-g-primary;
                    line-height: 1.5;
                    letter-spacing: -0.5px;
                    margin-bottom: 9px;
                }
                .about__title {
                    font-size: 2.8em;
                    font-weight: 700;
                    line-height: 1.5;
                    letter-spacing: -1.5px;
                    color: vars.$color-g-text;
                    margin: 4px 0 33px;

                    @media (max-width: 767px) {
                        font-size: 2em;
                    }
                }
            }

            .media__content {
                box-shadow: 0px 10px 50px 0px #d1d5df;
                border-radius: 25px;
                overflow: hidden;
                width: 100%;
                height: 570px;
                margin-left: 20px;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                @media (max-width: 1149px) {
                    height: 400px;
                }

                @media (max-width: 767px) {
                    margin-bottom: 40px;
                    margin-left: 0;
                    height: 300px;
                }
            }

            @media (max-width: 767px) {
                flex: 0 0 100%;
                width: 100%;
            }
        }

        @media (max-width: 767px) {
            flex-direction: column-reverse;
            align-items: center;
        }
    }
}
</style>