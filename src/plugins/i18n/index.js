import { createI18n } from 'vue-i18n';
import en from './en.json';
import el from './el.json';

// Set up translations
const messages = {
    en, // English translations
    el  // Greek translations
};

// Create i18n instance with configuration
const i18n = createI18n({
    locale: 'en', // Default language
    fallbackLocale: 'en',
    messages,
});

export default i18n;
