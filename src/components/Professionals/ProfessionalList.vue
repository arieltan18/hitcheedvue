<template>
    <div>
        <router-link class="professional-img" :to="{ name: 'professional', params: { slug: slug, id: professional.id }}">
            <img class="ar-image mb-2" :src="professional.around_image" alt="professional">
        </router-link>
        <!-- <div class="bottom-centered text-center">
            <h2>{{ professional.country }}</h2>
            <p>{{ professional.name }}</p>
        </div> -->
        <div class="bottom-centered text-center">
            <h2>{{ professional.name }}</h2>
            <hr>
            <p>{{ professional.rating }}</p>
            <p>{{ professional.price_text }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: "Professionals",
    data() {
        return {
            professional_id: ''
        }
    },
    props: ['professional'],
    computed: {
        slug: function () {
            const routerLink = this.professional.slug;
            return routerLink;
        }
    }

}
</script>

<style scoped>
.professional-img
{
        background: rgba(255,255,255,0) linear-gradient(to bottom, transparent 10%, rgba(255,255,255,0.1) 72%, rgba(21,21,21,0.5) 87%, #161616 100%) repeat scroll 0 0;
}

.professional-img>img
{
    width: 266px;
    height: 266px;
    object-fit: cover;
    max-width: 100%;
    display: block;
    margin: auto;
}

.ar-image
{
    position: relative;
    z-index: -1;
}


.bottom-centered h2
{
    font-size: 24px;
    font-family: 'Cormorant Garamond';
    color: #26140E;
}

.text-center
{
    text-align: center;
}

p
{
    font-family: 'Open Sans';
    color: #25130e;
    margin: 5px 0;
    text-transform: none;
}
</style>

