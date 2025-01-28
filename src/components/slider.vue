<template>
    <div class="container">
        <div class="slider">
            <div ref="prevButton" class="slider__button-prev">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3705 4.94526C19.0805 3.66884 16.9999 3.67988 15.7235 4.96991L12.9501 7.77288C11.6737 9.06291 11.6848 11.1434 12.9748 12.4199L24.6238 23.9459L12.9625 35.6072C11.6793 36.8904 11.6793 38.971 12.9625 40.2542L15.7507 43.0425C17.034 44.3257 19.1145 44.3257 20.3977 43.0424L36.5891 26.8511C37.9779 25.4623 38.0499 22.4381 36.6475 21.0505L20.3705 4.94526Z" fill="currentColor"/>
                </svg>
            </div>
            <div ref="nextButton" class="slider__button-next">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3705 4.94526C19.0805 3.66884 16.9999 3.67988 15.7235 4.96991L12.9501 7.77288C11.6737 9.06291 11.6848 11.1434 12.9748 12.4199L24.6238 23.9459L12.9625 35.6072C11.6793 36.8904 11.6793 38.971 12.9625 40.2542L15.7507 43.0425C17.034 44.3257 19.1145 44.3257 20.3977 43.0424L36.5891 26.8511C37.9779 25.4623 38.0499 22.4381 36.6475 21.0505L20.3705 4.94526Z" fill="currentColor"/>
                </svg>
            </div>
            <swiper
                :slidesPerView="3"
                :space-between="15"
                :modules="modules"
                :pagination="{clickable: true}"
                class="slider__list"
                :navigation="{ prevEl: prevButton, nextEl: nextButton }"
                :breakpoints="{
                    '320': {
                        slidesPerView: 1,
                    },
                    '550': {
                        slidesPerView: 2,
                    },
                    '768': {
                        slidesPerView: 2,
                    },
                    '1024': {
                        slidesPerView: 3,
                    },
                }"
            >
                <swiper-slide
                    v-for="slide in slides"
                    :key="slide.id"
                >
                    <div class="slider__item">
                        <div class="slider__img">
                            <img :src="slide.img" alt="">
                        </div>
                        <div class="slider__text">
                            <div class="slider__line-star">
                                <div class="slider__star">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="icons">
                                            <path id="Star 1" d="M6.79107 2.29596C7.37318 1.45701 8.62666 1.45701 9.20877 2.29596L10.5479 4.226C10.7385 4.50065 11.0191 4.702 11.3424 4.79615L13.6146 5.45774C14.6023 5.74531 14.9896 6.92283 14.3617 7.72891L12.9172 9.58333C12.7116 9.84721 12.6044 10.173 12.6137 10.5058L12.6788 12.8448C12.7071 13.8615 11.6931 14.5892 10.7229 14.2484L8.49093 13.4645C8.17333 13.3529 7.82651 13.3529 7.50891 13.4645L5.27696 14.2484C4.30678 14.5892 3.29269 13.8615 3.321 12.8448L3.38613 10.5058C3.39539 10.173 3.28822 9.84721 3.08266 9.58333L1.63812 7.72891C1.01021 6.92283 1.39756 5.74531 2.38523 5.45773L4.65743 4.79615C4.98075 4.702 5.26134 4.50065 5.4519 4.226L6.79107 2.29596Z"
                                                  fill="currentColor"/>
                                        </g>
                                    </svg>
                                </div>
                                <div class="slider__star">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="icons">
                                            <path id="Star 1" d="M6.79107 2.29596C7.37318 1.45701 8.62666 1.45701 9.20877 2.29596L10.5479 4.226C10.7385 4.50065 11.0191 4.702 11.3424 4.79615L13.6146 5.45774C14.6023 5.74531 14.9896 6.92283 14.3617 7.72891L12.9172 9.58333C12.7116 9.84721 12.6044 10.173 12.6137 10.5058L12.6788 12.8448C12.7071 13.8615 11.6931 14.5892 10.7229 14.2484L8.49093 13.4645C8.17333 13.3529 7.82651 13.3529 7.50891 13.4645L5.27696 14.2484C4.30678 14.5892 3.29269 13.8615 3.321 12.8448L3.38613 10.5058C3.39539 10.173 3.28822 9.84721 3.08266 9.58333L1.63812 7.72891C1.01021 6.92283 1.39756 5.74531 2.38523 5.45773L4.65743 4.79615C4.98075 4.702 5.26134 4.50065 5.4519 4.226L6.79107 2.29596Z"
                                                  fill="currentColor"/>
                                        </g>
                                    </svg>
                                </div>
                                <div class="slider__star">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="icons">
                                            <path id="Star 1" d="M6.79107 2.29596C7.37318 1.45701 8.62666 1.45701 9.20877 2.29596L10.5479 4.226C10.7385 4.50065 11.0191 4.702 11.3424 4.79615L13.6146 5.45774C14.6023 5.74531 14.9896 6.92283 14.3617 7.72891L12.9172 9.58333C12.7116 9.84721 12.6044 10.173 12.6137 10.5058L12.6788 12.8448C12.7071 13.8615 11.6931 14.5892 10.7229 14.2484L8.49093 13.4645C8.17333 13.3529 7.82651 13.3529 7.50891 13.4645L5.27696 14.2484C4.30678 14.5892 3.29269 13.8615 3.321 12.8448L3.38613 10.5058C3.39539 10.173 3.28822 9.84721 3.08266 9.58333L1.63812 7.72891C1.01021 6.92283 1.39756 5.74531 2.38523 5.45773L4.65743 4.79615C4.98075 4.702 5.26134 4.50065 5.4519 4.226L6.79107 2.29596Z"
                                                  fill="currentColor"/>
                                        </g>
                                    </svg>
                                </div>
                                <div class="slider__star">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="icons">
                                            <path id="Star 1" d="M6.79107 2.29596C7.37318 1.45701 8.62666 1.45701 9.20877 2.29596L10.5479 4.226C10.7385 4.50065 11.0191 4.702 11.3424 4.79615L13.6146 5.45774C14.6023 5.74531 14.9896 6.92283 14.3617 7.72891L12.9172 9.58333C12.7116 9.84721 12.6044 10.173 12.6137 10.5058L12.6788 12.8448C12.7071 13.8615 11.6931 14.5892 10.7229 14.2484L8.49093 13.4645C8.17333 13.3529 7.82651 13.3529 7.50891 13.4645L5.27696 14.2484C4.30678 14.5892 3.29269 13.8615 3.321 12.8448L3.38613 10.5058C3.39539 10.173 3.28822 9.84721 3.08266 9.58333L1.63812 7.72891C1.01021 6.92283 1.39756 5.74531 2.38523 5.45773L4.65743 4.79615C4.98075 4.702 5.26134 4.50065 5.4519 4.226L6.79107 2.29596Z"
                                                  fill="currentColor"/>
                                        </g>
                                    </svg>
                                </div>
                                <div class="slider__star">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="icons">
                                            <path id="Star 1" d="M6.79107 2.29596C7.37318 1.45701 8.62666 1.45701 9.20877 2.29596L10.5479 4.226C10.7385 4.50065 11.0191 4.702 11.3424 4.79615L13.6146 5.45774C14.6023 5.74531 14.9896 6.92283 14.3617 7.72891L12.9172 9.58333C12.7116 9.84721 12.6044 10.173 12.6137 10.5058L12.6788 12.8448C12.7071 13.8615 11.6931 14.5892 10.7229 14.2484L8.49093 13.4645C8.17333 13.3529 7.82651 13.3529 7.50891 13.4645L5.27696 14.2484C4.30678 14.5892 3.29269 13.8615 3.321 12.8448L3.38613 10.5058C3.39539 10.173 3.28822 9.84721 3.08266 9.58333L1.63812 7.72891C1.01021 6.92283 1.39756 5.74531 2.38523 5.45773L4.65743 4.79615C4.98075 4.702 5.26134 4.50065 5.4519 4.226L6.79107 2.29596Z"
                                                  fill="currentColor"/>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div class="slider__descr">{{ slide.text }}</div>
                            <div class="slider__name">{{ slide.name }}</div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useCarouselStore } from '@/stores/carouselStore';


const store = useCarouselStore();
const slides = store.slides;
const modules = [Navigation, Pagination];
const prevButton = ref(null);
const nextButton = ref(null);
</script>

<style lang="scss">

.container {
    display: flex;
    justify-content: center;
    height: 100%;
    padding-top: 80px;
    @media (max-width: 1024px) {
        padding: 30px 10px 0;
    }
}
.slider {
    position: relative;
    width: 100%;
    max-width: 1224px;
    max-height: 314px;
    height: 314px;
    @media (max-width: 1440px) {
        max-width: 990px;
    }
    @media (max-width: 1024px) {
        width: 100%;
    }
    &__list {
        position: initial;
        display: flex;
        align-items: center;
        max-width: 1084px;
    }
    &__item {
        display: flex;
        padding: 15px;
        border-radius: 24px;
        border: 2px solid #B2B0C0;
        background: #F4F5FF;
        overflow: hidden;
        @media (max-width: 768px) {
            padding: 12px;
        }
    }
    &__img {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 24px;
        @media (max-width: 768px) {
            margin-right: 12px;
        }
        img {
            max-width: 120px;
            width: 120px;
            border-radius: 24px;
            @media (max-width: 768px) {
                max-width: 88px;
                width: 88px;
                border-radius: 24px;
            }
        }
    }
    &__line-star {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }
    &__star {
        margin-right: 4px;
        svg {
            width: 16px;
            height: 16px;
            min-width: 16px;
            min-height: 16px;
            color: #FFDE30;
        }
        &:last-child {
            margin-right: 0;
        }
    }
    &__descr {
        margin-bottom: 8px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
    }
    &__name {
        font-weight: 700;
    }
    .swiper-wrapper {
        max-height: 242px;
        height: 242px;
        @media (max-width: 768px) {
            max-height: 202px;
            height: 202px;
            margin-bottom: 16px;
        }
    }
    .swiper-pagination-bullet {
        background: #FE9539;
        opacity: 0.4;
        transition: 0.7s;
        &.swiper-pagination-bullet-active {
            opacity: 1;
        }
    }
    &__button-prev,
    &__button-next {
        position: absolute;
        z-index: 10;
        top: 50%;
        right: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateY(-50%);
        cursor: pointer;
        transition: 0.7s;
        @media (max-width: 768px) {
            top: initial;
            bottom: 0;
            transform: initial;
        }
        &:hover {
            opacity: 0.7;
        }
        svg {
            width: 48px;
            height: 48px;
            color: #FE9539;
        }
        &.swiper-button-disabled {
            cursor: default;
            svg {
                color: #C7CADF;
            }
        }
    }
    &__button-prev {
        left: 5px;
        right: initial;
        svg {
            transform: rotate(180deg);
        }
    }
}
.swiper {
    width: 100%;
    height: 100%;
}

</style>
