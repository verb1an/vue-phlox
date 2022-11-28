<template>
    <app-s-breadcrumbs :breadcrumbs="breadcrumbs" />
    <div class="section__content">
        <div class="blog__item">
            <div class="item__media">
                <img :src="blogItem.img" alt="blog">
            </div>
            <div class="item__header">
                <span class="creation__date">{{ blogItem.creation_date }}</span>
                <span class="author">by {{ blogItem.author.name }}</span>
            </div>
            <div class="item__content">
                <div class="item__text">
                    <p v-for="p in blogItem.text.split(`\n\n`)" :key="p">{{p}}</p>
                </div>
            </div>
        </div>
        <div class="review__add">
            <h2 class="title">Leave A Comment</h2>
            <h3 class="subtitle">Your email address will not be published. Required fields are marked *</h3>
            <form action="#" class="form__add_review">
                <div class="form__input_label">
                    <app-ui-input :id="'review__input_author_name'" :wrapStyle="'border-radius: 50px;'" :placeholder="'Your name'" :style="'padding: 0 25px;'" />
                </div>
                <div class="form__input_label">
                    <app-ui-input :id="'review__input_author_mail'" :wrapStyle="'border-radius: 50px;'" :placeholder="'Your email'" :style="'padding: 0 25px;'" />
                </div>
                <div class="form__input_label">
                    <app-ui-textarea :id="'review__input_text'" :wrapStyle="'border-radius: 50px;'" :placeholder="'Comment'" :style="'padding: 0 25px;'" />
                </div>
                <app-ui-btn :design="'fill-bgc'" :background="'primary'" :color="'white'">Submit</app-ui-btn>
            </form>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const blogItem = {
    id: 12,
    alias: "How-to-choose-perfect-gadgets",
    title: "How to choose perfect gadgets",
    img: "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/adult-blur-close-up-267394-1600x900.jpg",
    creation_date: "2019-10-05",
    category: "uncategorized",
    text: `When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of bliss; and then, my friend, when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then I often think with longing, Oh, would I could describe these conceptions, could impress upon paper all that is living so full and warm within me, that it might be the mirror of my soul, as my soul is the mirror of the infinite God!\n\n O my friend — but it is too much for my strength — I sink under the weight of the splendour of these visions! A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.\n\n I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.\n\n When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of bliss; and then, my friend, when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then I often think with longing, Oh, would I could describe these conceptions, could impress upon paper all that is living so full and warm within me.`,
    author: {
        id: 1,
        name: "Paul",
    },
};

const breadcrumbs = computed(() => {
    return [
        {
            title: "Blog",
            path: `/blog/`
        },
        {
            title: blogItem.category,
            path: `/blog/${blogItem.category}/`
        },
        {
            title: blogItem.title,
            path: `/blog/${blogItem.category}/${blogItem.id}`
        }
    ]
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/vars';
.section__content {
    padding: 0 100px;

    @media (max-width: 991px) {
        padding: 0 60px;
    }

    @media (max-width: 767px) {
        padding: 0 30px;
    }

    @media (max-width: 551px) {
        padding: 0;
    }
}
.blog__item {

    .item__media {
        width: 100%;
        border-radius: 25px;
        overflow: hidden;
        margin-bottom: 25px;

        img {
            width: 100%;
            max-height: 600px;
            height: auto;
        }
    }

    .item__header {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
        padding: 0 15%;
        .creation__date {
            color: vars.$color-g-primary;
            margin-right: 20px;
        }

        .author {
            position: relative;
            padding-left: 20px;

            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 0;
                transform: translate(0, -50%);
                width: 4px;
                height: 4px;
                background-color: vars.$color-g-text;
                opacity: .2;
                border-radius: 50%;
            }
        }
    }

    .item__content {
        padding: 0 15%;

        .item__text {
            color: vars.$color-g-text;
            font-size: 16px;
            font-weight: 500;
            line-height: 30px;
        }

        @media (max-width: 767px) {
            padding: 0 5%;
        }
    }
}
.review__add {
    padding: 0 15%;
    margin-top: 80px;

    .subtitle {
        margin-bottom: 25px;
    }

    form {
        display: flex;
        flex-wrap: wrap;

        .form__input_label {
            padding: 10px;

            .app__input {
                height: 57px;
                width: 100%;
            }

            .app__textarea {
                height: 200px;
                width: 100%;
            }
            &:nth-child(1),
            &:nth-child(2) {
                width: 50%;

                @media (max-width: 767px) {
                    width: 100%;
                }
            }
            &:nth-child(3) {
                width: 100%;
            }
        }
    }

    @media (max-width: 767px) {
        padding: 0 5%;
    }
}
</style>