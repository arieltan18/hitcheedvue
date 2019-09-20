<template>
    <div class="mt-4">
        <CoverPhoto />
        <Professionals />
        <Articles />
        <Testimonials />
    </div>
</template>

<script>
import CoverPhoto from './CoverPhoto/CoverPhoto.vue';
import Articles from './Articles/Articles.vue';
import Professionals from './Professionals/Professionals.vue';
import Testimonials from './Testimonials/Testimonials.vue';

export default {
    name: "Home",
    components: {
        CoverPhoto,
        Articles,
        Professionals,
        Testimonials
    },
    
}

</script>

