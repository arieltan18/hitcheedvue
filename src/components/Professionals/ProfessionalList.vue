<template>
    <div>
        <router-link class="professional-img" :to="slug">
            <img class="ar-image" :src="professional.around_image" alt="professional">
        </router-link>
        <div class="bottom-centered text-center">
            <h2>{{ professional.country }}</h2>
            <p>{{ professional.name }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: "Professionals",
    props: ['professional'],
    computed: {
        slug: function () {
            const routerLink = '/professionals/' + this.professional.slug;
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
    width: 100%;
    max-width: 100%;
    display: block;
}

.ar-image
{
    position: relative;
    z-index: -1;
}

.bottom-centered
{
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.bottom-centered h2
{
    font-size: 27px;
    font-family: 'Cormorant Garamond';
    color: #fff;
}

.text-center
{
    text-align: center;
}

.bottom-centered p
{
    color: #fff;
    text-transform: uppercase;
}

p
{
    font-family: 'Open Sans';
}
</style>

