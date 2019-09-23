<template>
    <div>
        <b-navbar >
            <div class="container nav-bar">
                <b-navbar-brand class="logo-brand" href="#">
                    <img alt="Hitcheed Private Limited [SG]" :src="logo" height="38px;"/>
                </b-navbar-brand>
                <!-- <b-navbar-nav class="mr-auto nav-link">
                    <b-dropdown variant="white">
                        <template v-slot:button-content class="nav-dropdown">
                            <span class="browse-nav">Browse</span>
                        </template>
                        <b-navbar-nav class="mr-auto nav-link">
                            <b-dropdown variant="white" no-caret>
                                <template v-slot:button-content class="nav-dropdown">
                                    <span class="browse-nav">Singapore</span>
                                </template>
                            </b-dropdown>
                            <b-dropdown variant="white" no-caret>
                                <template v-slot:button-content class="nav-dropdown">
                                    <span class="browse-nav">Other Country</span>
                                </template>
                            </b-dropdown>

                        </b-navbar-nav>
                    </b-dropdown>
                    <b-nav-item href="#">Articles</b-nav-item>
                </b-navbar-nav> -->
                <div class="navbar-nav">
                    <div class="nav-bar-link nav-bar-dropdown">
                        <a class="browse-menu-link" href="">Browse<span class="caret"></span></a>
                    </div>
                    <div class="dropdown-content">
                        <div class="nav-country">Singapore</div>
                        <div class="nav-country">Other Country</div>
                    </div>
                    <div class="nav-bar-link msg-link">Messages</div>
                    <div class="nav-bar-link">Articles</div>
                </div>
                <b-nav-form class="ml-auto">
                    <b-form-input size="sm" class="mr-sm-2 keyword-field search-width" placeholder="Search Vendors, Inspirations..."></b-form-input>
                    <i class="fa fa-search search-icon" aria-hidden="true"></i>
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
            logo: '/logo-5a97df3649b490ac45e1ce37411c365f11a95fc5239008a885742ed20ed69c26.png'
        }
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
    margin-right: 6em;
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

.msg-link
{
    display: none;
}

.nav-bar-link
{
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #25130e !important;
    font-weight: 700;
    padding: 10px 15px;
    cursor: pointer;
}

.nav-bar-dropdown
{
    position: relative;
    display: inline-block;
}

.dropdown-content
{
    display: none;
    width:100%;
    position: absolute;
    background-color: #ffffff;
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
    color: #25130e;
}

.browse-menu-link:hover .dropdown-content 
{
    display: block;
}
</style>