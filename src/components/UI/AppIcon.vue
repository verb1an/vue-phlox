<template>
    <div class="app__icon ui__component">
        <div class="icon__wrapper">
            <span class="icon" :class="icon" :style="style"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: "app-ui-icon",
};
</script>

<script setup>
defineProps({
    icon: {
        type: String,
        required: true,
    },
    style: String
});
</script>

<style lang="scss" scoped>
.icon__wrapper{
    position: relative;
    z-index: 10;
}

[class^="i-"],
[class*=" i-"] {
    font-size: 20px;
    font-weight: 400;
}
</style>
