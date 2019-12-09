<template>
    <div class="mb">
        <div class="container text-left mb-4">
            <h3><span>More Events</span></h3>
        </div>
        <div class="container text-left">
            <div class="d-flex justify-content-between"> 
                <div class="box" href="" v-for="event in events.data" :key="event.id">
                    <router-link :to="{ name: 'events', params: { slug: event.slug }}">
                        <img class="mb-2" :src="event.cover_image" width="100%">
                        <div class="title line-clamp mb-2">{{ event.title }}</div>
                        <div class="professionals">by 
                            <router-link target= '_blank' :to="{ name: 'professional', params: { slug: event.professional.slug }}" class="bold">{{ event.professional.name }}</router-link>
                        </div>
                        <div class="date mt-2 mb-1">
                            <img class="mr-1" src="https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/Group644%402x.png" width="20px">
                            {{ date(event.date_from) }} - {{ date(event.valid_to) }}
                        </div>
                        <div class="date" v-if="event.location">
                            <img class="mr-2" src="https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/Group611%402x.png" width="13px">
                            {{ event.location }}
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { EVENT_PROMOTIONS_PAGINATE } from '../../graphql/graphql.js';
import { PROMOTIONS_PAGINATE } from '../../graphql/graphql.js';
import moment from 'moment';

export default {
    name: 'MoreEvents',
    data() {
        return {
            events: [],
        }
    },
    apollo: {
        events: {
            query: EVENT_PROMOTIONS_PAGINATE,
            variables() {
                return {
                    first: 3,
                    page: 1
                }
            },
            update(data){
                return data.event_promotions_paginate;
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