import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('../pages/HolePage.vue')
    },
    {
        path: '/about',
        component: () => import('../pages/AboutClientsPage')
    },
    {
        path: '/service',
        component: () => import('../pages/ServicesPage')
    },
    {
        path: '/portfolio',
        component: () => import('../pages/PartfolioPage')
    },
    {
        path: '/team',
        component: () => import('../pages/TeamPage')
    },
    {
        path: '/reviews',
        component: () => import('../pages/ReviewsPage')
    },
    {
        path: '/blog',
        component: () => import('../pages/BlogPage')
    },
    {
        path: '/sendMessage',
        component: () => import('../pages/ContactPage')
    },
    {
        path: '/creator',
        component: () => import('../pages/CreaterPage')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})