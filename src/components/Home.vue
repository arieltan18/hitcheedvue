<template>
    <div>
        <Professionals />
        <Articles />
    </div>
</template>

<script>
import Articles from './Articles/Articles.vue';
import Professionals from './Professionals/Professionals.vue';

export default {
    name: "Home",
    components: {
        Articles,
        Professionals
    },
    
}

</script>

