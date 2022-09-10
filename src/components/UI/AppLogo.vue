<template>
    <div class="app__logo ui__compontent">
        <div class="logo__wrapper">
            <router-link to="/">
                <div class="logotype">
                    <img src="@/assets/AppLogo.svg" alt="phlox logotype" />
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "app-logo",
};
</script>

<style lang="scss" scoped>
.logotype{
    img{
        display: block;
        height: 18px;
    }
}
</style>
