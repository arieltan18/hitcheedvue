<template>
    <div class="container-fluid mb-5" v-if="articleItems.length >0" >
        <div class="container">
            <div class="row mb-4">
                <div class="col-sm-12 text-center">
                    <h1>Articles</h1>
                </div>
            </div>
            <div class="row">
                <div v-for="articleItem in articleItems" :key="articleItem.id" class="col-md-3 float-left">
                    <ArticleItems :articleItem="articleItem" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ArticleItems from './ArticleItems.vue';
import axios from 'axios';

export default {
    name: "Articles",
    components: {
        ArticleItems
    },
    data() {
        return {
            articleItems: [],
        }
    },
    methods: {
         getFullArticleItems () {
            //get the current timestamp
            const date = Date.now();

            const baseURL = 'https://api.storyblok.com/v1/cdn/stories?version=published';
            const url = baseURL + '&token=redXm4rXjmjvRpRzJE6lFQtt&starts_with=blog' + '&cv=' + date;

            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'cache-control':'no-cache'
            }
            axios.get(url)
            .then((response) => {
                this.articleItems = response.data.stories;
            })
            .catch(error => {
                console.log(error);
            });
        },
        getTagFilteredArticleItems (tag) {
            //get the current timestamp
            const date = Date.now();

            const baseURL = 'https://api.storyblok.com/v1/cdn/stories?version=published';
            const url = baseURL + '&token=redXm4rXjmjvRpRzJE6lFQtt&starts_with=blog' + '&cv=' + date + '&with_tag=' + encodeURIComponent(tag);

            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'cache-control':'no-cache'
            }
            axios.get(url)
            .then((response) => {
                this.articleItems = response.data.stories;
            })
            .catch(error => {
                console.log(error);
            });
        },
    },
    mounted() 
    {
        if(!this.$route.query.tag)
        {
            this.getFullArticleItems();
        }
    },
    beforeRouteEnter (to, from, next) 
    {
        next(vm => {
            // access to component instance via `vm`
            vm.getTagFilteredArticleItems(to.query.tag);
        })
        next();
    },
    beforeRouteUpdate (to, from, next)
    {
        this.getTagFilteredArticleItems(to.query.tag);
        next();
    }
}

</script>

<style scoped>
h1 {
    font-family: 'Cormorant Garamond';
    font-weight: normal;
    font-size: 36px;
}

.text-center
{
    text-align: center;
}
</style>