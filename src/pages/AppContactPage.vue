<template>
    <div class="section__content">
        <section class="section contact__contact_interface">
            <section class="section feedback">
                <div class="content">
                    <div class="content__row">
                        <app-section-header class="tal _page-headers">
                            <template #title>Contact Us</template>
                            <template #subtitle>Get In Touch</template>
                            <template #content>
                                <p>
                                    When, while lovely valley teems with vapour around meand meridian the upper
                                    impenetrable.
                                </p>
                            </template>
                        </app-section-header>
                        <form action="#" class="form">
                            <app-ui-input
                                v-model="feedbackMessage.email"
                                :type="'email'"
                                :placeholder="'Enter your email'"
                                class="_app__input_text"
                            />
                            <app-ui-input
                                v-model="feedbackMessage.phone_number"
                                :type="'tel'"
                                :placeholder="'Phone Number'"
                                class="_app__input_text"
                            />
                            <app-ui-textarea
                                v-model="feedbackMessage.message_text"
                                :placeholder="'Your message here'"
                                :style="'height: 260px;'"
                            ></app-ui-textarea>
                            <app-ui-btn
                                :type="'submit'"
                                :design="'fill-circle'"
                                :background="'primary'"
                                :color="'white'"
                                >Submit</app-ui-btn
                            >
                        </form>
                    </div>
                </div>
            </section>
            <section class="section map">
                <div class="content">
                    <div class="content__row">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.173391460216!2d-97.0735458850255!3d32.94643128263549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2b4000000001%3A0xffb9331da6815400!2sPhlox%20Agency!5e0!3m2!1sru!2sru!4v1664161856722!5m2!1sru!2sru"
                            width="600"
                            height="450"
                            style="border: 0"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </section>
        <section class="section contact__data">
            <div class="content">
                <div class="content__row">
                    <div v-for="n in 3" :key="n" class="item">
                        <div class="item__media">
                            <img :src="require(`@/assets/img/contact/contact-${n}.svg`)" alt="contact info" />
                        </div>
                        <div class="item__header">
                            <h3 class="item__header_title">
                                <span>{{ contactData[n - 1].title }}:</span>
                                {{ contactData[n - 1].text }}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from "vue";

const contactData = [
    { title: "Email", text: "Info@yourdomain.com, info@samplemail.com" },
    { title: "Phone", text: " +99 (0) 101 0000 888, +99 (0) 101 0000 88" },
    { title: "Address", text: "Patricia C. 4401 Waldeck Street Grapevine Nashville, Tx 76051" },
];

const feedbackMessage = ref({
    email: "",
    phone_number: "",
    message_text: "",
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.main .section__content {
    margin-top: 100px;
    margin-bottom: 0;
    padding: 0 2%;
}
.section.contact__contact_interface {
    display: flex;

    @media (max-width: 767px) {
        flex-direction: column;
    }
}
.section.feedback {
    max-width: 620px;
    flex: 0 0 40%;
    .content {
        .content__row {
            .form {
                .ui__component {
                    margin-top: 20px;
                    color: red;
                }
                .app__button {
                    text-align: right;
                }
            }
        }
    }

    @media (max-width: 767px) {
        flex: none;
        max-width: 100%;
    }
}
.section.map {
    height: auto;
    flex: 0 0 60%;
    overflow: hidden;
    .content {
        height: 100%;
        width: 100%;
        margin: 0 0 0 82px;
        .content__row {
            position: relative;
            height: 100%;
            width: 100%;
            padding: 0 0 60px;
            iframe {
                width: 100%;
                height: 100%;
            }
        }

        @media (max-width: 767px) {
            margin: 0;
            margin-top: 82px;
        }
    }

    @media (max-width: 767px) {
        flex: none;
        height: 600px;
    }
}
.section.contact__data {
    .content {
        margin: 48px 0 25px;
        .content__row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 25px;
            .item {
                display: flex;
                align-items: center;

                .item__media {
                    img {
                        height: auto;
                    }
                }

                .item__header {
                    max-width: 400px;
                    padding: 2.5em;
                    .item__header_title {
                        font-weight: 400;
                        font-size: 15px;
                        color: vars.$color-g-text;

                        span {
                            font-size: 16px;
                            font-weight: 600;

                            @media (max-width: 991px) {
                                font-size: 14px;
                            }
                        }

                        @media (max-width: 991px) {
                            font-size: 12px;
                        }
                    }

                    @media (max-width: 991px) {
                        max-width: 350px;
                    }
                }

                @media (max-width: 991px) {
                    flex: 0 0 50%;
                }

                @media (max-width: 767px) {
                    flex: 0 0 100%;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                }
            }

            @media (max-width: 991px) {
                flex-wrap: wrap;
                justify-content: center;
            }
        }
    }
}
</style>
