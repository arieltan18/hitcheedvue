<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <b-navbar id="nav-menu" toggleable="lg" fixed="top" :type="type" variant="white" :class="['py-4', {transparent: isTransparent}, { 'border-bottom': !isTransparent }]">
            <div class="container">
            <b-navbar-brand to="/">
                <img class="logo-img" alt="Hitcheed Private Limited [SG]" v-if="isTransparent" :src="whiteLogo" height="38px;"/>
                <img class="logo-img" alt="Hitcheed Private Limited [SG]" v-else :src="blackLogo" height="38px;"/>
            </b-navbar-brand>

                <div class="ml-auto">
                    <b-navbar-toggle target="search-collapse" class="ml-1 border-0 outline outline-none"><i class="fa fa-search"></i></b-navbar-toggle>
                    <b-navbar-toggle target="nav-collapse" class="ml-1 border-0 outline-none"></b-navbar-toggle>
                </div>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="mx-auto">
                    <b-nav-item-dropdown toggle-class="active" menu-class="browse-dropdown" id="browse-menu" :no-caret="true" text="Browse" right>
                            <b-dropdown-item :variant="variant" :to="{ name: 'professionalsByCategory', params: { category: 'hotels' }}">
                                Hotels
                            </b-dropdown-item>
                            <b-dropdown-item :variant="variant" :to="{ name: 'professionalsByCategory', params: { category: 'venues' }}">
                                Venues
                            </b-dropdown-item>
                            <b-dropdown-item :variant="variant" :to="{ name: 'professionalsByCategory', params: { category: 'bridal-studios' }}">
                                Bridal Studios
                            </b-dropdown-item>
                            <b-dropdown-item :variant="variant" :to="{ name: 'professionalsByCategory', params: { category: 'photographers' }}">
                                Photographers
                            </b-dropdown-item>
                            <b-dropdown-item :variant="variant" :to="{ name: 'professionalsByCategory', params: { category: 'videographers' }}">
                                Videographers
                            </b-dropdown-item>
                            <b-dropdown-item :variant="variant" :to="{ name: 'professionalsByCategory', params: { category: 'florists' }}">
                                Florists
                            </b-dropdown-item>
                            <b-dropdown-item :variant="variant" :to="{ name: 'professionalsByCategory', params: { category: 'invitation-and-wedding-favours' }}">
                                Invitation & wedding favours
                            </b-dropdown-item>
                            <b-dropdown-item :variant="variant" :to="{ name: 'professionalsByCategory', params: { category: 'event-styling-and-rental' }}">
                                event styling & rental
                            </b-dropdown-item>
                            <b-dropdown-item :variant="variant" :to="{ name: 'professionalsByCategory', params: { category: 'hair-and-makeup' }}">
                                hair & makeup
                            </b-dropdown-item>
                            <b-dropdown-item :variant="variant" :to="{ name: 'professionalsByCategory', params: { category: 'live-band-and-emcee' }}">
                                live band & emcee
                            </b-dropdown-item>
                            <b-dropdown-item :variant="variant" :to="{ name: 'professionalsByCategory', params: { category: 'wedding-jewellery' }}">
                                Wedding Jewellery
                            </b-dropdown-item>
                            <b-dropdown-item :variant="variant" :to="{ name: 'professionalsByCategory', params: { category: 'catering' }}">
                                Catering
                            </b-dropdown-item>
                            <b-dropdown-item :variant="variant" :to="{ name: 'professionalsByCategory', params: { category: 'photo-booth' }}">
                                photo booth
                            </b-dropdown-item>
                            <b-dropdown-item :variant="variant" :to="{ name: 'professionalsByCategory', params: { category: 'other-countries' }}">
                                other countries
                            </b-dropdown-item>
                            <b-dropdown-item :variant="variant" :to="{ name: 'professionalsByAllCategories'}">
                                all categories
                            </b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item active :to="{ name:'messages' }">Messages</b-nav-item>
                    <b-nav-item active :to="{ name:'articlesHome'}">Articles</b-nav-item>
                    <b-nav-item active :to="{ name:'events&promotions' }">Events & Promotions</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-form class="d-none d-lg-block">
                            <SearchBar :theme="theme"/>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>

            <b-collapse id="search-collapse">
                <b-navbar-nav class="vw-100 px-0 pr-4 pt-4 pb-1">
                    <b-nav-form>
                            <SearchBar :expanded="true" theme="black"/>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
            </div>
        </b-navbar>
    </div>
</template>

<script>
    import SearchBar from "./SearchBar";
    export default {
        components:{
            SearchBar
        },
        props: ['is-transparent', 'variant', 'theme', 'type'],
        data() {
            return {
                logo: '/logo.png',
                isScrolled: false,
                hover: false,
                whiteLogo: 'https://d1qc9wtuffqlue.cloudfront.net/images/logo/logo_White.png',
                blackLogo: 'https://d1qc9wtuffqlue.cloudfront.net/images/logo/logo.png',
                whiteStyle: "color: #ffffff;" ,
                blackStyle: "color: #26140E;",
            }
        },
        name: "NavMenu"
    }
</script>

<style scoped>
    #nav-menu{
        transition: all 0.25s;
    }
    #nav-menu.transparent{
        background-color: transparent !important;
    }
    #nav-menu{
        margin-top: 45px;
    }

    #nav-menu.border
    {
        border-bottom: 1px solid black;
    }

    .nav-link, .nav-item, .nav-link span{
        margin: 0 5px;
        font-size: 13px;
        letter-spacing: 1.2px;
        font-weight: 600;
        text-transform: uppercase;
        font-family: Open Sans,serif;
    }

    .navbar-dark {

    }

</style>
