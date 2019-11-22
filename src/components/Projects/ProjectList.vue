<template>
    <div>
        <router-link class="project-img" :to="{ name: 'project', params: { slug: this.project.slug }}">
            <img class="ar-image mb-3" :src="project.image" alt="project">
        </router-link>
        <div class="bottom-centered text-center">
            <h2 class="project-name">{{ project.name }}</h2>
            <div class="text-left" v-if="project.professional">
                <span class="review" v-for="(value, index) in parseInt(project.professional.rating)" :key="index">
                    <img src="https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/home-page/Group129.svg">
                </span>
                <span class="ml-1 review" v-if="project.professional.rating >1">({{ project.professional.rating }})</span>
            </div>
            <div class="text-left location">
                <div class="mr-2 d-inline pr-2">
                    <img src="https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/home-page/Group47.svg">
                    <span class="ml-2 review">{{ project.country ? project.country : project.professional.country }}</span>
                </div>
                <div class="pax-div d-inline pl-3" v-if="project.max_capacity!=0">
                    <img src="https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/home-page/Group48.svg">
                    <span class="ml-2 pax">{{ project.min_capacity }} - {{ project.max_capacity }} Pax</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "ProjectList",
    data() {
        return {
            project_id: ''
        }
    },
    props: ['project'],
    computed: {
        slug: function () {
            const routerLink = this.project.slug;
            return routerLink;
        }
    }

}
</script>

<style scoped>
.project-img
{
        background: rgba(255,255,255,0) linear-gradient(to bottom, transparent 10%, rgba(255,255,255,0.1) 72%, rgba(21,21,21,0.5) 87%, #161616 100%) repeat scroll 0 0;
}

.project-img>img
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

.project-name
{
    text-align: left;
    font-family: 'Cormorant Garamond';
    font-size: 24px;
    color: #26140E;
}

.review
{
    margin-right: 3px;
    font-size: 12px;
    letter-spacing: 0.6px;
    font-family: 'Open Sans';
    color: rgba(38, 20, 14, 0.5);
}

.pax-div
{
    border-left: 1px solid rgba(38, 20, 14, 0.2);
}

.pax
{
    font-size: 12px;
    color: rgba(38, 20, 14, 0.5);
}
</style>

