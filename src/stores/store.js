import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
    state: () => ({
        message: 'Hello from Pinia!',
        count: 0,
    }),
    actions: {
        increment() {
            this.count++;
        },
        setMessage(newMessage) {
            this.message = newMessage;
        },
    },
});
