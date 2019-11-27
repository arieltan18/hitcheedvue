<template>
    <div class="mb">
        <div class="container text-left mb-4">
            <h3>Promotions <span>Exclusive to Hitcheed Users</span></h3>
        </div>
        <div class="container">
            <div class="d-flex justify-content-between"> 
                <a class="box" href="" v-for="promotion in promotions.data" :key="promotion.id">
                    <img class="mb-2" :src="promotion.cover_image" width="100%">
                    <div class="title line-clamp mb-2">{{ promotion.title }}</div>
                    <div class="professionals">by 
                        <router-link target= '_blank' :to="{ name: 'professional', params: { slug: promotion.professional.slug }}" class="bold">{{ promotion.professional.name }}</router-link>
                    </div>
                    <div class="date mt-2">{{ date(promotion.valid_to) }}</div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { PROMOTION_PAGINATE } from '../../graphql/graphql.js';
import moment from 'moment';

export default {
    name: 'ExclusivePromotions',
    data() {
        return {
            promotions: [],
        }
    },
    apollo: {
        promotions: {
            query: PROMOTION_PAGINATE,
            variables() {
                return {
                    promotion_for: 'exclusive',
                    first: 3,
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

.box
{
    width: 32%;
}

.mb
{
    margin-bottom: 6em;
}

</style>