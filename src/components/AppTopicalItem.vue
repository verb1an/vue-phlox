<template>
    <article class="app__topical_product component">
        <div class="item__wrapper">
            <div class="media__content">
                <img :src="img" class="img" alt="top product" />
            </div>
            <div class="item__content">
                <span class="item__content_pre_title"><slot name="pre_title"></slot></span>
                <h2 class="item__content_title"><slot name="title"></slot></h2>
                <h3 class="item__content_subtitle"><slot name="subtitle"></slot></h3>
            </div>
            <div class="item__buttons">
                <slot name="btn"></slot>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: "app-topical-item",
};
</script>

<script setup>
defineProps({
    img: { type: String, required: true },
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.app__topical_product {
    color: vars.$color-g-white;
    height: 390px;
    margin-bottom: 25px;

    .item__wrapper {
        position: relative;
        border-radius: 25px;
        padding: 20% 10%;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: end;
        flex-direction: column;
        transition: 0.36s ease-in-out;

        .media__content {
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            z-index: 10;
            pointer-events: none;
            width: 100%;
            height: 100%;
            z-index: 1;

            img {
                position: absolute;
                height: auto;
                max-width: 100%;
                width: 370px;
            }
        }

        .item__content {
            .item__content_pre_title {
                font-size: 16px;
                margin-bottom: 20px;
            }
            .item__content_title {
                font-size: 30px;
                font-weight: 600;
                line-height: 1.5;
            }
            .item__content_subtitle {
                font-size: 44px;
                font-weight: 900;
                line-height: 1.5;
                letter-spacing: -1.3px;
                text-transform: uppercase;
                color: vars.$color-g-white;
                opacity: 0.2;

                @media (max-width: 1149px) {
                    font-size: 3.1vw;
                }

                @media (max-width: 767px) {
                    font-size: 42px;
                }
            }
        }

        .item__buttons {
            position: relative;
            z-index: 5;
        }

        @media (max-width: 767px) {
            padding: 10%;
        }
    }

    &:nth-child(1) {
        grid-area: 1 / 1 / 2 / 2;
        .item__wrapper {
            background: linear-gradient(300deg, #363636 13%, #222 38%);
            justify-content: end;
            .media__content {
                img {
                    right: 0;
                    bottom: 0;
                }
            }

            &:hover {
                box-shadow: 0px 20px 40px 0px rgb(54, 54, 54, 0.5);
            }
        }

        @media (max-width: 1024px) {
            grid-area: 1 / 1 / 2 / 3;
        }
    }

    &:nth-child(2) {
        grid-area: 1 / 2 / 2 / 3;
        .item__wrapper {
            background: radial-gradient(at center center, #fec62e 0%, #fec62e 100%);
            justify-content: end;
            .media__content {
                img {
                    top: 0;
                    right: -100px;

                    @media (max-width: 1149px) {
                        right: -70px;
                    }

                    @media (max-width: 767px) {
                        top: -40px;
                        width: 410px;
                    }
                }
            }

            &:hover {
                box-shadow: 0px 20px 40px 0px #ffe399;
            }
        }

        @media (max-width: 1024px) {
            grid-area: 1 / 3 / 2 / 5;
        }
    }

    &:nth-child(3) {
        grid-area: 1 / 3 / 2 / 5;
        .item__wrapper {
            background: linear-gradient(90deg, #f42c37 61%, #ff4e59 100%);
            justify-content: flex-end;
            padding-top: 15%;
            padding-bottom: 9.5%;
            .media__content {
                overflow: hidden;
                img {
                    width: 610px;
                    bottom: -20px;
                    right: -80px;

                    @media (max-width: 1149px) {
                        right: -20%;
                    }

                    @media (max-width: 1024px) {
                        left: 20%;
                        bottom: -50px;
                    }

                    @media (max-width: 767px) {
                        
                    }
                }
            }
            .item__content .item__content_subtitle {
                font-size: 65px;

                @media (max-width: 1149px) {
                    font-size: 47px;
                }

                @media (max-width: 767px) {
                    font-size: 42px;
                }
            }

            &:hover {
                box-shadow: 0px 20px 40px 0px rgba(244, 44, 55, 0.5);
            }
        }

        @media (max-width: 1024px) {
            grid-area: 2 / 1 / 3 / 5;
        }
    }

    &:nth-child(4) {
        grid-area: 2 / 1 / 3 / 3;
        color: vars.$color-g-text;
        .item__wrapper {
            background: linear-gradient(180deg, #edeced 0%, #eef0f3 100%);
            justify-content: center;
            padding-left: 20%;
            .media__content {
                img {
                    width: 310px;
                    right: 0;
                    bottom: -40px;

                    @media (max-width: 1024px) {
                        right: 5%;
                        bottom: -20px;
                    }

                    @media (max-width: 767px) {
                        max-width: 50%;
                    }
                }
            }
            .item__content .item__content_subtitle {
                font-size: 65px;
                opacity: 1;

                @media (max-width: 767px) {
                    font-size: 42px;
                }
            }

            &:hover {
                box-shadow: 0px 20px 40px 0px #edeced;
            }

            @media (max-width: 767px) {
                padding-left: 10%;
            }
        }

        @media (max-width: 1024px) {
            grid-area: 4 / 1 / 5 / 5;
        }
    }

    &:nth-child(5) {
        grid-area: 2 / 3 / 3 / 4;
        .item__wrapper {
            overflow: hidden;
            background-color: vars.$color-app-green;
            justify-content: flex-start;
            padding-top: 10%;
            .media__content {
                img {
                    max-width: 520px;
                    width: 520px;
                    right: -80px;
                    bottom: -20px;

                    @media (max-width: 1149px) {
                        max-width: 120%;
                        right: -40px;
                        bottom: 0;
                    }
                }
            }

            &:hover {
                box-shadow: 0px 20px 40px 0px rgba(45, 204, 110, 0.5);
            }
        }

        @media (max-width: 1024px) {
            grid-area: 3 / 3 / 4 / 5;
        }
    }

    &:nth-child(6) {
        grid-area: 2 / 4 / 3 / 5;
        .item__wrapper {
            background: linear-gradient(180deg, #1478ff 0%, #1891ff 100%);
            justify-content: flex-start;
            padding-top: 10%;
            overflow: hidden;
            .media__content {
                img {
                    max-width: 420px;
                    width: 420px;
                    right: -80px;
                    bottom: -40px;

                    @media (max-width: 1149px) {
                        max-width: 120%;
                    }
                }
            }

            &:hover {
                box-shadow: 0px 20px 40px 0px rgba(20, 120, 255, 0.3);
            }
        }

        @media (max-width: 1024px) {
            grid-area: 3 / 1 / 4 / 3;
        }
    }

    @media (max-width: 1149px) {
        height: 340px;
    }

    @media (max-width: 767px) {
        height: 310px;
    }
}
</style>
