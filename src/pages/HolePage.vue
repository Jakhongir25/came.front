<template>
    <SliderPage/>
    <AboutClientsPage/>
    <ServicesPage/>
    <PartfolioPage/>
    <TeamPage/>
    <ReviewsPage/>
    <BlogPage/>
    <ContactPage/>
</template>

<script>
import SliderPage from '@/pages/SliderPage';
import AboutClientsPage from '@/pages/AboutClientsPage';
import ServicesPage from '@/pages/ServicesPage'
import PartfolioPage from './PartfolioPage.vue';
import TeamPage from '@/pages/TeamPage';
import ReviewsPage from '@/pages/ReviewsPage';
import BlogPage from '@/pages/BlogPage';
import ContactPage from '@/pages/ContactPage.vue'
export default {
    name: 'HolePage',
    components: {SliderPage, AboutClientsPage, ServicesPage, PartfolioPage, TeamPage, ReviewsPage, BlogPage, ContactPage}
}
</script>

<style
        PartfolioPage>

</style>