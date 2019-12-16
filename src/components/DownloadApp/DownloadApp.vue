<template>
    <div id="cover-image">
        <div class="cover m-auto py-5">
            <div class="row">
                <div class="col-5"></div>
                <div class="col-5 left-section">
                    <h4 class="text-left">Download the Hitcheed app to get access to hundreds of wedding professionals at your fingertips.</h4>
                </div>
            </div>
            <div class="row no-gutters mt-5">
                <div class="offset-1 col-5 offset-md-5 col-md-3 p-2 p-md-4 text-left">
                    <a href="https://itunes.apple.com/us/app/hitcheed/id1168589159?mt=8">
                        <img src="https://hitcheed-rsvp.s3-ap-southeast-1.amazonaws.com/img/play.png" class="img" width="100%">
                    </a>
                </div>
                <div class=" col-5 col-md-3 p-2 p-md-4 text-left">
                    <a href="https://play.google.com/store/apps/details?id=com.hitcheed.android&amp;hl=en">
                        <img src="https://hitcheed-rsvp.s3-ap-southeast-1.amazonaws.com/img/google.png" class="img" width="100%">
                    </a>
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
    background-image: url('https://d1qc9wtuffqlue.cloudfront.net/images/hero-image/irina-kostenich-555464-unsplash.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 56px;
    padding-bottom: 56px;
    text-align: center;
}
.cover
{
    background-image: url('https://d1qc9wtuffqlue.cloudfront.net/images/hero-image/cover%402x.png');
    background-repeat: no-repeat;
    background-size:  cover;
    background-position: center;
    max-width: 1096px;
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
