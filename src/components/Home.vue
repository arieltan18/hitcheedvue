<template>
    <div>
        <Explore />
        <Professionals />
        <Articles />
        <Testimonials />
    </div>
</template>

<script>
import Explore from './Explore/Explore.vue';
import Articles from './Articles/Articles.vue';
import Professionals from './Professionals/Professionals.vue';
import Testimonials from './Testimonials/Testimonials.vue';

export default {
    name: "Home",
    components: {
        Explore,
        Articles,
        Professionals,
        Testimonials
    },
    
}

</script>

