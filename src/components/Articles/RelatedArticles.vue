<template>
    <div class="container">
        <div class="row">
            <div class="related-articles-title">Related Articles</div>
        </div>
        <div class="row">
            <div v-for="articleItem in articleItems" :key="articleItem.id" class="col-md-6 float-left mt-3 pl-0">
                <div class="text-left mr-1">
                    <img :src="'https:'+ articleItem.content.cover" width="266px">
                    <div class="tags" v-if="articleItem.tag_list"></div>
                    <div class="article-title">
                        {{ articleItem.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ArticleItems from './ArticleItems.vue';
import axios from 'axios';

export default {
    name: 'RelatedArticles',
    components: {
        ArticleItems
    },
    data() {
        return {
            articleItems: [],
        }
    },
    methods: {
        getArticles () {
            //get the current timestamp
            const date = Date.now();

            const url = process.env.VUE_APP_STORYBLOK_API + '&page=1&per_page=2&starts_with=blog&cv=' + date;
        
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
        }
    },
    mounted()
    {
        this.getArticles();
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
</style>