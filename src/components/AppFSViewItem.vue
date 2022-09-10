<template>
    <div class="app__fs_viewitem" :class="style">
        <div class="item__wrapper">
            <div class="left__col">
                <div class="item__content">
                    <div class="item__backdrop">
                        <h3 class="item__backdrop_sale"><slot name="sale"></slot></h3>
                        <h2 class="item__backdrop_title"><slot name="bg-title"></slot></h2>
                        <h3 class="item__backdrop_date"><slot name="bg-date"></slot></h3>
                    </div>
                </div>
            </div>

            <div class="right__col">
                <div class="item__header">
                    <div class="item__header_top">
                        <h3 class="item__header_suptitle"><slot name="pre-title"></slot></h3>
                        <h2 class="item__header_title"><slot name="title"></slot></h2>
                        <div class="item__header_desc">
                            <p><slot name="desc"></slot></p>
                        </div>
                    </div>
                    <div class="item__header_bottom">
                        <slot name="btn"></slot>
                    </div>
                </div>
            </div>

            <div class="item__media">
                <div class="item__media_wrapper">
                    <img :src="require(`@/${img}`)" alt="full screen image headphone" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "app-fs-viewitem",
};
</script>

<script setup>
defineProps({
    style: {
        type: String,
        default: "red",
    },
    img: {
        type: String,
        required: true
    }
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.app__fs_viewitem {
    .item__wrapper {
        position: relative;
        padding: 10px;
        display: flex;
        align-items: center;
        color: vars.$color-g-white;

        .left__col {
            width: 64%;
            position: relative;
            padding: 7% 4% 4% 9%;

            @media (max-width: 1024px) {
                padding: 0 0 0 5%;
            }

            @media (max-width: 1024px) {
                padding: 0;
            }
        }

        .right__col {
            width: 36%;
            z-index: 10;

            @media (max-width: 767px) {
                width: 100%;
            }
        }

        @media (max-width: 767px) {
            flex-direction: column;
            text-align: center;
            padding: 120px 0 15% 0;
        }
    }

    .item__content {
        .item__backdrop {
            display: flex;
            flex-direction: column;
            align-items: start;
            padding: 9% 4% 5% 16%;

            margin: 0;

            .item__backdrop_sale {
                font-size: 16px;
                font-weight: 400;
                text-transform: uppercase;

                @media (max-width: 1024px) {
                    font-size: 14px;
                }
            }

            .item__backdrop_title {
                font-size: 96px;
                font-weight: 900;
                letter-spacing: -4px;
                line-height: 1;
                text-transform: uppercase;
                max-width: 350px;

                @media (max-width: 1024px) {
                    font-size: 75px;
                }

                @media (max-width: 767px) {
                    font-size: 49px;
                    max-width: 100%;
                    min-width: 300px;
                    margin: 30px 0;
                }
            }

            .item__backdrop_date {
                font-size: 16px;
                font-weight: 400;
                text-transform: uppercase;

                @media (max-width: 1024px) {
                    font-size: 14px;
                }
            }

            @media (max-width: 1024px) {
                padding: 0;
            }

            @media (max-width: 767px) {
                align-items: center;
            }
        }
    }

    .item__header {
        .item__header_top {
            margin-bottom: 40px;

            .item__header_suptitle {
                font-size: 16px;
                font-weight: 500;
                margin-bottom: 15px;

                @media (max-width: 1024px) {
                    font-size: 14px;
                    margin-bottom: 3px;
                }
            }

            .item__header_title {
                font-size: 48px;
                font-weight: 700;
                margin-bottom: 30px;

                @media (max-width: 1024px) {
                    font-size: 33px;
                    margin-bottom: 0;
                }

                @media (max-width: 767px) {
                    margin: 10px 0;
                }
            }

            .item__header_desc {
                font-size: 15px;
                max-width: 60%;
                line-height: 1.8;

                @media (max-width: 1024px) {
                    font-size: 12px;
                    font-weight: 300;
                    max-width: 100%;
                }
            }
        }

        @media (max-width: 1024px) {
            padding: 15% 6%;
        }

        @media (max-width: 767px) {
            padding: 10% 6% 0;
        }
    }

    .item__media {
        position: absolute;
        bottom: 0;
        left: 0;
        pointer-events: none;
        width: 100%;
        height: 100%;

        .item__media_wrapper {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-60%, -50%);
            width: 100%;
            max-width: 1120px;

            @media (max-width: 1475px) {
                max-width: 1000px;
            }

            @media (max-width: 1275px) {
                max-width: 900px;
            }

            @media (max-width: 1024px) {
                max-width: 850px;
                transform: translate(-60%, -70%);
            }

            @media (max-width: 767px) {
                max-width: 100%;
                top: 0;
                transform: translate(-47%, -50%);
            }
        }

        img{
            width: 100%;
        }
    }

    // <!-- Stylies for section  -->
    &.red .item__wrapper {
        border-radius: 25px;
        background-image: radial-gradient(at center center, #f24c55 0%, #f42c37 40%);
    }
    &.green .item__wrapper {
        border-radius: 25px;
        background-image: radial-gradient(at top center, #51ec90 10%, #2dcc6e 46%);
    }
}
</style>
