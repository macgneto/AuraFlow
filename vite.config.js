import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {VueRouterAutoImports} from 'unplugin-vue-router';
import VueRouter from 'unplugin-vue-router/vite';
import {PrimeVueResolver} from '@primevue/auto-import-resolver';
import {fileURLToPath} from 'node:url'

export default defineConfig({
    plugins: [
        vue(),
        VueRouter({
            routesFolder: 'src/pages', // Scans `src/pages` for route-based files
            dts: './typed-router.d.ts', // Types generation for routes
            extensions: ['.vue'], // Scan for Vue files
            importMode: 'async',
        }),
        Components({
            resolvers: [PrimeVueResolver()], // Auto import PrimeVue components
        }),
        AutoImport({
            imports: ['vue', 'pinia', VueRouterAutoImports], // Auto-import Vue, Pinia, and Router utilities
            vueTemplate: true,
            eslintrc: {enabled: true, filepath: './.eslintrc-auto-import.json'},
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            // '@themeConfig': fileURLToPath(
            //     new URL('./themeConfig.js', import.meta.url),
            // ),
            // '@core': fileURLToPath(new URL('./src/@core', import.meta.url)),
            // '@layouts': fileURLToPath(new URL('./src/@layouts', import.meta.url)),
            // '@images': fileURLToPath(
            //     new URL('./src/assets/images/', import.meta.url),
            // ),
            // '@styles': fileURLToPath(
            //     new URL('./src/assets/styles/', import.meta.url),
            // ),
            // '@configured-variables': fileURLToPath(
            //     new URL(
            //         './src/assets/styles/variables/_template.scss',
            //         import.meta.url,
            //     ),
            // ),
            // '@axios': fileURLToPath(new URL('./src/utils/axios', import.meta.url)),
        },
    },
});
