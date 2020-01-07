<template>
    <div class="container">
        <div class="row">
            <div class="related-articles-title">Related Articles</div>
        </div>
        <div class="row articles-slider">
            <vueper-slides class="no-shadow" :visible-slides="2" slide-multiple :slide-ratio="1/4" arrows-outside :bullets="false" transition-speed="250" style="width:100%;">
                <template v-slot:arrow-left>
                    <img src="https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group29.svg" alt="left-arrow" width="25px">
                </template>
                <template v-slot:arrow-right>
                    <img src="https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group28.svg" alt="right-arrow" width="25px;">
                </template>
                <vueper-slide
                    v-for="articleItem in articleItems"
                    :key="articleItem.id"
                    :title="articleItem.body_text">
                    <div slot="content">
                        <router-link :to="{ name: 'singleArticlePage', params: { slug: articleItem.slug }}" class="read-link">
                            <div class="col-md-6 article-img">
                                <img :src="'https:'+ articleItem.content.cover" width="100%"  height="173px">
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
                </vueper-slide>
            </vueper-slides>
        </div>
    </div>
</template>

<script>
import ArticleItems from './ArticleItems.vue';
import axios from 'axios';
import moment from 'moment';
import { VueperSlides, VueperSlide } from 'vueperslides'

export default {
    name: 'RelatedArticles',
    components: {
        ArticleItems,
        VueperSlides,
        VueperSlide
    },
    data() {
        return {
            articleItems: [],
            category_name: '',
            articleTag: ''
        }
    },
    methods: {
        getArticlesWithTag () 
        {
            //get the current timestamp
            const date = Date.now();

            var articleTagList = {
                "0" : "Bridal Studios",
                "1" : "caterers",
                "2" : "Gowns %26 Suits ",
                "3" : "Hair %26 Makeup",
                "4" : "Hotels/Venues",
                "5" : "Ideas We Love",
                "6" : "Others",
                "7" : "Photographers/Videographers",
                "8" : "Photoshoot/Videoshoot Ideas",
                "9" : "Reception And Venues",
                "10" : "Wedding Advice"
            }

            for (var index in articleTagList)
            {
                if(articleTagList[index].includes(this.category_name))
                {
                    this.articleTag = articleTagList[index];
                }
            }

            if(this.category_name=='Bridal Studios')
            {
                this.articleTag = articleTagList[2];
            }

            const url = process.env.VUE_APP_STORYBLOK_API + '&page=1&per_page=20&starts_with=blog&with_tag=' + this.articleTag + '&cv=' + date;

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
        },
        capitalizeText(text) {
            text = text.toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ');

            return text;
        }
    },
    mounted()
    {
        this.category_name = this.$route.params.category;

        if(this.$route.params.category.includes('-'))
        {
            this.category_name = this.$route.params.category.replace(/-/g, ' ');
        }

        this.category_name = this.capitalizeText(this.category_name);

        this.getArticlesWithTag();
    }

}
</script>

<style scoped>
.container
{
    padding: 3em 0 2em;
}

.related-articles-title
{
    font-family: 'Cormorant Garamond';
    font-style: italic;
    font-size: 20px;
    text-align: left;
    color: #26140E;
}

.article-img
{
    padding-right: 0px;
    padding-left: 0px;
    display: inline-block;
}

.article-img
{
    max-width: 255px;
}

.article-img img
{
    object-fit: cover;
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

.article-date
{
    font-family: 'Open Sans';
    font-size: 10px;
    letter-spacing: 0.5px;
    color: #26140E;
    opacity: 0.5;
}
.vueperslides__track-inner
{
    padding-top: 50px !important;
}
</style>
