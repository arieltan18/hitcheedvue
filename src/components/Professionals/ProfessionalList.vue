<template>
    <div>
        <router-link class="professional-img" :to="{ name: 'professional', params: { slug: this.professional.slug }}">
            <img v-if="professional.around_image != ''" class="ar-image" :src="resizedImageUrl(professional.around_image, 400, 400)" alt="professional">
            <img v-else-if="professional.cover_image !=''" class="ar-image" :src="resizedImageUrl(professional.cover_image, 400, 400)" alt="professional">
            <img v-else class="ar-image" :alt="professional.name">
        </router-link>
        <router-link class="link bottom-centered text-center" :to="{ name: 'professional', params: { slug: this.professional.slug }}">
            <h2 class="professional-name mt-3">{{ professional.name }}</h2>
            <div class="text-left" v-if="professional.rating > 1">
                <span class="review" v-for="(value, index) in parseInt(professional.rating)" :key="index">
                    <img src="https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group129.svg">
                </span>
                <span class="ml-1 review">({{professional.rating}})</span>
            </div>
            <div class="text-left location" v-if="professional.country.name">
                <div class="mr-2 d-inline pr-2">
                    <img src="https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/home-page/Group47.svg">
                    <span class="ml-2 review">{{ professional.country.name }}</span>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>

import {resizedImageUrl} from "../../helpers";

export default {
    name: "ProfessionalList",
    data() {
        return {
            professional_id: ''
        }
    },
    methods:{
        resizedImageUrl,
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

.professional-name
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

.link, .link:hover
{
    text-decoration: none;
}

@media screen and (max-width:415px) {
    .link
    {
        padding-left: 2em;
        padding-right: 2em;
        display: block;
    }
}
</style>

