<template>
    <div>
        <b-navbar class="header-top" >
            <div class="container">
                <b-navbar-nav class="ml-auto">
                    <b-navbar-nav>
                        <b-nav-item class="header-text text-uppercase border-right border-white h-75 mt-1" href="#">SignUP</b-nav-item>
                        <b-nav-item class="header-text text-uppercase h-75 mt-1" href="#">Login</b-nav-item>
                    </b-navbar-nav>
                </b-navbar-nav>
            </div>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'NavHeader'
}
</script>

<style scoped>
.header-top
{
    background-color: #25130e !important;
    height: 38px;
}

.header-text a
{
    color:white !important;
    font-size:16px;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 20px;
}

.list-a::before
{
    
}
</style>