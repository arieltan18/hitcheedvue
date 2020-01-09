<template>
    <div class="container-fluid pb-5">
        <h6 class="mt-2 mb-4">Browse Categories</h6>
        <div class="col-md-12 nav-section mb-2">
            <nav class="mb-2">
                <ul class="nav nav-tabs nav-fill justify-content-center" id="nav-tab" role="tablist">
                    <li>
                        <router-link :to="{ name: 'professionalsByCategory', params: { category: 'hotels' }}" class="nav-item nav-link" id="nav-hotels-tab" data-category-name="hotels" >
                            <span class="nav-text-link">Hotels</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'professionalsByCategory', params: { category: 'venues' }}" class="nav-item nav-link" id="nav-venues-tab" data-category-name="venues">
                            <span class="nav-text-link">Venues</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'professionalsByCategory', params: { category: 'bridal-studios' }}" class="nav-item nav-link" id="nav-bridals-tab" data-category-name="bridal-studios">
                            <span class="nav-text-link">Bridal Studios</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'professionalsByCategory', params: { category: 'photographers' }}" class="nav-item nav-link" id="nav-photographers-tab" data-category-name="photographers">
                            <span class="nav-text-link">Photographers</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'professionalsByCategory', params: { category: 'videographers' }}" class="nav-item nav-link" id="nav-videographers-tab" data-category-name="videographers">
                            <span class="nav-text-link">Videographers</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'professionalsByCategory', params: { category: 'florists' }}" class="nav-item nav-link" id="nav-florists-tab" data-category-name="florists">
                            <span class="nav-text-link">Florists</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'professionalsByCategory', params: { category: 'invitation-and-wedding-favors' }}" class="nav-item nav-link" id="nav-invitation-tab" data-category-name="invitation-and-wedding-favors">
                            <span class="nav-text-link">invitation & wedding favors</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'professionalsByCategory', params: { category: 'event-styling-and-rental' }}" class="nav-item nav-link" id="nav-event-tab" data-category-name="event-styling-and-rental">
                            <span class="nav-text-link">Event Styling & Rental</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul class="nav nav-tabs nav-fill justify-content-center" id="nav-tab" role="tablist">
                    <li>
                        <router-link :to="{ name: 'professionalsByCategory', params: { category: 'hair-and-makeup' }}" class="nav-item nav-link" id="nav-hair-tab" data-category-name="hair-and-makeup">
                            <span class="nav-text-link">hair & makeup</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'professionalsByCategory', params: { category: 'live-band-and-emcee' }}" class="nav-item nav-link" id="nav-live-tab" data-category-name="live-band-and-emcee">
                            <span class="nav-text-link">live band & emcee</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'professionalsByCategory', params: { category: 'wedding-jewellery' }}" class="nav-item nav-link" id="nav-wedding-tab" data-category-name="wedding-jewellery">
                            <span class="nav-text-link">wedding jewellery</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'professionalsByCategory', params: { category: 'catering' }}" class="nav-item nav-link" id="nav-catering-tab" data-category-name="catering">
                            <span class="nav-text-link">catering</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'professionalsByCategory', params: { category: 'photo-booth' }}" class="nav-item nav-link" id="nav-photo-tab" data-category-name="photo-booth">
                            <span class="nav-text-link">photo booth</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'professionalsByCategory', params: { category: 'other-countries' }}" class="nav-item nav-link" id="nav-others-tab" data-category-name="other-countries">
                            <span class="nav-text-link">other countries</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'professionalsByAllCategories'}" class="nav-item nav-link" id="nav-all-tab" data-category-name="all-categories">
                            <span class="nav-text-link">All Categories</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BrowseCategories',


}
</script>

<style lang="scss" scoped>
h6
{
    font-size: 10px;
    font-family: 'Open Sans';
    letter-spacing: 1.5px;
    color: #26140E;
    opacity: 0.5;
    text-transform: uppercase;
}
.container-fluid
{
    border-bottom: 1px solid #f5f5f4;
}
.router-link-active span
{
    padding-bottom: 4px !important;
    border-bottom: 1px solid #88D1CF !important;
}
.nav-tabs
{
    border: none;
}
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link,  .nav-text-link
{
    text-transform: uppercase;
    color:#26140E;
    border:none;
    padding-bottom:2px;
    font-size: 12px;
    letter-spacing: 1.2px;
    font-family: 'Open Sans';

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

.nav-link
{
    padding:0.5rem 0.5rem !important;
}
</style>