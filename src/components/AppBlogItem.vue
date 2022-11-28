<template>
    <article class="app__blog_item component">
        <div class="item__wrapper">
            <div class="item__media">
                <router-link :to="`/blog/${item.category}/${item.id}`">
                    <img :src="require('@/' + item.img)" alt="blog computers" />
                </router-link>
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
            border-radius: 25px;
            margin-bottom: 25px;
            cursor: pointer;
            overflow: hidden;
            transition: all 0.4s ease-in-out;
            background-color: transparent;
            display: flex;
            align-items: center;

            img {
                width: 100%;
                height: auto;
                overflow: hidden;
                object-fit: cover;
            }
            
            @media (max-width: 767px) {
                width: auto;
                margin: 0 20px 20px;
            }

            @media (max-width: 524px) {
                margin: 0 0 20px;
            }

        }

        .item__info {
            display: flex;
            margin-bottom: 25px;
            font-size: 16px;
            font-weight: 400;
            
            .item__info_author {
                display: flex;
                align-items: center;
                
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

            @media (max-width: 1024px) {
                font-size: 13px;
            }
        }

        .item__header {
            margin-bottom: .5em;

            .item__header_title  {
                font-size: 1.1em;
                font-weight: 700;
                color: vars.$color-g-text;

                white-space: nowrap;
                max-width: 80%;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        .item__content {
            font-size: 16px;
            max-width: 80%;
            font-size: 16px;
            line-height: 1.5;

            @media (max-width: 1024px) {
                max-width: 100%;
                font-size: 13px;
            }
        }

        @media (max-width: 524px) {
            padding: 20px 5px;
        }
    }

    &:hover{
        .item__wrapper .item__media {
            box-shadow: 0 0 50px rgba(178,178,178,.76);
            
        }
    }
 
    @media (max-width: 767px) {
        width: 100%;
        max-height: 100%;
    }
}
</style>
