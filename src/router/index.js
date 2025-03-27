import { createRouter, createWebHistory } from 'vue-router';
import Recommend from '@/views/Recommend.vue';

const routes = [
    { path: '/recommend', component: Recommend },
    // 其他路由...
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
