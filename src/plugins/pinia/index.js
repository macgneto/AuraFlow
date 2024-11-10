import { createPinia } from 'pinia';
// import { useMainStore } from '@/stores/mainStore'; // Import the main store

// Create the Pinia instance
const pinia = createPinia();

// Extend Pinia to make the main store globally accessible as `$store`
pinia.use(({ store }) => {
    if (store.$id === 'main') {
        store.$store = store;
    }
});

export default pinia;
