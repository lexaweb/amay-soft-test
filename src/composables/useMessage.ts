import { useCarouselStore } from '@/stores/carouselStore';

export function useMessage() {
    const store = useCarouselStore();

    const sendMessage = (message: object) => {
        window.parent.postMessage(message, '*');
    };

    const receiveMessage = (event: MessageEvent) => {
        const { id, name, text } = event.data;
        if (id && name && text) {
            store.updateSlide(id, name, text);
        }
    };

    window.addEventListener('message', receiveMessage);

    return { sendMessage };
}