import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

export default function setupPrimeVue(app) {
    app.use(PrimeVue, { theme: 'none' });
    app.component('Button', Button);
    app.component('InputText', InputText);
}
