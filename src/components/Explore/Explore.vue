<template>
    <div class="container-fluid mb-5">
        <div class="container">
            <div class="row mb-2">
                <div class="col-sm-12 text-center">
                    <h1>Explore</h1>
                </div>
            </div>
            <div class="categories-section row mb-4">
                <div class="d-flex justify-content-center align-self-center align-items-center mb-3" style="width:100%;">
                    <div id="hotels" class="row1 mr-2">
                        <div class="logo">
                            <img src="" alt="">
                            <div class="category-text">Hotels</div>
                        </div>
                    </div>
                    <div id="bridal-studios" class="row1">
                        <div class="logo">
                            <img src="" alt="">
                            <div class="category-text">Bridal Studios</div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center" style="width:100%;">
                    <div id="venues" class="row2 mr-2">
                        <div class="logo">
                            <img src="" alt="">
                            <div class="category-text">Venues</div>
                        </div>
                    </div>
                    <div id="photographers" class="row2 mr-2">
                        <div class="logo">
                            <img src="" alt="">
                            <div class="category-text">Photographers</div>
                        </div>
                    </div>
                    <div id="other-countries" class="row2">
                        <div class="logo">
                            <img src="" alt="">
                            <div class="category-text">Other Countries</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <div class="link">See All Categories</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Explore",

}
</script>

<style scoped>
.container-fluid
{
    background-color: hsla(15, 6%, 86%, 0.2);
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
.category-text
{
    font-family: 'Open Sans';
    font-size: 12px;
    letter-spacing: 1.2px;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: 600;
}
#hotels
{
    background-image: url('https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/hero-image/banquet-beautiful-catering-2306281%402x.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
}
#bridal-studios
{
    background-image: url('https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/hero-image/beautiful-bouquet-bride-2253843%402x.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
}
#venues
{
    background-image: url('https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/hero-image/sweet-ice-cream-photography-399226-unsplash-1%402x.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
}
#photographers
{
    background-image: url('https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/hero-image/bouquet-bride-bride-and-groom-2253870%402x.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
}
#other-countries
{
    background-image: url('https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/hero-image/mikayla-herrick-619429-unsplash%402x.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
}
.row1
{
    width: 36%;
    height: 255px;
}
.row2
{
    width: 24%;
    height: 167px;
}
.link
{
    font-family: 'Cormorant Garamond';
    font-style: italic;
    font-size: 18px;
    color: #26140E;
    cursor: pointer;
    /* text-decoration: underline; */
}
</style>