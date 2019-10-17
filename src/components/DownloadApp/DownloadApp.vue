<template>
    <div id="cover-image">
        <div class="row cover">
            <div class="col-md-5"></div>
            <div class="col-md-5 left-section">
                <h4 class="text-left">Download the Hitcheed app to get access to hundreds of wedding professionals at your fingertips.</h4>
                <div class="row mt-5">
                    <div class="col-md-6 text-left">
                        <a href="https://itunes.apple.com/us/app/hitcheed/id1168589159?mt=8">
                            <img src="https://hitcheed-rsvp.s3-ap-southeast-1.amazonaws.com/img/play.png" class="img" width="100%">
                        </a>
                    </div>
                    <div class="col-md-6 text-left">
                        <a href="https://play.google.com/store/apps/details?id=com.hitcheed.android&amp;hl=en">
                            <img src="https://hitcheed-rsvp.s3-ap-southeast-1.amazonaws.com/img/google.png" class="img" width="100%">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DownloadApp'
}
</script>

<style scoped>
#cover-image
{
    background-image: url('https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/hero-image/irina-kostenich-555464-unsplash.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 56px;
    padding-bottom: 56px;
    padding-right: 20%;
    padding-left: 20%;
    text-align: center;
}
.cover
{
    background-image: url('https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/hero-image/cover%402x.png');
    background-repeat: no-repeat;
    background-size:  cover;
    background-position: center;
    min-height: 640px;
}
h4
{
    font-family: 'Cormorant Garamond', serif;
    font-size: 26px;
    color: #26140E;
    line-height: 1.4em;
}
.left-section
{
    padding-top: 25%;
}
</style>