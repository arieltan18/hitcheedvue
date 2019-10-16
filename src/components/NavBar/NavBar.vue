<template>
    <div>
        <b-navbar >
            <div class="container nav-bar">
                <b-navbar-brand class="logo-brand" href="/">
                    <img alt="Hitcheed Private Limited [SG]" src="https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/logo/logo_White.png" height="38px;"/>
                </b-navbar-brand>
                <div class="navbar-nav">
                    <div class="nav-bar-link nav-bar-dropdown" @mouseover="hover = true">
                        <div class="browse-menu-link" @click="hover=true">Browse</div>
                    </div>
                    <div class="dropdown-content" v-if="hover" @mouseleave="hover = false">
                        <div class="row country-nav">
                            <div class="col-sm-4"></div>
                            <div class="country-text col-sm-2">Singapore</div>
                            <div class="country-text col-sm-2">Other Country</div>
                            <div class="col-sm-4"></div>
                        </div>
                        <hr>
                        <div class="dropdown-country-content">
                            
                        </div>
                    </div>
                    <div v-if="loggedIn" class="nav-bar-link">Messages</div>
                    <div class="nav-bar-link">Articles</div>
                    <div class="nav-bar-link">Events & Promotions</div>
                </div>
                <b-nav-form class="ml-auto">
                    <!-- <b-form-input size="sm" class="mr-sm-2 keyword-field search-width" placeholder="Search Vendors, Inspirations..."></b-form-input> -->
                    <i class="fa fa-search search-icon" aria-hidden="true" style="color:white;"></i>
                </b-nav-form>
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
        }
    },
    computed: {
        loggedIn() {
            return this.$store.getters.loggedIn;
        }
    },
    methods: {

    }
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
    border-radius: 10px;
    padding: 12px;
    font-size:12px;
    font-weight: 400;
    letter-spacing: 1px;
    height: 40px;
}

.search-width
{
    width:450px !important;
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
    color: #ffffff !important;
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
    background-color:clear;
    z-index: 1000;
    top:86px;
    left: 0px;
    padding: 10px;
    border: 1px solid rgba(0,0,0,0.15);
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
    color: #ffffff;
}

.browse-menu-link:hover .dropdown-content 
{
    display: block;
}

.search-icon
{
    position: relative;
    right: 34px;
}

.country-nav
{
    margin-right: -10px;
    margin-left: -10px;
    height: 40px;
}

.country-text
{
    line-height: 3em;
    font-size: 14px;
    letter-spacing: 1px;
    color: #25130e !important;
    font-weight: 700;
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
}
</style>