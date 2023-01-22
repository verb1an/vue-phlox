<template>
    <nav class="app__menu_catalog component" :class="multyMenu ? 'multy' : ''">
        <div class="menu__wrapper">
            <div @click="showHideMenu" class="menu__title">
                <h3>{{ title }}</h3>
            </div>

            <div class="menu__content _toggle_hidden">
                <div v-if="$slots.preContent" class="pre__content">
                    <slot name="preContent"></slot>
                </div>
                <ul v-if="$props.menu" class="">
                    <li v-for="(value, index) in menu" :key="index" :class="value.hide ? 'hide' : ''">
                        <a v-if="multyMenu" class="menu__multy_item">
                            <input
                                type="checkbox"
                                name="filters__price_input"
                                :id="`menu__item_checkbox-${value.path}`"
                                :data-index="index"
                                :checked="value.doubt"
                                @change="changeFilterValue"
                            />
                            <label :for="`menu__item_checkbox-${value.path}`">
                                {{ value.title }}
                            </label>
                        </a>
                        <router-link v-else-if="!value.subbed" :to="value.path" class="menu__item">{{ value.title }}</router-link>
                        <div v-if="value.sub && value.sub.length > 0" class="sub__menu">
                            <router-link
                                v-for="subitem in value.sub"
                                :to="menu.find((item) => item.id === subitem).path"
                                :key="subitem"
                                >{{ menu.find((item) => item.id === subitem).title }}</router-link
                            >
                        </div>
                    </li>
                </ul>
                <div v-if="$slots.content" class="content">
                    <slot name="content"></slot>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "app-menu-catalog",
};
</script>

<script setup>
const props = defineProps({
    title: { type: String, required: true },
    menu: Array,
    multyMenu: { type: Boolean, default: false },
    queryType: String,
});
const emit = defineEmits(["filters:change"]);

const showHideMenu = (event) => {
    const targetElement = event.target.closest(".component").children[0].children[1];
    let showedTargetHeight = 0;
    for (let i = 0; i < targetElement.children.length; i++) {
        showedTargetHeight += targetElement.children[i].offsetHeight;
    }

    targetElement.classList.toggle("_show");
    targetElement.classList.contains("_show")
        ? (targetElement.style = `height: ${showedTargetHeight + 25}px`) // <!-- 25px for something wrong -->
        : (targetElement.style = "");
};

const changeFilterValue = (event) => {
    emit("filters:change", {
        queryType: props.queryType,
        index: event.target.getAttribute("data-index"),
        value: event.target.checked,
    });
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.app__menu_catalog {
    .menu__wrapper {
        .menu__title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
            cursor: pointer;
            &::after {
                content: "\e90b";
                font-family: "phlox" !important;
                font-size: 14px;
                font-weight: 400;
                transform: rotateZ(-90deg);
                transition: all 0.4s ease-in-out;
            }
        }
        ul {
            list-style: none;
            li {
                position: relative;
                a {
                    display: block;
                    font-size: 16px;
                    font-weight: 500;
                    color: vars.$color-app-text-06;
                    transition: all 0.2s ease-in-out;
                    padding: 10px 25px;
                    border-radius: 4px;

                    &.menu__multy_item {
                        display: flex;
                        align-items: center;

                        label {
                            cursor: pointer;
                            display: block;
                            padding-left: 10px;
                            user-select: none;
                        }
                    }
                }

                .sub__menu {
                    position: absolute;
                    right: 0;
                    top: 0;
                    transform: translate(100%, 20px);
                    overflow: hidden;
                    opacity: 0;
                    transition: transform 0.12s ease-in-out, opacity 0.12s ease-in-out;
                    background-color: rgb(243, 243, 243);
                    padding: 0;
                    z-index: 100;
                    width: 0;

                    a:hover {
                        color: vars.$color-g-primary;
                    }
                }

                &:hover {
                    .menu__item {
                        position: relative;
                        color: vars.$color-g-primary;
                        background-color: rgba(0, 0, 0, 0.1);
                    }
                    .sub__menu {
                        opacity: 1;
                        padding: 10px 30px;
                        transform: translate(100%, 0);
                        width: 100%;
                    }
                }

                &.hide {
                    display: none;
                }
            }
        }

        ._toggle_hidden {
            padding: 0;
            margin: 0;
            height: 0;
            opacity: 0;
            overflow: hidden;
            transition: all 0.4s ease-in-out;

            &._show {
                height: auto;
                opacity: 1;
                overflow: visible;
            }
        }
    }
}
</style>
