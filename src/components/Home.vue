<template>
    <div>
        <Explore />
        <PopularSearches />
        <Professionals />
        <Articles />
        <Testimonials />
        <DownloadApp />
    </div>
</template>

<script>
import Explore from './Explore/Explore.vue';
import PopularSearches from './PopularSearches/PopularSearches.vue';
import Articles from './Articles/Articles.vue';
import Professionals from './Professionals/Professionals.vue';
import Testimonials from './Testimonials/Testimonials.vue';
import DownloadApp from './DownloadApp/DownloadApp.vue';

export default {
    name: "Home",
    components: {
        Explore,
        PopularSearches,
        Articles,
        Professionals,
        Testimonials,
        DownloadApp
    },
    
}

</script>

