const primeui = require('tailwindcss-primeui');

export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    plugins: [primeui], // PrimeUI integration with Tailwind compatibility
};