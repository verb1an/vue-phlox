<template>
    <nav class="app__menu_catalog component" :class="multyMenu ? 'multy' : ''">
        <div class="menu__wrapper">
            <div v-if="$props.title" @click="showHideMenu" class="menu__title">
                <h3>{{ title }}</h3>
            </div>
            <ul v-if="$props.menu" class="_toggle_hidden">
                <li v-for="(value, index) in menu" :key="value.path">
                    <a v-if="multyMenu" class="menu__multy_item">
                        <input
                            type="checkbox"
                            name=""
                            :id="`menu__item_checkbox-${value.path}`"
                            :data-index="index"
                            :checked="value.doubt"
                            @change="changeFilterValue"
                        />
                        <label :for="`menu__item_checkbox-${value.path}`">
                            {{ value.title }}
                        </label>
                    </a>
                    <router-link v-else :to="value.path">{{ value.title }}</router-link>
                </li>
            </ul>
            <div v-if="$slots.content" class="content _toggle_hidden">
                <slot name="content"></slot>
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
    title: String,
    menu: Array,
    multyMenu: { type: Boolean, default: false },
    queryType: String,
});
const emit = defineEmits(["filters:change"])

const showHideMenu = (event) => {
    const targetElement = event.target.closest(".component").children[0].children[1];
    let showedTargetHeight = 0;
    for (let i = 0; i < targetElement.children.length; i++) {
        showedTargetHeight += targetElement.children[i].offsetHeight;

        const margin = window.getComputedStyle(targetElement.children[i], null).margin;
        if (!margin || margin == "0px") continue;
        console.log(margin);
        const allMargins = margin.replaceAll("px", "").split(" ");
        showedTargetHeight += Number.parseInt(allMargins[0]) + Number.parseInt(allMargins[2]); // <!-- ? Top and bottom -->
    }

    targetElement.classList.toggle("_show");
    targetElement.classList.contains("_show")
        ? (targetElement.style = `height: ${showedTargetHeight + 25}px`) // <!-- 50px for something wrong -->
        : (targetElement.style = ""); // <!-- ? mt10 + h18.4 -->
};

const changeFilterValue = (event) => {
    emit("filters:change", {
        queryType: props.queryType,
        index: event.target.getAttribute('data-index'),
        value: event.target.checked
    })
}

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

                &:hover {
                    a {
                        color: vars.$color-g-primary;
                        background-color: rgba(0, 0, 0, 0.1);
                    }
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
            }
        }
    }
}
</style>
