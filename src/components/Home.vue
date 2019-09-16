<template>
    <div>
        <Professionals />
        <Articles />
        <Testimonials />
    </div>
</template>

<script>
import Articles from './Articles/Articles.vue';
import Professionals from './Professionals/Professionals.vue';
import Testimonials from './Testimonials/Testimonials.vue';

export default {
    name: "Home",
    components: {
        Articles,
        Professionals,
        Testimonials
    },
    
}

</script>

