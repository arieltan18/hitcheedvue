<template>
    <div class="container-fluid pb-5">
        <div class="container">
            <div class="row mb-4">
                <div class="col-sm-12 text-center">
                    <router-link :to="{ name: 'articlesHome'}" class="header-link">
                        <h1>Articles</h1>
                    </router-link>
                </div>
            </div>
            <div v-if="pageLoading"><i class="fa fa-spinner fa-spin"></i></div>
            <div class="row">
                <div v-for="articleItem in articleItems" :key="articleItem.id" class="col-md-3 float-left">
                    <ArticleItems :articleItem="articleItem" />
                </div>
            </div>
            <div class="col-12 pb-5">
                <button class="see-more-link" v-if="this.articleItems.length < totalItems" :disabled="isLoading" @click="loadMore()">See more Articles <i v-if="isLoading" class="fa fa-spinner fa-spin"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
import ArticleItems from './ArticleItems.vue';
import axios from 'axios';

export default {
    name: "Articles",
    metaInfo:{
      title: 'Articles'
    },
    components: {
        ArticleItems
    },
    data() {
        return {
            articleItems: [],
            totalItems: '',
            page: 1,
            isLoading: false,
            pageLoading:true,
        }
    },
    methods: {
         getFullArticleItems () {
            //get the current timestamp
            const date = Date.now();

            const url = process.env.VUE_APP_STORYBLOK_API + '&per_page=40&page=' + this.page + '&starts_with=blog&cv=' + date;

            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'cache-control':'no-cache'
            }
            axios.get(url)
            .then((response) => {
                this.articleItems = response.data.stories;
                this.totalItems = response.headers.total;
                this.pageLoading=false;
            })
            .catch(error => {
                console.log(error);
            });
        },
        getTagFilteredArticleItems (tag) {
            //get the current timestamp
            const date = Date.now();

            const url = process.env.VUE_APP_STORYBLOK_API + '&starts_with=blog&cv=' + date + '&with_tag=' + encodeURIComponent(tag);

            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'cache-control':'no-cache'
            }
            axios.get(url)
            .then((response) => {
                console.log(url);
                this.articleItems = response.data.stories;
                this.pageLoading=false;
            })
            .catch(error => {
                console.log(error);
            });
        },
        loadMore()
        {
            this.isLoading = true;
            this.page = this.page + 1;

            //get the current timestamp
            const date = Date.now();

            const url = process.env.VUE_APP_STORYBLOK_API + '&per_page=40&page=' + this.page + '&starts_with=blog&cv=' + date;

            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'cache-control':'no-cache'
            }
            axios.get(url)
            .then((response) => {
                this.articleItems.push(...response.data.stories);
                this.isLoading = false;
            })
            .catch(error => {
                console.log(error);
            });
        }
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
.container-fluid
{
    background-color: rgba(250, 250, 250, 1);
}

h1 {
    font-family: 'Cormorant Garamond';
    font-weight: normal;
    font-size: 36px;
    color: #26140E;
}

.col-md-3
{
    padding-right: 10px;
    padding-left: 10px;
}

.text-center
{
    text-align: center;
}

.header-link
{
    text-decoration: none;
    color: black;
}
.see-more-link
{
    border:none;
    text-decoration: none;
    color: #26140E;
    font-style: italic;
    font-size: 18px;
    text-align: center;
    font-family: 'Cormorant Garamond';
    border-bottom: 0.5px solid #26140E;
    text-transform: capitalize;
    background-color: rgba(250, 250, 250, 1);
}
</style>
