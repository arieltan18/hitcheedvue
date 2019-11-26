<template>
    <div class="mb">
        <div class="container text-left">
            <h3>Promotions <span>Ending Soon</span></h3>
        </div>
        <div class="container">
            <div class="pl-0 pr-5 col-md-6 inline box" v-for="promotion in promotions.data" :key="promotion.id">
                <router-link :to="{ name: 'promotions', params: { title: processTagName(promotion.title) }}">
                    <div class="pink-text">Ending in 3 days</div>
                    <img class="promotion-image mb-4" :src="promotion.cover_image" width="100%">
                    <div class="title line-clamp mb-2">{{ promotion.title }}</div>
                    <div class="professionals">by 
                        <router-link target='_blank' :to="{ name: 'professional', params: { slug: promotion.professional.slug }}" class="bold">{{ promotion.professional.name }}</router-link>
                    </div>
                    <div class="date mt-3">{{ date(promotion.valid_to) }}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { PROMOTIONS_PAGINATE } from '../../graphql/graphql.js';
import moment from 'moment';

export default {
    name: 'EndingSoonPromotions',
    data() {
        return {
            promotions: [],
        }
    },
    apollo: {
        promotions: {
            query: PROMOTIONS_PAGINATE,
            variables() {
                return {
                    first: 2,
                    page: 1
                }
            },
            update(data){
                return data.promotions_paginate;
            }
        }
    },
    methods: {
        date: function (date) {
            return moment(date).format('D MMMM YYYY');
        },
        processTagName(text) {
            text = text.replace(/\s+/g,'-').toLowerCase();;

            return text;
        }
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