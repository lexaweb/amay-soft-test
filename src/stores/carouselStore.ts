import { defineStore } from 'pinia';

interface Slide {
    id: number;
    name: string;
    text: string;
    img: string;
}

export const useCarouselStore = defineStore('carousel', {
    state: () => ({
        slides: [
            { id: 1, name: 'User 1', text: 'Slide 1 content', img: require('@/assets/img/alphabet.png') },
            { id: 2, name: 'User 2', text: 'Slide 2 content', img: require('@/assets/img/cars.png') },
            { id: 3, name: 'User 3', text: 'Slide 3 content', img: require('@/assets/img/colors.png') },
            { id: 4, name: 'User 4', text: 'Slide 4 content', img: require('@/assets/img/farm.png') },
            { id: 5, name: 'User 5', text: 'Slide 5 content', img: require('@/assets/img/puzzle.png') },
        ] as Slide[],
    }),
    actions: {
        updateSlide(id: number, name: string, text: string) {
            const slide = this.slides.find((s) => s.id === id);
            if (slide) {
                slide.name = name;
                slide.text = text;
            }
        },
    },
});