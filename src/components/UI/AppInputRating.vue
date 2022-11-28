<template>
    <div class="app__input_rating ui__component">
        <div class="rating__wrapper">
            <div
                v-for="n in 5"
                :key="n"
                :data-star-count="n"
                ref="stars"
                class="rating__star"
                @mouseenter="starEventEnter"
                @mouseleave="starEventLeave"
                @click="setUserRatingValue"
            >
                <app-ui-icon
                    :icon="'i-star-regular'"
                    class="rating__icon"
                    :style="'font-size: 22px; color: #f42c37;'"
                />
                <app-ui-icon :icon="'i-star-solid'" class="rating__icon" :style="'color: #f42c37;'" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "app-ui-input-rating",
};
</script>
<script setup>
import { ref, onMounted } from 'vue';
const props = defineProps({
    modelValue: { type: [Number, String], default: 0},
    readonly: {type: Boolean, default: false}
});
const emit  = defineEmits(["update:modelValue"])
const stars = ref(null);

const starEventEnter = (event) => {
    if(props.readonly) return;
    stars.value.forEach((el) =>
        event.target.getAttribute("data-star-count") >= el.getAttribute("data-star-count")
            ? el.classList.add("active")
            : el.classList.remove("active")
    );
};
const starEventLeave = () => {
    if(props.readonly) return;
    stars.value.forEach((el) => el.classList.remove('active'));
    if (props.modelValue !== 0) setDefaultValue(props.modelValue);
};

const setDefaultValue = (value) => {
    for (let i = 0; i < value; i++) stars.value[i].classList.add("active");
};
const setUserRatingValue = (event) => {
    if(props.readonly) return;
    emit("update:modelValue", event.target.closest('.rating__star').getAttribute('data-star-count'));
}

onMounted(() => {
    setDefaultValue(props.modelValue);
})
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.app__input_rating {
    .rating__wrapper {
        display: flex;
        align-items: center;
        .rating__star {
            position: relative;
            cursor: pointer;
            margin: 0 2px;
            isolation: isolate;

            .rating__icon:last-child {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: -1;
                opacity: 0;
                transition: all 0.2s ease-in-out;
            }

            &.active {
                .rating__icon:last-child {
                    opacity: 1;
                }
            }
        }
    }
}
</style>
