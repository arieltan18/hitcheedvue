<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row bottom-row">
                <div class="col-md-6 text-left">
                    <a href="/">
                        <img src="https://d1qc9wtuffqlue.cloudfront.net/images/logo/logo.png" alt="" height="38px">
                    </a>
                </div>
                <div class="col-md-6">
                    <div class="row website-link">
                        <div class="col-sm-3 mr-2 text-left">
                            <div class="top-link">About Us</div>
                            <div class="bottom-link">
                                <router-link :to="{ name: 'about' }" class="header-link">who we are</router-link><br/>
                                <a href="mailto:press@hitcheed.com">press</a><br/>
                                <a href="mailto:jobs@hitcheed.com">careers</a>
                            </div>
                        </div>
                        <div class="col-sm-3 text-left">
                            <div class="top-link">Get Started</div>
                            <div class="bottom-link">
                                <a href="">browse</a><br/>
                                <router-link :to="{ name: 'articlesHome'}" class="header-link">articles</router-link>
                            </div>
                        </div>
                        <div class="col-sm-5 mail-box">
                            <a class="mail-link" href="mailto:help@hitcheed.com">
                                <img src="https://d1qc9wtuffqlue.cloudfront.net/images/home-page/envelope.svg">
                                help@hitcheed.com
                            </a><br/>
                            <a class="vendor-link" href="/vendor">Become a vendor</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6"></div>
                <div class="col-md-6 text-left mt-4 mb-3">
                    <input class="" type="text" placeholder="Enter your email address"><input type="submit" value="Sign Me Up">
                </div>
            </div>
            <div class="social-div">
                <a class="mr-2" href="https://www.facebook.com/hitcheed" target="_blank">
                    <img alt="Hitcheed Private Limited [SG]" src="https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group12.svg">
                </a>
                <a href="https://instagram.com/hitcheed">
                    <img alt="Hitcheed Private Limited [SG]" src="https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group15.svg">
                </a>
            </div>
            <div class="copy-right mt-5">
                © COPYRIGHT 2019 Hitcheed Pte Ltd | <router-link :to="{ name: 'faq' }" class="copyright-link">FAQs</router-link> | <router-link :to="{ name: 'privacy' }" class="copyright-link">Privacy Policy</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.container-fluid
{
    border-top: 1px solid rgba(221, 218, 217, 0.5);
}
.bottom-row
{
    padding-top:8%;
    padding-bottom: 3%;
}
hr
{
    opacity: 0.3;
    border-top: 1px solid #26140E;
}
.copy-right
{
    margin-bottom: 4rem;
    font-family: 'Open Sans';
    color: #26140E;
    letter-spacing: 0.6px;
    font-size: 12px;
    opacity: 0.5;
}
.copyright-link
{
    text-decoration: none;
    color: #26140E;
}
.social-div
{
    display: block;
    overflow: hidden;
    text-align: center;
}
.social-div:before
{
    right: 1.5em;
    margin-left: -50%;
}
.social-div:before, .social-div:after
{
    content: "";
    display: inline-block;
    vertical-align: middle;
    position: relative;
    width: 50%;
    border-top-style: solid;
    border-top-width: 1px;
    border-color: #26140E;
    opacity: 0.2;
}
.social-div:after
{
    left: 1.5em;
    margin-top: 0%;
    margin-right: -50%;
}
.social-div:before, .social-div:after
{
    content: "";
    display: inline-block;
    vertical-align: middle;
    position: relative;
    width: 50%;
    border-top-style: solid;
    border-top-width: 1px;
    border-color: #26140E;
    opacity: 0.2;
}
.website-link
{
    font-size: 12px;
    letter-spacing: 1.2px;
    font-family: 'Open Sans';
    color: #26140E;
    text-transform: uppercase;
    font-weight: 600;
}
.top-link
{
    opacity: 0.5;
    font-weight: 400;
}
.bottom-link
{
    line-height: 3.5em;
}
.bottom-link a
{
    text-decoration: none;
    color: #26140E;
}
.mail-box
{
    margin: auto;
    line-height: 2.4em;
    text-align: left;
}
.mail-link
{
    text-transform: none;
    text-decoration: none;
    color:#26140E;
    font-family: 'Open Sans';
    font-weight: 600;
    letter-spacing: 1.2px;
    font-size: 12px;
}
.vendor-link
{
    text-transform: uppercase;
    color:#26140E;
    font-family: 'Open Sans';
    font-weight: 600;
    letter-spacing: 1.2px;
    font-size: 12px;
}
input[type="text"]
{
    width: 250px;
    height: 35px;
    font-size: 16px;
    font-family: 'Cormorant Garamond';
    font-style: italic;
    padding-left: 10px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border:1px solid #26140e3d;
}

input[type="submit"]
{
    margin-left: 0px;
    height: 35px;
    width: 120px;
    background: #88D1CF;
    color: #ffffff;
    border: 0;
    -webkit-appearance: none;
    font-family: 'Open Sans';
    font-size: 12px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-weight: 600;
}
</style>
