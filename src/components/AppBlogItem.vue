<template>
    <article class="app__blog_item component">
        <div class="item__wrapper">
            <div class="item__media">
                <img :src="require('@/' + item.img)" alt="" />
            </div>
            <div class="item__main">
                <div class="item__info">
                    <div class="item__info_date">
                        <a :href="'/blog/post/' + item.id + '-' + item.alias">
                            <time :datetime="item.date_creation">{{ dateCreation }}</time>
                        </a>
                    </div>
                    <div class="item__info_author">
                        <a :href="'/blog/authors/' + item.author.id"
                            >by <span>{{ item.author.name }}</span>
                        </a>
                    </div>
                </div>

                <div class="item__header">
                    <h3 class="item__header_title">
                        {{ item.title }}
                    </h3>
                </div>

                <div class="item__content">
                    <p>{{ item.text }}...</p>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: "app-blog-item",
};
</script>

<script setup>
import { ref } from "vue";

const props = defineProps({
    item: Object,
});

const dateCreation = ref('');

/* prettier-ignore */
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const reFormatDate = () => {
    const currDate = new Date(props.item.creation_date);
    dateCreation.value = months[currDate.getMonth()] + ' ' + currDate.getDate() + ', ' + currDate.getFullYear();
}

reFormatDate();
</script>

<style lang="scss" scoped>
@use '@/assets/scss/vars';
.app__blog_item {
    width: 33%;
    max-height: 470px;

    .item__wrapper {
        padding: 20px;
        .item__media {
            width: 100%;
            max-height: 270px;
            border-radius: 25px;
            margin-bottom: 25px;
            cursor: pointer;
            overflow: hidden;
            transition: all 0.4s ease-in-out;

            img {
                width: 100%;
                height: 270px;
                overflow: hidden;
                object-fit: cover;
            }
        }

        .item__info {
            display: flex;
            margin-bottom: 25px;

            .item__info_date {
                font-size: 16px;
                font-weight: 400;
            }
            
            .item__info_author {
                display: flex;
                align-items: center;
                font-size: 16px;
                font-weight: 400;

                &::before {
                    content: '';
                    width: 5px;
                    height: 5px;
                    background-color: vars.$color-g-text;
                    opacity: 0.3;
                    border-radius: 5px;
                    margin: 0 10px;
                }
            }
        }

        .item__header {
            margin-bottom: .5em;

            .item__header_title  {
                font-size: 20px;
                font-weight: 700;
                color: vars.$color-g-text;

                white-space: nowrap;
                max-width: 80%;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        .item__content {
            max-width: 80%;
            font-size: 16px;
            line-height: 1.5;
        }
    }

    &:hover{
        .item__wrapper .item__media {
            box-shadow: 0 0 50px rgba(178,178,178,.76);
            
        }
    }
}
</style>
