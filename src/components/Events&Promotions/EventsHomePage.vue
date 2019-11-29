<template>
    <div class="container-fluid mb-5">
        <div class="container">
            <div class="row mb-2">
                <div class="col-sm-12 text-center">
                    <div class="title">
                        <img src="https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Events%26Promotions.svg" width="250px">
                    </div>
                </div>
            </div>
            <div class="col-md-12 slider-section">
                <nav class="mb-4">
                    <ul class="nav nav-tabs nav-fill justify-content-center" id="nav-tab" role="tablist">
                        <li>
                            <a class="nav-item nav-link active" id="nav-events-tab" data-toggle="tab" href="#nav-events" role="tab" aria-controls="nav-events" aria-selected="true">
                                <span class="nav-text-link">Events</span>
                            </a>
                        </li>
                        <li>
                            <a class="nav-item nav-link" id="nav-promotions-tab" data-toggle="tab" href="#nav-promotions" role="tab" aria-controls="nav-promotions" aria-selected="false">
                                <span class="nav-text-link">Promotions</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="text-center mt-5">
                    <div class="link">
                        <router-link :to="{ name:'events&promotions' }" class="link-text">See All Events & Promotions</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '../../assets/css/vueper-slider.css';
import { VueperSlides, VueperSlide } from 'vueperslides'
import { EVENT_PROMOTIONS_PAGINATE } from '../../graphql/graphql.js';
import { PROMOTIONS_PAGINATE } from '../../graphql/graphql.js';

export default {
    name: "EventsHomePage",
    components: {
        VueperSlides,
        VueperSlide,
    },
    data() {
        return {
            events: [],
            promotions: []
        }
    },
    apollo: {
        events: {
            query: EVENT_PROMOTIONS_PAGINATE,
            variables() {
                return {
                    first: 2,
                    page: 1
                }
            },
            update(data){
                return data.event_promotions_paginate;
            }
        },
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
    }
}
</script>

<style lang="scss" scoped>
.container-fluid
{
    background-image: url('https://d1qc9wtuffqlue.cloudfront.net/images/home-page/cushion-rings-silky-fabric-28148082x.png');
    padding-top: 3%;
    padding-bottom: 3%;
}
h1
{
    font-family: 'Cormorant Garamond';
    font-size: 30px;
    margin-bottom: 30px;
    color: #26140E;
}
#nav-tab
{
    width: 65%;
    margin: auto;
}
.nav-link
{
    text-transform: uppercase;
    font-family: 'Open Sans';
    font-size: 12px;
    letter-spacing: 1.2px;
    color: #26140E;
}
button:focus, button:active
{
    outline: none !important;
    box-shadow: none !important;
}
a.nav-item.nav-link.active,
.nav-tabs .nav-link.active
{
    font-weight: bold;
    background: none;
    .nav-text-link
    {
        padding-bottom: 4px;
        border-bottom: 1px solid #88D1CF;
    }
}
.nav-tabs
{
    border: none;
}
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link
{
    color:#26140E;
    border:none;
    padding-bottom:2px;

}
li
{
    display: inline; list-style-type: none; margin-left: 0;
}
li:before { content: "/"; padding-right: 3px; }
li:first-child:before { content: ""; padding-right: 0; }

.nav-fill .nav-item
{
    display: inline !important;
}
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus
{
    border-color: #ffffff;
}

.link
{
    font-family: 'Cormorant Garamond';
    font-style: italic;
    font-size: 18px;
    cursor: pointer;
}
.link-text
{
    padding-bottom:2px;
    border-bottom: 0.5px solid #26140E;
    color: #26140E;
    text-decoration: none;
    text-transform: capitalize;
}
</style>
