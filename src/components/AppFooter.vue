<template>
    <footer class="footer component">
        <section class="section brands">
            <div class="content">
                <div class="content__row">
                    <div v-for="n in 5" :key="n" class="item brand">
                        <div class="item__wrapper">
                            <div class="item__media">
                                <img :src="require('@/assets/img/brands/brand-img0' + n + '.png')" alt="brand" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section tabs">
            <div class="content">
                <div class="content__row">
                    <div class="content__col">
                        <div class="col__title">
                            <router-link to="/">
                                <app-logo />
                            </router-link>
                        </div>
                        <div class="col__text_content footer__content_description">
                            <p>There are many variations passages of Lorem Ipsum available, but the majority have</p>
                        </div>
                        <div class="col__social">
                            <div class="item">
                                <div class="item__wrapper">
                                    <a href="https://vk.com/verb1an" target="_blank">
                                        <app-ui-icon :icon="'social-i-vk'" />
                                    </a>
                                </div>
                            </div>
                            <div class="item">
                                <div class="item__wrapper">
                                    <a href="https://instagram.com/kineyprod" target="_blank">
                                        <app-ui-icon :icon="'social-i-instagram'" />
                                    </a>
                                </div>
                            </div>
                            <div class="item">
                                <div class="item__wrapper">
                                    <a href="https://t.me/verb1an" target="_blank">
                                        <app-ui-icon :icon="'social-i-telegram'" />
                                    </a>
                                </div>
                            </div>
                            <div class="item">
                                <div class="item__wrapper">
                                    <a href="https://github.com/verb1an" target="_blank">
                                        <app-ui-icon :icon="'social-i-github'" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content__col">
                        <h3 class="col__title">Quick links</h3>
                        <nav class="footer__menu">
                            <ul>
                                <app-menu-link class="footer__menu_item" :link="'/'">Home</app-menu-link>
                                <app-menu-link class="footer__menu_item" :link="'/shop'">Shop</app-menu-link>
                                <app-menu-link class="footer__menu_item" :link="'/about-us'">About</app-menu-link>
                                <app-menu-link class="footer__menu_item" :link="'/contact-us'">Contact</app-menu-link>
                            </ul>
                        </nav>
                    </div>
                    <div class="content__col">
                        <h3 class="col__title">Contact</h3>
                        <div class="col__text_content footer__content_contact">
                            <p>+99 (0) 101 0000 888 Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051</p>
                        </div>
                    </div>
                    <div class="content__col">
                        <form class="footer__email_form" action="#">
                            <div class="footer__email_form_headers">
                                <h3 class="form__pre_title">Subscribe To Our Email</h3>
                                <h2 class="form__title">For Latest News & Updates</h2>
                            </div>
                            <app-ui-input v-model="label" :placeholder="'Enter your Email'" class="_app__input_text">
                                <template #btn>
                                    <app-ui-btn :design="'fill-bgc'">Subscribe</app-ui-btn>
                                </template>
                            </app-ui-input>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section class="section copyright">
            <div class="content">
                <div class="content__row">
                    <span>© 2022 Phlox Digital Shop. All rights reserved.</span>
                    <span>Privacy Policy . Term Condition</span>
                </div>
            </div>
        </section>
    </footer>
</template>

<script>
export default {
    name: "app-footer",
};
</script>
<script setup>
import { ref } from 'vue';
let label = ref('');
</script>

<style lang="scss" scoped>
@use '@/assets/scss/vars';
.footer {
    margin-top: 50px;
    .section.brands {
        background-image: vars.$gradient-gray-light-gray-90;
        .content {
            padding: 0 30px;
            max-width: 1600px;
            width: 100%;
            .content__row {
                display: flex;
                align-items: center;
                width: 100%;

                .item {
                    width: 20%;
                    height: 230px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0.5;
                    transition: all 0.3s ease-in-out;

                    &:first-child {
                        justify-content: start;

                        @media (max-width: 767px) {
                            justify-content: center;
                        }
                    }
                    &:last-child {
                        justify-content: flex-end;

                        @media (max-width: 767px) {
                            justify-content: center;
                        }
                    }

                    &:hover {
                        opacity: 1;
                    }

                    @media (max-width: 767px) {
                        height: auto;
                        margin: 60px 0;
                    }
                }

                @media (max-width: 767px) {
                    flex-direction: column;
                }
            }
        }
    }
    .section.tabs {
       
        .content {
            padding: 7% 2% 5%;
            .content__row {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                flex-wrap: wrap;

                .content__col {
                    width: 18%;

                    &:first-child {
                        width: 24%;

                        @media (max-width: 1024px) {
                            width: 50%;
                        }

                        @media (max-width: 767px) {
                            width: 100%;
                        }
                    }

                    &:last-child {
                        width: 40%;

                        @media (max-width: 1024px) {
                            width: 50%;
                        }

                        @media (max-width: 767px) {
                            width: 100%;
                        }
                    }

                    @media (max-width: 1024px) {
                        width: 50%;
                        margin-bottom: 20px;
                    }

                    @media (max-width: 767px) {
                        width: 100%;
                    }
                }

                .col__title {
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 1.25;
                    color: vars.$color-g-text;
                    margin-bottom: 20px;
                }

                .col__text_content {
                    font-size: 15px;
                    font-weight: 400;
                    line-height: 1.5;
                    color: vars.$color-app-text-08;
                    
                    &.footer__content_description{
                        max-width: 240px;
                        margin-bottom: 40px;
                        padding: 20px 0;
                    }

                    &.footer__content_contact {
                        line-height: 1.9;
                        letter-spacing: -0.45px;
                        max-width: 200px;
                    }
                }

                .col__social {
                    display: flex;
                    align-items: center;

                    .item {
                        position: relative;
                        font-size: 18px;
                        & + .item {
                            margin-left: 30px;
                        }

                        &::before {
                            content: '';
                            position: absolute;
                            top: 45%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            width: 12px;
                            height: 12px;
                            border-radius: 50%;
                            border: 2px solid vars.$color-g-primary;
                            transition: all 0.1s ease-in-out;
                            opacity: 0;
                            z-index: 0;
                        }

                        &:hover::before {
                            width: 30px;
                            height: 30px;
                            opacity: 1;
                        }
                    }
                }

                .footer__menu {
                    ul {
                        padding: 0;
                        list-style: none;
                        display: flex;
                        align-items: start;
                        flex-direction: column;

                        li{
                            font-size: 15px;
                        }
                    }
                }

                .footer__email_form{
                    .footer__email_form_headers{

                        .form__pre_title{
                            font-size: 16px;
                            font-weight: 400;
                            margin-bottom: 20px;
                        }

                        .form__title{
                            font-size: 35px;
                            font-weight: 700;
                            color: vars.$color-g-text;
                            margin-bottom: 20px;
                        }
                    }
                }

                
            }

            @media (max-width: 1024px) {
                padding: 7% 5% 5%;
            }
        }
    }
    .section.copyright{
        background-color: vars.$color-g-text;
        color: vars.$color-g-gray;
        font-size: 15px;
        .content {
            padding: 30px 60px;
            .content__row {
                display: flex;
                align-items: center;
                justify-content: space-between;

                span {
                    @media (max-width: 767px) {
                        margin-bottom: 20px;
                    }  
                }

                @media (max-width: 767px) {
                    flex-direction: column;
                    text-align: center;
                }
            }

            @media (max-width: 767px) {
                padding: 30px 0 0;
            }
        }
    }
}
</style>
