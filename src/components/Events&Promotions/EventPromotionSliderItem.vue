<template>
    <div class="m-3">
        <router-link :to="{ name: 'data', params: { slug: data.slug }}">
            <img class="promotion-image mb-4" :src="resizedImageUrl(data.cover_image, 500, 300)" width="100%">
            <div class="title line-clamp mb-2">{{ data.title }}</div>
            <div class="professionals">by
                <router-link target= '_blank' :to="{ name: 'professional', params: { slug: data.professional.slug }}" class="bold">{{ data.professional.name }}</router-link>
            </div>
            <div class="date mt-2">
                <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
                {{ date(data.date_from) }} - {{ date(data.valid_to) }}
            </div>
            <div class="date" v-if="data.location">
                <img src="https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/home-page/Group47.svg">
                {{ data.location }}
            </div>
        </router-link>
    </div>
</template>

<script>
    import moment from 'moment';
    import {resizedImageUrl} from "../../helpers";

    export default {
        name: "EventPromotionSliderItem",
        props: ['data'],
        methods:{
            date: function (date) {
                return moment(date).format('D MMMM YYYY');
            },
            resizedImageUrl,
        }
    }
</script>

<style scoped>
    h3
    {
        text-transform: capitalize;
        color: #26140E;
        font-family: 'Cormorant Garamond';
        font-weight: normal;
        font-size: 24px;
    }

    h3 span
    {
        font-style: italic;
    }

    .box
    {
        vertical-align:top;
    }

    .inline
    {
        display: inline-block;
    }

    .title
    {
        font-family: 'Cormorant Garamond';
        font-size: 24px;
        color: #26140E;
        text-align: left;
        line-height: 1em;
    }

    a:hover
    {
        text-decoration: none;
        color: #26140E;
    }

    .professionals
    {
        font-family: 'Open Sans';
        font-size: 16px;
        color: #26140E;
        text-align: left;
    }

    .bold
    {
        font-weight: bold;
    }

    a
    {
        color: #26140E;
    }

    .date
    {
        font-family: 'Open Sans';
        font-size: 12px;
        color: #26140E;
        opacity: 0.5;
        text-align: left;
    }

    .line-clamp
    {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .mb
    {
        margin-bottom: 6em;
    }

    .promotion-image
    {
        position: relative;
    }

    .pink-text
    {
        font-family: 'Open Sans';
        font-size: 14px;
        color : #ffffff;
        background-color: rgba(248, 188, 178, 0.9);
        font-weight: bold;
        position: absolute;
        text-transform: uppercase;
        padding: 5px 15px;
        z-index: 1;
        margin-top: 20px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
</style>
