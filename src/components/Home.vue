<template>
    <div>
        <Explore />
        <PopularSearches />
        <!-- <Events /> -->
        <Articles />
        <Testimonials />
        <DownloadApp />
    </div>
</template>

<script>
import Explore from './Explore/Explore.vue';
import PopularSearches from './PopularSearches/PopularSearches.vue';
//import Events from './Events&Promotions/Events.vue';
import Articles from './Articles/ArticlesHomePage.vue';
import Testimonials from './Testimonials/Testimonials.vue';
import DownloadApp from './DownloadApp/DownloadApp.vue';

export default {
    name: "Home",
    components: {
        Explore,
        PopularSearches,
        Articles,
        // Events,
        Testimonials,
        DownloadApp,
    },
}

</script>

