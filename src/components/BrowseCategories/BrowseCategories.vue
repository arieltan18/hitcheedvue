<template>
    <div class="container-fluid pb-5">
        <h6 class="mt-2 mb-4">Browse Categories</h6>
        <div class="col-md-12 nav-section mb-2">
            <nav class="mb-2">
                <ul class="nav nav-tabs nav-fill justify-content-center" id="nav-tab" role="tablist">
                    <li>
                        <a class="nav-item nav-link active" id="nav-hotels-tab" data-toggle="tab" href="#nav-hotels" role="tab" aria-controls="nav-hotels" aria-selected="true">
                            <span class="nav-text-link">Hotels</span>
                        </a>
                    </li>
                    <li>
                        <a class="nav-item nav-link" id="nav-venues-tab" data-toggle="tab" href="#nav-venues" role="tab" aria-controls="nav-venues" aria-selected="false">
                            <span class="nav-text-link">Venues</span>
                        </a>
                    </li>
                    <li>
                        <a class="nav-item nav-link" id="nav-bridals-tab" data-toggle="tab" href="#nav-bridals" role="tab" aria-controls="nav-bridals" aria-selected="false">
                            <span class="nav-text-link">Bridal Studios</span>
                        </a>
                    </li>
                    <li>
                        <a class="nav-item nav-link" id="nav-photographers-tab" data-toggle="tab" href="#nav-photographers" role="tab" aria-controls="nav-photographers" aria-selected="false">
                            <span class="nav-text-link">Photographers</span>
                        </a>
                    </li>
                    <li>
                        <a class="nav-item nav-link" id="nav-others-tab" data-toggle="tab" href="#nav-others" role="tab" aria-controls="nav-others" aria-selected="false">
                            <span class="nav-text-link">Videographers</span>
                        </a>
                    </li>
                    <li>
                        <a class="nav-item nav-link" id="nav-others-tab" data-toggle="tab" href="#nav-others" role="tab" aria-controls="nav-others" aria-selected="false">
                            <span class="nav-text-link">Florists</span>
                        </a>
                    </li>
                    <li>
                        <a class="nav-item nav-link" id="nav-others-tab" data-toggle="tab" href="#nav-others" role="tab" aria-controls="nav-others" aria-selected="false">
                            <span class="nav-text-link">Invitation & wedding favours</span>
                        </a>
                    </li>
                    <li>
                        <a class="nav-item nav-link" id="nav-others-tab" data-toggle="tab" href="#nav-others" role="tab" aria-controls="nav-others" aria-selected="false">
                            <span class="nav-text-link">Event Styling & Rental</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul class="nav nav-tabs nav-fill justify-content-center" id="nav-tab" role="tablist">
                    <li>
                        <a class="nav-item nav-link" id="nav-hotels-tab" data-toggle="tab" href="#nav-hotels" role="tab" aria-controls="nav-hotels" aria-selected="true">
                            <span class="nav-text-link">hair & makeup</span>
                        </a>
                    </li>
                    <li>
                        <a class="nav-item nav-link" id="nav-venues-tab" data-toggle="tab" href="#nav-venues" role="tab" aria-controls="nav-venues" aria-selected="false">
                            <span class="nav-text-link">live band & emcee</span>
                        </a>
                    </li>
                    <li>
                        <a class="nav-item nav-link" id="nav-bridals-tab" data-toggle="tab" href="#nav-bridals" role="tab" aria-controls="nav-bridals" aria-selected="false">
                            <span class="nav-text-link">wedding jewellery</span>
                        </a>
                    </li>
                    <li>
                        <a class="nav-item nav-link" id="nav-photographers-tab" data-toggle="tab" href="#nav-photographers" role="tab" aria-controls="nav-photographers" aria-selected="false">
                            <span class="nav-text-link">catering</span>
                        </a>
                    </li>
                    <li>
                        <a class="nav-item nav-link" id="nav-others-tab" data-toggle="tab" href="#nav-others" role="tab" aria-controls="nav-others" aria-selected="false">
                            <span class="nav-text-link">photo booth</span>
                        </a>
                    </li>
                    <li>
                        <a class="nav-item nav-link" id="nav-others-tab" data-toggle="tab" href="#nav-others" role="tab" aria-controls="nav-others" aria-selected="false">
                            <span class="nav-text-link">other countries</span>
                        </a>
                    </li>
                    <li>
                        <a class="nav-item nav-link" id="nav-others-tab" data-toggle="tab" href="#nav-others" role="tab" aria-controls="nav-others" aria-selected="false">
                            <span class="nav-text-link">All Categories</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BrowseCategories'
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