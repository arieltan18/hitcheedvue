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
                            <a class="popular-nav-item nav-link active" id="nav-hotels-tab" data-toggle="tab" href="#nav-hotels" role="tab" aria-controls="nav-hotels" aria-selected="true">
                                <span class="nav-text-link">Hotels</span>
                            </a>
                        </li>
                        <li>
                            <a class="popular-nav-item nav-link" id="nav-venues-tab" data-toggle="tab" href="#nav-venues" role="tab" aria-controls="nav-venues" aria-selected="false">
                                <span class="nav-text-link">Venues</span>
                            </a>
                        </li>
                        <li>
                            <a class="popular-nav-item nav-link" id="nav-bridals-tab" data-toggle="tab" href="#nav-bridals" role="tab" aria-controls="nav-bridals" aria-selected="false">
                                <span class="nav-text-link">Bridal Studios</span>
                            </a>
                        </li>
                        <li>
                            <a class="popular-nav-item nav-link" id="nav-photographers-tab" data-toggle="tab" href="#nav-photographers" role="tab" aria-controls="nav-photographers" aria-selected="false">
                                <span class="nav-text-link">Photographers</span>
                            </a>
                        </li>
                        <li>
                            <a class="popular-nav-item nav-link" id="nav-others-tab" data-toggle="tab" href="#nav-others" role="tab" aria-controls="nav-others" aria-selected="false">
                               <span class="nav-text-link">Other Countries</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="tab-content popular-searches py-3 px-3 px-sm-0" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-hotels" role="tabpanel" aria-labelledby="nav-hotels-tab">
                        <vueper-slides class="no-shadow" arrows-outside :visible-slides="3" slide-multiple :touchable="false" :slide-ratio="1/4" :gap="3" :bullets="false" fixedHeight="360px" 
                            :breakpoints="{ 600: { visibleSlides: 1, arrowsOutside: true, slideRatio: 1/4 } }">
                            <template v-slot:arrow-left>
                                <img class="ml-4" src="https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group29.svg" alt="left-arrow" width="25px">
                            </template>
                            <template v-slot:arrow-right>
                                <img class="mr-4" src="https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group28.svg" alt="right-arrow" width="25px;">
                            </template>
                            <vueper-slide v-for="hotel in hotels" :key="hotel.id" :image="hotel.cover_photo" :link="hotel.link" >
                                <template v-slot:content>
                                    <div class="slider-white-box">{{ hotel.name }}</div>
                                </template>
                            </vueper-slide>
                        </vueper-slides>
                        <div class="text-center mt-5">
                            <div class="link">
                                <router-link class="link-text" to="/category/hotels/all">See More Hotels</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-venues" role="tabpanel" aria-labelledby="nav-venues-tab">
                        <vueper-slides class="no-shadow" arrows-outside :visible-slides="3" slide-multiple :touchable="false" :slide-ratio="1/4" :gap="3" :bullets="false" fixedHeight="360px" 
                            :breakpoints="{ 600: { visibleSlides: 1, arrowsOutside: true, slideRatio: 1/4 } }">
                            <template v-slot:arrow-left>
                                <img class="ml-4" src="https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group29.svg" alt="left-arrow" width="25px">
                            </template>
                            <template v-slot:arrow-right>
                                <img class="mr-4" src="https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group28.svg" alt="right-arrow" width="25px;">
                            </template>
                            <vueper-slide v-for="venue in venues" :key="venue.id" :image="venue.cover_photo" :link="venue.link" >
                                <template v-slot:content>
                                    <div class="slider-white-box">{{ venue.name }}</div>
                                </template>
                            </vueper-slide>
                        </vueper-slides>
                        <div class="text-center mt-5">
                            <div class="link">
                                <router-link class="link-text" to="/category/venues/all">See More Venues</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-bridals" role="tabpanel" aria-labelledby="nav-bridals-tab">
                        <vueper-slides class="no-shadow" arrows-outside :visible-slides="3" slide-multiple :touchable="false" :slide-ratio="1/4" :gap="3" :bullets="false" fixedHeight="360px" 
                            :breakpoints="{ 600: { visibleSlides: 1, arrowsOutside: true, slideRatio: 1/4 } }">
                            <template v-slot:arrow-left>
                                <img class="ml-4" src="https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group29.svg" alt="left-arrow" width="25px">
                            </template>
                            <template v-slot:arrow-right>
                                <img class="mr-4" src="https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group28.svg" alt="right-arrow" width="25px;">
                            </template>
                            <vueper-slide v-for="bridal in bridals" :key="bridal.id" :image="bridal.cover_photo"  :link="bridal.link">
                                <template v-slot:content>
                                    <div class="slider-white-box">{{ bridal.name }}</div>
                                </template>
                            </vueper-slide>
                        </vueper-slides>
                        <div class="text-center mt-5">
                            <div class="link">
                                <router-link class="link-text" to="/category/bridal-studios/all">See More Bridal Studios</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-photographers" role="tabpanel" aria-labelledby="nav-photographers-tab">
                        <vueper-slides class="no-shadow" arrows-outside :visible-slides="3" slide-multiple :touchable="false" :slide-ratio="1/4" :gap="3" :bullets="false" fixedHeight="360px" 
                            :breakpoints="{ 600: { visibleSlides: 1, arrowsOutside: true, slideRatio: 1/4 } }">
                            <template v-slot:arrow-left>
                                <img class="ml-4" src="https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group29.svg" alt="left-arrow" width="25px">
                            </template>
                            <template v-slot:arrow-right>
                                <img class="mr-4" src="https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group28.svg" alt="right-arrow" width="25px;">
                            </template>
                            <vueper-slide v-for="photographer in photographers" :key="photographer.id" :image="photographer.cover_photo" :link="photographer.link">
                                <template v-slot:content>
                                    <div class="slider-white-box">{{ photographer.name }}</div>
                                </template>
                            </vueper-slide>
                        </vueper-slides>
                        <div class="text-center mt-5">
                            <div class="link">
                                <router-link class="link-text" to="/category/photographers/all">See More Photographers</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-others" role="tabpanel" aria-labelledby="nav-others-tab">
                        <vueper-slides class="no-shadow" arrows-outside :visible-slides="3" slide-multiple :touchable="false" :slide-ratio="1/4" :gap="3" :bullets="false" fixedHeight="360px" 
                            :breakpoints="{ 600: { visibleSlides: 1, arrowsOutside: true, slideRatio: 1/4 } }">
                            <template v-slot:arrow-left>
                                <img class="ml-4" src="https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group29.svg" alt="left-arrow" width="25px">
                            </template>
                            <template v-slot:arrow-right>
                                <img class="mr-4" src="https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group28.svg" alt="right-arrow" width="25px;">
                            </template>
                            <vueper-slide v-for="other in others" :key="other.id" :image="other.cover_photo" :link="other.link">
                                <template v-slot:content>
                                    <div class="slider-white-box">{{ other.name }}</div>
                                </template>
                            </vueper-slide>
                        </vueper-slides>
                        <div class="text-center mt-5">
                            <div class="link">
                                <router-link class="link-text" to="/category/others/all">See More Other Countries</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import '../../assets/css/vueper-slider.css';
import { VueperSlides, VueperSlide } from 'vueperslides'
import { TAGS_BY_CATEGORY } from '../../graphql/graphql.js';

export default {
    name: 'PopularSearches',
    components: {
        VueperSlides,
        VueperSlide,
    },
    data() {
        return {
            hotelId: 14,
            bridalId: 1,
            venuesId: 5,
            photographersId: 2,
            others: [],
        }
    },
    apollo: {
        hotels: {
            query: TAGS_BY_CATEGORY,
            variables() {
                return {
                    category_id: this.hotelId
                }
            },
            update(data){
                var results = data.tags_by_category;

                //loop the results 
                Object.keys(results).forEach(function(index){
                    var tag_name = results[index].name;

                    tag_name = tag_name.replace(/\s+/g, '-').toLowerCase();
                    
                    //store the tag link
                    results[index].link = 'category/hotels/' + tag_name;
                    
                });

                return data.tags_by_category;
            }
        },
        bridals: {
            query: TAGS_BY_CATEGORY,
            variables() {
                return {
                    category_id: this.bridalId
                }
            },
            update(data){
                var results = data.tags_by_category;

                //loop the results 
                Object.keys(results).forEach(function(index){
                    var tag_name = results[index].name;

                    tag_name = tag_name.replace(/\s+/g, '-').toLowerCase();
                    
                    //store the tag link
                    results[index].link = 'category/bridal-studios/' + tag_name;
                    
                });

                return data.tags_by_category;
            }
        },
        venues: {
            query: TAGS_BY_CATEGORY,
            variables() {
                return {
                    category_id: this.venuesId
                }
            },
            update(data){
                var results = data.tags_by_category;

                //loop the results 
                Object.keys(results).forEach(function(index){
                    var tag_name = results[index].name;

                    tag_name = tag_name.replace(/\s+/g, '-').toLowerCase();
                    
                    //store the tag link
                    results[index].link = 'category/venues/' + tag_name;
                    
                });

                return data.tags_by_category;
            }
        },
        photographers: {
            query: TAGS_BY_CATEGORY,
            variables() {
                return {
                    category_id: this.photographersId
                }
            },
            update(data){
                var results = data.tags_by_category;

                //loop the results 
                Object.keys(results).forEach(function(index){
                    var tag_name = results[index].name;

                    tag_name = tag_name.replace(/\s+/g, '-').toLowerCase();
                    
                    //store the tag link
                    results[index].link = 'category/photographers/' + tag_name;
                    
                });

                return data.tags_by_category;
            }
        },
    },
    methods: {
        tabBar()
        {
            $('.popular-nav-item').click(function (e){
                e.preventDefault();
                e.stopImmediatePropagation();
                $('.popular-nav-item').removeClass("active");
                $(this).addClass("active");
                $('.tab-pane').removeClass("active");
                $('.tab-pane').removeClass("show");
                var id = $(this).attr('href');
                $(id).addClass('active');
                $(id).addClass('show');
            });
        }
    },
    mounted() {
        this.tabBar();
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
    width: 180px;
    margin: auto;
    position: absolute;
    bottom:0px;
    right:25%;
    left:50%;
    margin-left:-90px;
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
a.popular-nav-item.nav-link.active,
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
.nav-tabs .nav-link.active, .nav-tabs .popular-nav-item.show .nav-link
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

.nav-fill .popular-nav-item
{
    display: inline !important;
}
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus
{
    border-color: #ffffff;
}
.vueperslides__track-inner
{
    width: 95% !important;
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
