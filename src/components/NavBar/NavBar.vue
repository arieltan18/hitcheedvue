<template>
    <div>
        <b-navbar >
            <div class="container nav-bar">
                <b-navbar-brand class="logo-brand" href="/">
                    <img alt="Hitcheed Private Limited [SG]" :src="[this.$route.path =='/' ? whiteLogo : blackLogo]" height="38px;"/>
                </b-navbar-brand>
                <div class="navbar-nav">
                    <div class="nav-bar-link nav-bar-dropdown" @mouseover="hover = true" :style="[ this.$route.path=='/' ? whiteStyle : blackStyle ]">
                        <div class="browse-menu-link" @click="hover=true">
                            Browse
                            <hr class="browse-border" v-if="hover" @mouseleave="hover = false">
                        </div>
                    </div>
                    <div class="dropdown-content" v-if="hover" @mouseleave="hover = false">
                        <div class="nav-content nav-text text-center">
                            <ul class="column1 text-left">
                                <li>Hotels</li>
                                <li>Venues</li>
                                <li>Bridal Studios</li>
                                <li>Photographers</li>
                                <li>Videographers</li>
                            </ul>
                            <ul class="column2 text-left">
                                <li>Florists</li>
                                <li>Invitation & wedding favours</li>
                                <li>event styling & rental</li>
                                <li>hair & makeup</li>
                                <li>live band & emcee</li>
                            </ul>
                            <ul class="column3 text-left">
                                <li>Wedding Jewellery</li>
                                <li>Catering</li>
                                <li>photo booth</li>
                                <li>other countries</li>
                                <li>all categories</li>
                            </ul>
                        </div>
                    </div>
                    <div v-if="loggedIn" class="nav-bar-link" :style="[ this.$route.path=='/' ? whiteStyle : blackStyle ]">Messages</div>
                    <div class="nav-bar-link" :style="[ this.$route.path=='/' ? whiteStyle : blackStyle ]">
                        <router-link :to="{ name: 'articlesHome'}" class="header-link">
                            Articles
                        </router-link>
                    </div>
                    <div class="nav-bar-link" :style="[ this.$route.path=='/' ? whiteStyle : blackStyle ]">Events & Promotions</div>
                </div>
                <div class="ml-auto">
                    <i class="fa fa-search search-icon" aria-hidden="true" style="color:white;"></i>
                    <input size="sm" data="hide" class="keyword-field search-width" placeholder="Search Locations, Vendors, Articles">
                </div>
            </div>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            logo: '/logo-5a97df3649b490ac45e1ce37411c365f11a95fc5239008a885742ed20ed69c26.png',
            hover: false,
            whiteLogo: 'https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/logo/logo_White.png',
            blackLogo: 'https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/logo/logo.png',
            whiteStyle: {
                color: '#ffffff' 
            },
            blackStyle: {
                color: '#26140E'
            }
        }
    },
    computed: {
        loggedIn() {
            return this.$store.getters.loggedIn;
        }
    },
    mounted() {
        $('.search-icon').on('click', (evt) => {
            evt.preventDefault();
            
            var data = $('.keyword-field').attr("data");
            if(data=='hide')
            {
                $('.keyword-field').css('display','inline-block');
                $('.keyword-field').attr('data','show');
            }
            else
            {
                $('.keyword-field').css('display','none');
                $('.keyword-field').attr('data','hide');
            }
        });


   },
}
</script>

<style scoped>
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
.keyword-field
{
    font-weight: 400;
    font-family: 'Cormorant Garamond';
    font-style: italic;
    font-size: 16px;
    color:#FFFFFF;
    opacity: 0.7;
    border:none;
    background: none;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #ffffff;
    margin-left: -20px;
    display: none;
}
.search-width
{
    width:235px !important;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #ffffff;
  opacity: 0.7; /* Firefox */
  font-size: 16px;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #ffffff;
  opacity: 0.7;
  font-size: 16px;
}
::-ms-input-placeholder { /* Microsoft Edge */
  color: #ffffff;
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
.nav-bar-link
{
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
.dropdown-content
{
    width:100%;
    position: absolute;
    z-index: 1000;
    top:110px;
    left: 0px;
    padding: 10px;
    border-top: 1px solid #ffffff87;
    border-bottom: 1px solid #ffffff87;
}
.dropdown-content a 
{
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.browse-menu-link
{
    text-decoration: none;
}
.browse-menu-link:hover .dropdown-content 
{
    display: block;
}
.search-icon
{
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
    width: 9%;
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
}
</style>