<template>
    <div>
        <NavHeader :is-transparent="isTransparent"></NavHeader>
        <NavMenu :is-transparent="isTransparent" :variant="variant" :theme="theme" :type="type"></NavMenu>
    </div>
</template>

<script>
    import NavHeader from "./TransparentNavHeader";
    import NavMenu from "./NavMenu";
    export default {
        name: "NavBar",
        components: {NavMenu, NavHeader},
        data(){
          return {
              isScrolled: false,
          }
        },
        computed:{
            hasTransparentOnTop(){
                return this.$route.path === '/';
            },
            isTransparent(){
                return this.hasTransparentOnTop && !this.isScrolled;
            },
            variant(){
                return this.isTransparent ? 'white' : 'secondary';
            },
            theme(){
                return this.isTransparent ? 'white' : 'black';
            },
            type(){
                return this.isTransparent? 'dark' : 'light';
            }
        },
        methods:{
            onScroll(){
                if(!this.isScrolled && window.scrollY > 100){
                    this.isScrolled = true;
                } else if(this .isScrolled && window.scrollY < 100){
                    this.isScrolled = false;
                }
            }
        },
        mounted(){
            window.addEventListener('scroll', this.onScroll);
        },
    }
</script>

<style scoped>

</style>
