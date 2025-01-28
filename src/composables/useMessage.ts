import { useCarouselStore } from '@/stores/carouselStore';

export function useMessage() {
    const store = useCarouselStore();

    const sendMessage = (message: object) => {
        try {
            const safeData = JSON.parse(JSON.stringify(message));
            window.parent.postMessage(safeData, "*");
        } catch (error) {
            console.error("DataCloneError: Невозможно отправить сообщение", error);
        }
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