<template>
    <div class="container-fluid mb-5">
        <div class="container">
            <div class="row mb-4">
                <div class="col-sm-12 text-center">
                    <h1>Popular Searches</h1>
                </div>
            </div>
            <div class="col-md-12 slider-section">
                <nav class="mb-4">
                    <ul class="nav nav-tabs nav-fill justify-content-center" id="nav-tab" role="tablist">
                        <li>
                            <a class="nav-item nav-link active" id="nav-hotels-tab" data-toggle="tab" href="#nav-hotels" role="tab" aria-controls="nav-hotels" aria-selected="true">
                                <span class="nav-text-link">HOTELS</span>
                            </a>
                        </li>
                        <li>
                            <a class="nav-item nav-link" id="nav-venues-tab" data-toggle="tab" href="#nav-venues" role="tab" aria-controls="nav-profile" aria-selected="false">
                                <span class="nav-text-link">VENUES</span>
                            </a>
                        </li>
                        <li>
                            <a class="nav-item nav-link" id="nav-bridal-tab" data-toggle="tab" href="#nav-bridal" role="tab" aria-controls="nav-bridal" aria-selected="false">
                                <span class="nav-text-link">BRIDAL STUDIOS</span>
                            </a>
                        </li>
                        <li>
                            <a class="nav-item nav-link" id="nav-photographers-tab" data-toggle="tab" href="#nav-photographers" role="tab" aria-controls="nav-photographers" aria-selected="false">
                                <span class="nav-text-link">PHOTOGRAPHERS</span>
                            </a>
                        </li>
                        <li>
                            <a class="nav-item nav-link" id="nav-others-tab" data-toggle="tab" href="#nav-others" role="tab" aria-controls="nav-others" aria-selected="false">
                               <span class="nav-text-link">OTHER COUNTRIES</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-hotels" role="tabpanel" aria-labelledby="nav-hotels-tab">
                        <vueper-slides class="no-shadow" :visible-slides="3" slide-multiple :slide-ratio="1/4" :dragging-distance="70" :bullets="false" arrows-outside="true" :fixedHeight="true" :breakpoints="{ 800: { visibleSlides: 2 } }">
                            <v-icon slot="arrowLeft" color="white" large><img src="https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/home-page/Group29.svg" alt="left-arrow" width="25px"></v-icon>
                            <v-icon slot="arrowRight" color="white" large><img src="https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/home-page/Group28.svg" alt="right-arrow" width="25px;"></v-icon>
                            <vueper-slide class="mr-4" v-for="hotel in hotels" :key="hotel.id" :image="hotel.around_image" >
                                <div slot="slideContent">
                                        <div class="slider-white-box">{{ hotel.name }}</div>
                                    </div>
                            </vueper-slide>
                        </vueper-slides>
                    </div>
                    <div class="tab-pane fade" id="nav-venues" role="tabpanel" aria-labelledby="nav-venues-tab">
                        <vueper-slides class="no-shadow" :visible-slides="3" slide-multiple :slide-ratio="1/4" :dragging-distance="70" :bullets="false" :arrows-outside="true" :fixedHeight="true" :breakpoints="{ 800: { visibleSlides: 2 } }">
                            <v-icon slot="arrowLeft" style="background-color:black;" medium><img src="https://hitcheed-rsvp.s3-ap-southeast-1.amazonaws.com/img/july/left-arrow.png"></v-icon>
                            <v-icon slot="arrowRight" style="background-color:black;" medium><img src="https://hitcheed-rsvp.s3-ap-southeast-1.amazonaws.com/img/july/right-arrow.png" width="70px"></v-icon>
                            <vueper-slide class="mr-4" v-for="venue in venues" :key="venue.id" :image="venue.around_image" >
                                <div slot="slideContent">
                                        <div class="slider-white-box">{{ venue.name }}</div>
                                    </div>
                            </vueper-slide>
                        </vueper-slides>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag'
import '../../assets/css/vueper-slider.css';
import { VueperSlides, VueperSlide } from 'vueperslides'
import ProfessionalList from '../Professionals/ProfessionalList.vue'
import { PROFESSIONALS_BY_CATEGORY } from '../../graphql/graphql.js';

export default {
    name: 'PopularSearches',
    components: {
        VueperSlides, 
        VueperSlide,
        ProfessionalList
    },
    data() {
        return {
            hotelId: 14,
            bridalId: 1,
            venuesId: 5,
            photographersId: 2,
        }
    },
    apollo: {
        hotels: {
            query: PROFESSIONALS_BY_CATEGORY,
            variables() {
                return {
                    category_id: this.hotelId
                }
            },
            update(data){
                return data.professionals_by_category;
            }
        },
        bridals: {
            query: PROFESSIONALS_BY_CATEGORY,
            variables() {
                return {
                    category_id: this.bridalId
                }
            },
            update(data){
                return data.professionals_by_category;
            }
        },
        venues: {
            query: PROFESSIONALS_BY_CATEGORY,
            variables() {
                return {
                    category_id: this.venuesId
                }
            },
            update(data){
                return data.professionals_by_category;
            }
        },
        photographers: {
            query: gql`
                query professionals_by_category($category_id: Int!){
                    professionals_by_category(category_id: $category_id) {
                        id,
                        name,
                        slug,
                        cover_image,
                        around_image,
                        profile_image
                    }
                }`,
            variables() {
                return {
                    category_id: this.photographersId
                }
            },
            update(data){
                return data.professionals_by_category;
            }
        },
    },
    computed: {

    },
    mounted() {

    }
    

}
</script>

<style lang="scss" scoped>
.container-fluid
{
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
.vueperslides--fixed-height 
{ 
    height: 360px; 
}

.slider-white-box
{
    color: #26140E;
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 1.2px;
    background-color: #ffffff;
    padding:15px 10px;
    text-align: center;
    text-transform: uppercase;
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
.tab-content > .tab-pane 
{
  display: block !important;
  height: 0 !important;
  overflow: hidden;
}
.tab-content > .active 
{
  height: auto !important;
}
.tab-content > .tab-pane 
{
    display: none;
}
 .tab-content > .active 
 {
    display: block;
  
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
</style>