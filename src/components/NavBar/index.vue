<template>
    <div>
        <NavHeader :fixed="fixHeader" :is-transparent="isTransparent"></NavHeader>
        <NavMenu :fixed="fixHeader" :is-transparent="isTransparent" :variant="variant" :theme="theme" :type="type"></NavMenu>
    </div>
</template>

<script>
    import NavHeader from "./NavHeader";
    import NavMenu from "./NavMenu";
    export default {
        name: "NavBar",
        components: {NavMenu, NavHeader},
        data(){
          return {
              isScrolled: false,
              fixHeader: false,
              lastScrollY: 0,
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
                if(!this.isScrolled && window.scrollY > 150){
                    this.isScrolled = true;
                } else if(this .isScrolled && window.scrollY < 150){
                    this.isScrolled = false;
                }
                const scrollY = window.scrollY;
                if(scrollY < this.lastScrollY){
                    this.fixHeader = true;
                }else if(this.fixHeader){
                    this.fixHeader = false;
                }
                this.lastScrollY = window.scrollY;
            }
        },
        mounted(){
            window.addEventListener('scroll', this.onScroll);
        },
    }
</script>

<style scoped>

</style>
