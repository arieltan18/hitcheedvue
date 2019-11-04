<template>
    <div class="navbar-fixed-top">
        <b-navbar>
            <div class="container nav-bar">
                <b-navbar-brand class="logo-brand" href="/">
                    <img class="logo-img" alt="Hitcheed Private Limited [SG]" :src="whiteLogo" height="38px;"/>
                </b-navbar-brand>
                <div class="navbar-nav">
                    <div class="nav-bar-link nav-bar-dropdown" :style="whiteStyle">
                        <div class="browse-menu-link">
                            Browse
                            <hr class="browse-border">
                        </div>
                    </div>
                    <div class="dropdown-content">
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
                                    <router-link :to="{ name: 'professionalsByCategory', params: { category: 'wedding-jewellery' }}">
                                        Wedding Jewellery
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
                    <div v-if="loggedIn" class="nav-bar-link" :style="whiteStyle">Messages</div>
                    <div class="nav-bar-link" :style="whiteStyle">
                        <router-link :to="{ name: 'articlesHome'}" class="header-link">
                            Articles
                        </router-link>
                    </div>
                    <div class="nav-bar-link" :style="whiteStyle">Events & Promotions</div>
                </div>
                <div class="ml-auto">
                    <i class="fa fa-search search-icon" aria-hidden="true" style="color:white;"></i>
                    <input size="sm" data="hide" class="keyword-field search-width input-white" placeholder="Search Locations, Vendors, Articles">
                </div>
            </div>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'WhiteNavBar',
    props: [ 'route' ],
    data() {
        return {
            logo: '/logo-5a97df3649b490ac45e1ce37411c365f11a95fc5239008a885742ed20ed69c26.png',
            hover: false,
            whiteLogo: 'https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/logo/logo_White.png',
            blackLogo: 'https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/logo/logo.png',
            whiteStyle: "color: #ffffff;" ,
            blackStyle: "color: #26140E;",
        }
    },
    computed: {
        loggedIn() {
            return this.$store.getters.loggedIn;
        }
    },
    mounted() 
    {
        //if this route is not on home page
        if(this.$route.fullPath != '/')
        {
            $('.logo-img').attr('src', this.blackLogo);
            $('.nav-bar-link').attr('style',this.blackStyle);
            $('.navbar-fixed-top').attr('style','background-color: #ffffff;z-index:10;border-bottom: 1px solid #f5f5f4;');
            $('.dropdown-content').css('background-color','#ffffff');
            $('.dropdown-content').css('border-top','1px solid #f5f5f4');
            $('.dropdown-content').css('border-bottom','1px solid #f5f5f4');
            $('.search-icon').css('color','black');
            $('.keyword-field').css('color','black');
            $('.keyword-field').css('border-bottom','1px solid #000000');
            $('.keyword-field').addClass('input-black');
        }
        else
        {
            $(window).scroll(function () 
            {
                var $nav = $(".navheader");
                if($(this).scrollTop() > $nav.height())
                {
                    $('.navbar-fixed-top').attr('style','background-color: #ffffff;z-index:10;');
                    $('.logo-img').attr('src', 'https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/logo/logo.png');
                    $('.nav-bar-link').attr('style','color: #26140E');
                    $('.dropdown-content').css('background-color','#ffffff');
                    $('.dropdown-content').css('border-top','1px solid #f5f5f4');
                    $('.dropdown-content').css('border-bottom','1px solid #f5f5f4');
                    $('.search-icon').css('color','black');
                    $('.keyword-field').css('color','black');
                    $('.keyword-field').css('border-bottom','1px solid #000000');
                    $('.keyword-field').addClass('input-black');
                }
                else
                {
                    $('.navbar-fixed-top').attr('style','background-color: transparent;z-index:10;');
                    $('.logo-img').attr('src', 'https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/logo/logo_White.png');
                    $('.nav-bar-link').attr('style','color: #ffffff');
                    $('.dropdown-content').css('background-color','transparent');
                    $('.search-icon').css('color','white');
                    $('.keyword-field').css('color','white');
                    $('.keyword-field').css('border-bottom','1px solid #ffffff');
                    $('.keyword-field').removeClass('input-black');
                }
            });
        }

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

        $('.nav-bar-dropdown').hover(
            function(e){ 
                $('.dropdown-content').css('visibility','visible');
                $('.browse-border').css('visibility','visible');
            }, 
        );

        $('.dropdown-content').mouseleave(
            function(){
                $('.dropdown-content').css('visibility','hidden');
                $('.browse-border').css('visibility','hidden');
            }
        );

   },

}
</script>

<style scoped>
.navbar-fixed-top
{
    position: fixed;
    width: 100%;    
    margin-top: 45px;
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
.input-white::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #ffffff;
  opacity: 0.7; /* Firefox */
  font-size: 16px;
}
.input-white:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #ffffff;
  opacity: 0.7;
  font-size: 16px;
}
.input-white::-ms-input-placeholder { /* Microsoft Edge */
  color: #ffffff;
  opacity: 0.7;
  font-size: 16px;
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
    z-index: 10;
    top:110px;
    left: 0px;
    padding: 10px;
    border-top: 1px solid #ffffff87;
    border-bottom: 1px solid #ffffff87;
    background-color: transparent;
    visibility: hidden;
}
.dropdown-content a 
{
  color: black;
  text-decoration: none;
  display: block;
}
.browse-menu-link
{
    text-decoration: none;
}
/* .browse-menu-link:hover .dropdown-content 
{
    display: block;
} */
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