<template>
    <div class="panel-control">
        <div class="panel-control__list">
            <div
                class="panel-control__item"
                v-for="slide in slides"
                :key="slide.id"
            >
                <div class="panel-control__id">{{ slide.id }}</div>
                <div class="panel-control__inf">
                    <div class="panel-control__name">
                        <input
                            type="text"
                            placeholder="Введите имя"
                            v-model="slide.name"
                            @input="updateSlide(slide)"
                        >
                    </div>
                    <div class="panel-control__descr">
                        <textarea
                            rows="5"
                            cols="60"
                            placeholder="Введите текст"
                            v-model="slide.text" @input="updateSlide(slide)"
                        >
                        </textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCarouselStore } from '@/stores/carouselStore';
import { useMessage } from '@/composables/useMessage';

const store = useCarouselStore();
const slides = store.slides;
const { sendMessage } = useMessage();

const updateSlide = (slide: { id: number; name: string; text: string }) => {
    store.updateSlide(slide.id, slide.name, slide.text);
    sendMessage(slide); // Отправка данных родителю
};
</script>

<style scoped lang="scss">
.panel-control {
    padding: 20px;
    border: 2px solid #000;
    &__item {
        display: flex;
        padding: 10px;
        border: 1px solid #000;
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    &__id {
        margin-right: 15px;
        font-size: 18px;
    }
    &__name {
        margin-bottom: 10px;
        input {
            width: 300px;
            padding: 5px;
            font-size: 18px;
        }
    }
    &__descr {
        textarea {
            padding: 5px;
            width: 100%;
            font-size: 16px;
        }
    }
}
</style>