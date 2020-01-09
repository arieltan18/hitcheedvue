<template>
    <div class="container">
        <div class="containter text-left mb-2 header">
            <div class="promotions-title">{{ this.category_name }} Promotions</div>
        </div>
        <div class="text-left mb-4">
            <div class="col-md-4 inline mb-2" v-for="promotion in this.promotions.data" :key="promotion.id">
                <router-link :to="{ name: 'promotions', params: { slug: promotion.slug }}">
                    <img class="mb-2" :src="promotion.cover_image" width="100%">
                    <div class="title line-clamp mb-2">{{ promotion.title }}</div>
                    <div class="professionals">by 
                        <router-link target= '_blank' :to="{ name: 'professional', params: { slug: promotion.professional.slug }}" class="bold">{{ promotion.professional.name }}</router-link>
                    </div>
                    <div class="date mt-2">{{ date(promotion.valid_to) }}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'PromotionsByCategory',
    props: [ 'category_name', 'promotions' ],
    methods: {
        date: function (date) {
            return moment(date).format('Do MMMM YYYY');
        }
    },
    
}
</script>

<style scoped>
.container
{
    padding: 3em 0 2em;
}

.promotions-title
{
    font-family: 'Cormorant Garamond';
    font-style: italic;
    font-size: 20px;
    text-align: left;
    color: #26140E;
}

.title
{
    font-family: 'Cormorant Garamond';
    font-size: 22px;
    color: #26140E;
    text-align: left;
    line-height: 1.2em;
    width: 100%;
}

.line-clamp 
{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

a:hover
{
    text-decoration: none;
    color: #26140E; 
}

.professionals
{
    font-family: 'Open Sans';
    font-size: 14px;
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

.mb
{
    margin-bottom: 6em;
}

.inline
{
    display: inline-block;
}

.header
{
    padding-left: 1rem;
}
</style>