<template>
    <div>
        <Explore />
        <PopularSearches />
        <EventsHomePage />
        <Articles />
        <Testimonials />
        <DownloadApp />
    </div>
</template>

<script>
import Explore from './Explore/Explore.vue';
import PopularSearches from './PopularSearches/PopularSearches.vue';
import EventsHomePage from './Events&Promotions/EventsHomePage.vue';
import Articles from './Articles/ArticlesHomePage.vue';
import Testimonials from './Testimonials/Testimonials.vue';
import DownloadApp from './DownloadApp/DownloadApp.vue';

export default {
    name: "Home",
    metaInfo:{
      title: 'Hitcheed | Singapore Wedding Services | Wedding Planning Website',
      titleTemplate: '%s'
    },
    components: {
        Explore,
        PopularSearches,
        Articles,
        EventsHomePage,
        Testimonials,
        DownloadApp,
    },
}

</script>

