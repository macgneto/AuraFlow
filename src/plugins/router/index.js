import { createRouter, createWebHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes';

export default function setupRouter() {
    return createRouter({
        history: createWebHistory(),
        routes,
    });
}
