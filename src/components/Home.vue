<template>
    <div>
        <Explore />
        <PopularSearches />
        <Events />
        <!-- <Professionals /> -->
        <Articles />
        <Testimonials />
        <DownloadApp />
        <Footer />
    </div>
</template>

<script>
import Explore from './Explore/Explore.vue';
import PopularSearches from './PopularSearches/PopularSearches.vue';
import Events from './Events&Promotions/Events.vue';
import Articles from './Articles/ArticlesHomePage.vue';
// import Professionals from './Professionals/Professionals.vue';
import Testimonials from './Testimonials/Testimonials.vue';
import DownloadApp from './DownloadApp/DownloadApp.vue';
import Footer from './Footer/Footer.vue';

export default {
    name: "Home",
    components: {
        Explore,
        PopularSearches,
        Articles,
        Events,
        // Professionals,
        Testimonials,
        DownloadApp,
        Footer
    },
    
}

</script>

