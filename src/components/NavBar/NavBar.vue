<template>
    <div>
        <b-navbar >
            <div class="container nav-bar">
                <b-navbar-brand class="" href="#">
                    <img alt="Hitcheed Private Limited [SG]" :src="logo" height="38px;"/>
                </b-navbar-brand>
                <b-navbar-nav class="mr-auto nav-link">
                    <b-nav-item-dropdown text="Browse" class="nav-link-text" href="#"></b-nav-item-dropdown>
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

.nav-link-text
{
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #25130e !important;
    font-weight: 700;
}

.nav-bar li a, .nav-link span
{
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #25130e !important;
    font-weight: 700;
}

.dropdown-toggle span
{
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #25130e !important;
    font-weight: 700;
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
</style>