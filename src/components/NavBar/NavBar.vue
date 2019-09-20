<template>
    <div>
        <b-navbar >
            <div class="container nav-bar">
                <b-navbar-brand class="" href="#">
                    <img alt="Hitcheed Private Limited [SG]" :src="logo" height="38px;"/>
                </b-navbar-brand>
                <b-navbar-nav class="mr-auto nav-link">
                    <b-dropdown variant="white">
                        <template v-slot:button-content class="nav-dropdown">
                            <span class="browse-nav">Browse</span>
                        </template>
                        <b-navbar-nav class="mr-auto nav-link">
                            <b-dropdown-item>
                                <div class="row">
                                    <li class="col-sm-2">Singapore</li>
                                </div>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item>
                                    test
                                </b-dropdown-item>
                            </b-dropdown-item>
                            <b-dropdown-item>Other Country</b-dropdown-item>
                        </b-navbar-nav>
                    </b-dropdown>
                    <b-nav-item href="#">Articles</b-nav-item>
                </b-navbar-nav>
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

.mega-dropdown-menu
{
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    list-style: none;
    font-size: 14px;
    text-align: left;
    background-color: #fff;
    border: 1px solid #ccc;
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 0;
    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,0.175);
    box-shadow: 0 6px 12px rgba(0,0,0,0.175);
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
}

.mega-dropdown-menu
{
    padding: 20px 0px;
    width: 100%;
    box-shadow: none;
    -webkit-box-shadow: none;
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

</style>