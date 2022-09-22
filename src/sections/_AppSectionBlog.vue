<template>
    <section class="section blog">
        <div class="content">
            <div class="content__row">
                <app-blog-item v-for="item in blogPosts" :key="item.id" :item="item" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "app-s-blog",
};
</script>
<script setup>
defineProps({
    blogPosts: {
        type: Array,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.section.blog {
    .content {
        .content__row {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
        }
    }
}
</style>
