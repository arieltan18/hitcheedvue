<template>
    <div class="navbar-fixed-top">
        <b-navbar >
            <div class="container nav-bar">
                <b-navbar-brand class="logo-brand" href="/">
                    <img class="black-logo" alt="Hitcheed Private Limited [SG]" src="https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/logo/logo.png" height="38px;"/>
                </b-navbar-brand>
                <div class="navbar-nav">
                    <div class="nav-bar-black-link nav-bar-dropdown">
                        <div class="browse-menu-link">
                            Browse
                            <hr class="browse-border">
                        </div>
                    </div>
                    <div class="dropdown-content-white">
                        <div class="nav-content nav-text text-center">
                            <ul class="column1 text-left">
                                <li>
                                    <router-link :to="{ name: 'professionalsByCategory', params: { category: 'hotels' }}">
                                        Hotels
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'professionalsByCategory', params: { category: 'venues' }}">
                                        Venues
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'professionalsByCategory', params: { category: 'bridal-studios' }}">
                                        Bridal Studios
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'professionalsByCategory', params: { category: 'photographers' }}">
                                        Photographers
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'professionalsByCategory', params: { category: 'videographers' }}">
                                        Videographers
                                    </router-link>
                                </li>
                            </ul>
                            <ul class="column2 text-left">
                                <li>
                                    <router-link :to="{ name: 'professionalsByCategory', params: { category: 'florists' }}">
                                        Florists
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'professionalsByCategory', params: { category: 'invitation-and-wedding-favours' }}">
                                        Invitation & wedding favours
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'professionalsByCategory', params: { category: 'event-styling-and-rental' }}">
                                        event styling & rental
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'professionalsByCategory', params: { category: 'hair-and-makeup' }}">
                                        hair & makeup
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'professionalsByCategory', params: { category: 'live-band-and-emcee' }}">
                                        live band & emcee
                                    </router-link>
                                </li>
                            </ul>
                            <ul class="column3 text-left">
                                <li>
                                    <router-link :to="{ name: 'professionalsByCategory', params: { category: 'wedding-jewellery' }}">Wedding Jewellery
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'professionalsByCategory', params: { category: 'catering' }}">
                                        Catering
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'professionalsByCategory', params: { category: 'photo-booth' }}">
                                        photo booth
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'professionalsByCategory', params: { category: 'other-countries' }}">
                                        other countries
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'professionalsByAllCategories'}">
                                        all categories
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div v-if="loggedIn" class="nav-bar-black-link">
                        <router-link :to="{ name: 'messages' }" class="header-link">Messages</router-link>
                    </div>
                    <div class="nav-bar-black-link">
                        <router-link :to="{ name: 'articlesHome'}" class="header-link">
                            Articles
                        </router-link>
                    </div>
                    <div class="nav-bar-black-link" >Events & Promotions</div>
                </div>
                <div class="ml-auto">
                    <i class="fa fa-search search-black-icon" aria-hidden="true"></i>
                    <input size="sm" data="hide" class="keyword-field-black search-width input-black" placeholder="Search Locations, Vendors, Articles">
                </div>
            </div>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'BlackNavBar',
    props: [ 'route' ],
    data() {
        return {
            logo: '/logo-5a97df3649b490ac45e1ce37411c365f11a95fc5239008a885742ed20ed69c26.png',
            hover: false,
            blackLogo: 'https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/logo/logo.png',
        }
    },
    computed: {
        loggedIn() {
            return this.$store.getters.loggedIn;
        }
    },
    mounted()
    {
        $('.search-black-icon').on('click', (evt) => {
            evt.preventDefault();

            var data = $('.keyword-field-black').attr("data");
            if(data=='hide')
            {
                $('.keyword-field-black').css('display','inline-block');
                $('.keyword-field-black').attr('data','show');
            }
            else
            {
                $('.keyword-field-black').css('display','none');
                $('.keyword-field-black').attr('data','hide');
            }
        });

        $('.nav-bar-dropdown').hover(
            function(e){
                $('.dropdown-content-white').css('visibility','visible');
                $('.browse-border').css('visibility','visible');
            },
        );

        $('.dropdown-content-white').mouseleave(
            function(){
                $('.dropdown-content-white').css('visibility','hidden');
                $('.browse-border').css('visibility','hidden');
            }
        );

   },

}
</script>

<style scoped>
.navbar-fixed-top
{
    background-color: #ffffff;
    z-index:10;
    position: fixed;
    width: 100%;
    margin-top: 45px;
    border-bottom: 1px solid #f5f5f4;
}
.scrolled
{
    background-color: #fff !important;
    transition: background-color 200ms linear;
    color: #26140E;
}
.nav-bar
{
    height: 100px;
}
.nav-link
{
    margin-left: 8%;
}
.nav-bar li a, .nav-link span
{
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #25130e !important;
    font-weight: 700;
}
.nav-item
{
    position: relative;
    display: -ms-inline-flexbox;
    display: -webkit-inline-box;
    display: inline-flex;
    vertical-align: middle;
    padding-top:2px;
}
.keyword-field-black
{
    font-weight: 400;
    font-family: 'Cormorant Garamond';
    font-style: italic;
    font-size: 16px;
    color:#26140E;
    opacity: 0.7;
    border:none;
    background: none;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #ffffff;
    margin-left: -20px;
    display: none;
    border-bottom: 1px solid #26140E;
}
.search-width
{
    width:235px !important;
}
.input-black::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #26140E;
  opacity: 0.7; /* Firefox */
  font-size: 16px;
}
.input-black:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #26140E;
  opacity: 0.7;
  font-size: 16px;
}
.input-black::-ms-input-placeholder { /* Microsoft Edge */
  color: #26140E;
  opacity: 0.7;
  font-size: 16px;
}
.dropdown-toggle,
.dropdown-menu {
  width: 100%;
}
.logo-brand
{
    margin-right: 4em;
}
.caret
{
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px dashed;
    border-top: 4px solid \9;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
}
.nav-bar-black-link
{
    color: #26140E;
    font-size: 13px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    font-weight: 600;
    padding: 10px 30px;
    cursor: pointer;
    font-family: 'Open Sans';
}
.nav-bar-dropdown
{
    position: relative;
    display: inline-block;
}
.dropdown-content-white
{
    width:100%;
    position: absolute;
    z-index: 500;
    top:110px;
    left: 0px;
    padding: 10px;
    border-top: 1px solid #f5f5f4;
    border-bottom: 1px solid #f5f5f4;
    background-color: #ffffff;
    visibility: hidden;
}
.dropdown-content-white a
{
  color: #26140E;
  text-decoration: none;
  display: block;
}
.browse-menu-link
{
    text-decoration: none;
}
.search-black-icon
{
    color: #26140E;
    position: relative;
    right: 34px;
    cursor: pointer;
}
.nav-text
{
    line-height: 3em;
    font-size: 12px;
    letter-spacing: 1.2px;
    color: #26140E !important;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
}
.black-text
{
    color: #26140E !important;
}
.white-text
{
    color: #ffffff;
}
.header-link
{
    text-decoration: none;
    color: inherit;
}
.column1, .column2, .column3
{
    display: inline-block;
}
.column1
{
    width: 12%;
}
.column2
{
    width: 18%;
}
.column3
{
    width: 10%;
}
ul
{
    list-style: none;
    padding-inline-start: 0;
}
.browse-border
{
    position:absolute;
    width:49%;
    border-top: 4px solid #26140E;
    top: 134%;
    z-index: 100;
    visibility: hidden;
}
</style>
