<template>
    <div class="container-fluid mb-5" v-if="articleItems.length >0" >
        <div class="container">
            <div class="row mb-4">
                <div class="col-sm-12 text-center">
                    <router-link :to="{ name: 'articlesHome'}" class="header-link">
                        <h1>Articles</h1>
                    </router-link>
                </div>
            </div>
            <div class="row">
                <div v-for="articleItem in articleItems" :key="articleItem.id" class="col-md-3 float-left">
                    <ArticleItems :articleItem="articleItem" />
                </div>
            </div>
            <div class="col-12 pb-5">
                <button class="see-more-link" v-if="this.articleItems.length < totalItems" :disabled="isLoading" @click="loadMore()">See more Articles</button>
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
            isLoading: false
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
                this.articleItems = response.data.stories;
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
h1 {
    font-family: 'Cormorant Garamond';
    font-weight: normal;
    font-size: 36px;
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
}
</style>
