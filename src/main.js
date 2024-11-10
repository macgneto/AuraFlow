// import { createApp } from 'vue';
// import App from './App.vue';
// import setupPrimeVue from './plugins/primevue';
// import setupRouter from './plugins/router';
// import i18n from './plugins/i18n';     // Import i18n setup
// import pinia from './plugins/pinia';
// import { useMainStore } from '@/stores/store';
//
//
//
//
// import PrimeVue from "primevue/config";
// // import './assets/tailwind.css'; // Tailwind CSS
// // import './style.scss'; // Custom styles
//
// import './assets/tailwind.css'; // Tailwind CSS
// import './assets/style.scss';     // Custom variables (Lara theme colors)
//
//
//
// const app = createApp(App);
//
// setupPrimeVue(app); // Setup PrimeVue with theme
// const router = setupRouter(); // Setup Vue Router
//
// // app.use(PrimeVue, { unstyled: true }); // Enable unstyled mode
// app.use(i18n);
// app.use(pinia);
// app.use(router);
//
//
//
// const mainStore = useMainStore();
// app.config.globalProperties.$store = mainStore;
//
// app.mount('#app');



import { createApp } from 'vue';
import App from './App.vue';
import i18n from './plugins/i18n';
import pinia from './plugins/pinia';
import setupRouter from './plugins/router';
import primevue from './plugins/primevue';
import { useMainStore } from '@/stores/store';

import './assets/tailwind.css';
import './assets/style.scss';
import 'primeicons/primeicons.css'

const router = setupRouter();

const app = createApp(App);

app.use(i18n);
app.use(pinia);
app.use(router);
app.use(primevue);

const mainStore = useMainStore();
app.config.globalProperties.$store = mainStore;

app.mount('#app');
