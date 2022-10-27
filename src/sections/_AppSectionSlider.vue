<template>
    <div class="slider">
        <div class="slider__wrapper" :style="`width: ${slideWidth}px; height: ${slideHeight}px;`">
            <div
                v-for="img in slides"
                :key="img"
                class="slider__item"
                :style="`transform: translateX(${-(sliderActive - 1) * slideWidth}px)`"
            >
                <img :src="img" alt="product img" @mousemove="hoverEffect" />
            </div>
        </div>
        <div class="slider__controlls" :style="`width: ${slideWidth}px`">
            <div
                v-for="n in slides.length"
                :key="n"
                :data-item="n"
                class="slider__cont"
                :class="sliderActive == n ? 'active' : ''"
                :style="`transform: translateX(${
                    -(sliderActive < pagStartSlide ? 0 : sliderActive - (pagStartSlide - 1)) * pagWidth
                }px); width: ${pagWidth}px; height: ${pagHeight}px;
                `"
                @click="switchSlider(n)" 
            >
                <img :src="slides[n - 1]" alt="product img" />
            </div>
        </div>
        <div class="slider__buttons">
            <app-ui-btn :design="'square-stroke'" class="slider__btn" :style="'border-radius: 50%; padding: 10px;'" @click="switchSlider(sliderActive-1)">
                <app-ui-icon :icon="'i-angle'" :style="'display: block;'" />
            </app-ui-btn>
            <app-ui-btn :design="'square-stroke'" class="slider__btn" :style="'border-radius: 50%; padding: 10px;'" @click="switchSlider(sliderActive+1)">
                <app-ui-icon :icon="'i-angle'" :style="'display: block;'" />
            </app-ui-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: "app-section-slider",
};
</script>

<script setup>
import { ref } from "vue";

const props = defineProps({
    slides: { type: Array, required: true },
    sliderStart: { type: Number, default: 1 },
    slideWidth: { type: Number, default: 800 },
    slideHeight: { type: Number, default: 600 },
    pagWidth: { type: Number, default: 120 },
    pagHeight: { type: Number, default: 100 },
    pagStartSlide: { type: Number, default: 4 },
});
const sliderActive = ref(props.sliderStart);

const switchSlider = (value) => {
    if ( value <= 0 || value > props.slides.length ) return;
    sliderActive.value = value;
};

const hoverEffect = (event) => {
    const targetWidth = event.target.getBoundingClientRect().width;
    const targetHeight =  event.target.getBoundingClientRect().height ;
    const xOffset = -Math.floor((event.offsetX - (targetWidth / 2 )) / targetWidth * 50);
    const yOffset = -Math.floor((event.offsetY - (targetHeight / 2 )) / targetHeight * 50);
    event.target.style = `transform: translate(${xOffset}px, ${yOffset}px) scale(1.1);`;
}

document.addEventListener('keydown', (event) => {
    if(event.code == 'ArrowRight') switchSlider(sliderActive.value + 1);
    else if(event.code == 'ArrowLeft') switchSlider(sliderActive.value - 1);
})

</script>

<style lang="scss" scoped>
@use '@/assets/scss/vars';
.slider {
    position: relative;
    .slider__wrapper {
        display: flex;
        overflow: hidden;
        .slider__item {
            width: 100%;
            height: 100%;
            flex-shrink: 0;
            transition: transform 0.4s ease-in-out;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;

                transition: scale .1s ease-in-out;
            }
        }
    }

    .slider__controlls {
        display: flex;
        align-items: center;
        margin: 15px 5px;
        overflow-x: hidden;

        .slider__cont {
            position: relative;
            cursor: pointer;
            width: 120px;
            height: 100px;
            margin-right: 10px;
            overflow: hidden;
            border-radius: 10px;
            flex-shrink: 0;
            transition: all 0.4s ease-in-out;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            &::before {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 100%;
                height: 100%;
                border-radius: 10px;
                background-color: rgba(0, 0, 0, 0.2);
                transition: all 0.2s ease-in-out;
            }

            &:hover {
                &::before {
                    background-color: transparent;
                }
            }

            &.active {
                border: 2px solid vars.$color-g-primary;
                &::before {
                    background-color: transparent;
                }
            }
        }
    }

    .slider__buttons {
        .slider__btn {
            position: absolute;
            top: 50%;

            &:first-child {
                left: 0;
                transform: translate(0%, -100%) rotate(90deg);
                margin-left: 10px;
            }

            &:last-child {
                right: 0;
                transform: translate(0%, -100%) rotate(-90deg);
                margin-right: 20px;
            }
        }
    }
}
</style>
