<template>
    <div class="mb">
        <div class="container text-left mb-4 header">
            <h3><span>In-House Promotions</span></h3>
        </div>
        <div class="container text-left mb-4">
            <div class="col-md-3 inline mb-2" v-for="promotion in promotions.data" :key="promotion.id">
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
        <div class="container text-left mb-4">
            <div class="col-md-3 inline" v-for="promotion2 in promotions2.data" :key="promotion2.id">
                <router-link :to="{ name: 'promotions', params: { slug: promotion2.slug }}">
                    <img class="mb-2" :src="promotion2.cover_image" width="100%">
                    <div class="title line-clamp mb-2">{{ promotion2.title }}</div>
                    <div class="professionals">by 
                        <router-link target= '_blank' :to="{ name: 'professional', params: { slug: promotion2.professional.slug }}" class="bold">{{ promotion2.professional.name }}</router-link>
                    </div>
                    <div class="date mt-2">{{ date(promotion2.valid_to) }}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { PROMOTION_PAGINATE } from '../../graphql/graphql.js';
import moment from 'moment';

export default {
    name: 'InHousePromotions',
    data() {
        return {
            promotions: [],
            promotions2: []
        }
    },
    apollo: {
        promotions: {
            query: PROMOTION_PAGINATE,
            variables() {
                return {
                    promotion_for: 'in_house',
                    first: 4,
                    page: 1
                }
            },
            update(data){
                return data.promotion_paginate;
            }
        },
        promotions2: {
            query: PROMOTION_PAGINATE,
            variables() {
                return {
                    promotion_for: 'in_house',
                    first: 4,
                    page: 2
                }
            },
            update(data){
                return data.promotion_paginate;
            }
        }
    },
    methods: {
        date: function (date) {
            return moment(date).format('D MMMM YYYY');
        },
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

.title
{
    font-family: 'Cormorant Garamond';
    font-size: 22px;
    color: #26140E;
    text-align: left;
    line-height: 1.2em;
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
    padding-left: 2rem;
}
</style>