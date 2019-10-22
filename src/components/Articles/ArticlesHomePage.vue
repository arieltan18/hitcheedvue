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
                <div class="col-md-6 left-article">
                    <router-link :to="articleItems[0].slug" class="read-link">
                        <img class="mb-2" :src="articleItems[0].content.cover " alt="" width="100%">
                        <div class="tag text-center" v-if="articleItems[0].tag_list">
                            <span v-for="tag in articleItems[0].tag_list" :key="tag" class="mr-3">
                                <router-link class="article-tag-btn" :to="{ name: 'articlesTag', query: { tag: tag }}">
                                    {{ tag }}
                                </router-link>
                            </span>
                        </div>
                        <div class="article-name">
                            {{ articleItems[0].name }}
                        </div>
                        <div class="article-date">
                            {{ date(articleItems[0].first_published_at) }}
                        </div>
                        <div class="read-btn mt-4">
                            <router-link :to="articleItems[0].slug" class="read-link">Read Article</router-link>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-6 right-article">
                    <div class="article-item mb-3" v-for="articleItem in articleItems.slice(1)" :key="articleItem.id" >
                        <router-link :to="articleItem.slug" class="read-link">
                            <div class="col-md-6 article-img">
                                <img :src="articleItem.content.cover" width="100%"  height="173px">
                            </div>
                            <div class="col-md-6 article-details">
                                <div class="tag text-left" v-if="articleItem.tag_list">
                                    <router-link class="article-tag-btn mr-2"  v-for="tag in articleItem.tag_list" :key="tag" :to="{ name: 'articlesTag', query: { tag: tag }}">
                                        {{ tag }}
                                    </router-link>
                                </div>
                                <div class="name mt-2 mb-4">{{ articleItem.name }}</div>
                                <div class="article-date text-left">
                                    {{ date(articleItem.first_published_at) }}
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="text-center mt-4">
                <div class="link">
                    <router-link :to="{ name: 'articlesHome'}" class="link-text">See All Articles</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import axios from 'axios';

export default {
    name: "Articles",
    data() {
        return {
            articleItems: [],
        }
    },
    methods: {
         getFullArticleItems () {
            //get the current timestamp
            const date = Date.now();

            const url = process.env.VUE_APP_STORYBLOK_API + '&page=1&per_page=4&starts_with=blog&cv=' + date;

            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'cache-control':'no-cache'
            }
            axios.get(url)
            .then((response) => {
                this.articleItems = response.data.stories;
                this.articleItems[0].slug = '/articles/' + this.articleItems[0].slug;
                this.articleItems[1].slug = '/articles/' + this.articleItems[1].slug;
                this.articleItems[2].slug = '/articles/' + this.articleItems[2].slug;
                this.articleItems[3].slug = '/articles/' + this.articleItems[3].slug;
                this.articleItems[0].content.cover = 'https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/home-page/sweet-ice-cream-photography-1219572-unsplash2x.png';
                this.articleItems[1].content.cover = 'https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/home-page/dmitry-schemelev-1205165-unsplash%402x.png';
                this.articleItems[2].content.cover = 'https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/home-page/xd45Y326SvKzSR3Nanc8_MRJ_8125-1%402x.png';
                this.articleItems[3].content.cover = 'https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/home-page/adult-architecture-bride-1488315%402x.png';
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
        date: function (date) {
            return moment(date).format('Do MMMM YYYY');
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

.link
{
    font-family: 'Cormorant Garamond';
    font-style: italic;
    font-size: 18px;
    
    cursor: pointer;
    /* text-decoration: underline; */
}
.link-text
{
    padding-bottom:2px;
    border-bottom: 0.5px solid #26140E;
    color: #26140E;
    text-decoration: none;
    text-transform: capitalize;
}
.left-article
{
    width: 100%;
}
.article-name
{
    font-family: 'Cormorant Garamond';
    font-size: 28px;
    color: #26140E;
    padding:10px 20px;
    line-height: 1.1em;
}
.article-date
{
    font-family: 'Open Sans';
    font-size: 10px;
    letter-spacing: 0.5px;
    color: #26140E;
    opacity: 0.5;
}
.read-btn
{
    padding:12px 20px;
    color: #ffffff;
    font-size: 12px;
    font-family: 'Open Sans';
    letter-spacing: 1.2px;
    background-color: #88D1CF;
    border: 1px solid #88D1CF;
    border-radius: 5px;
    text-transform: uppercase;
    margin: auto;
    width: 144px;
}
.read-link
{
    text-decoration: none;
    color: #ffffff;
}
.article-img
{
    padding-right: 0px;
    padding-left: 0px;
    display: inline-block;
}
.article-details
{
    display: inline-block;
    width: 100%;
    vertical-align: top;
}
.name
{
    text-align: left;
    font-family: 'Cormorant Garamond';
    font-size: 20px;
    line-height: 1.1em;
    color: #26140E;
}
.article-tag-btn
{
    text-decoration: none;
    color: #26140E;
    font-size: 10px;
    font-family: 'Open Sans';
    letter-spacing: 1px;
    line-height: 1.1em;
    text-transform: uppercase;
    border-bottom:1px solid #bababa;
}
</style>