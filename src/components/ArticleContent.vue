<template>
    <div>
        <div class="container-fluid bg-color">
            <div class="container">
                <div class="article-header"> 
                    <h1>Articles</h1>
                </div>
            </div>
            
        </div>
        <ArticleContentTitle :articleContent="articleContent" />
        <ArticleContentBody :articleContent="articleContent" />
    </div>
</template>

<script>
import axios from 'axios';
import ArticleContentTitle from "./ArticleContentTitle.vue";
import ArticleContentBody from "./ArticleContentBody.vue";

const baseURL = 'https://api.storyblok.com/v1/cdn/stories?version=published';

export default {
    name: "ArticleContent",
    components: {
        ArticleContentTitle,
        ArticleContentBody
    },
    data() {
        return {
            articleContent: ''
        }
    },
    methods: {
        getArticleContents ()
        {
            const slug = this.$route.params.slug;
            const article_params = baseURL + '&token=QNx6VlHAVqJWs82bNe8Ymgtt&cv=1568013388&starts_with=blog/' + slug;
            
            axios
            .get(article_params)
            .then((response) => {
                this.articleContent = response.data.stories[0];
            })
            .catch(error => {
                console.log(error);
            });
        }
    },
    beforeMount() 
    {
        this.getArticleContents();
    }

}
</script>


<style scoped>
.container-fluid
{
    margin-right: auto;
    margin-left: auto;
    padding-left: 10px;
    padding-right: 10px;
}

h1 
{
    text-align: left;
    font-family: 'Cormorant Garamond';
    font-weight: normal;
    font-size: 36px;
    line-height: 100px;
}

.article-header
{
    min-height: 100px;
    text-align: left;
    margin-bottom: 23px;
    font-weight: normal;
    font-size: 28px;
    position: relative;
}

.bg-color
{
    background-color: #f2f2f2;
}
</style>