<template>
    <div>
        <div class="container-fluid bg-color">
            <div class="container">
                <div class="article-header">
                    <h1>Articles</h1>
                </div>
            </div>

        </div>
        <div class="mt-2" v-if="isLoading"><i class="fa fa-spinner fa-spin"></i></div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <ArticleContentTitle :articleContent="articleContent" />
                    <ArticleContentBody :articleContent="articleContent" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ArticleContentTitle from "./ArticleContentTitle.vue";
import ArticleContentBody from "./ArticleContentBody.vue";
import {metaResolver} from "../../helpers";

export default {
    name: "ArticleContent",
    metaInfo: metaResolver.bind('articleContent'),
    components: {
        ArticleContentTitle,
        ArticleContentBody,
    },
    data() {
        return {
            articleContent: [],
            professionals: [],
            isLoading: true
        }
    },
    methods: {
        getArticleContents ()
        {
            //get the current timestamp
            const date = Date.now();

            const slug = this.$route.params.slug;
            const article_url = process.env.VUE_APP_STORYBLOK_API + '&cv=' + date + '&starts_with=blog/' + slug;

            axios
            .get(article_url)
            .then((response) => {
                this.articleContent = response.data.stories[0];
                this.isLoading = false;
            })
            .catch(error => {
                console.log(error);
            });
        }
    },
    beforeMount()
    {
        this.getArticleContents();
    },

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
    color: #26140E;
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

.featured-product
{
    text-align: center;
    margin-top: 10px;
    font-family: 'Open Sans';
    font-size: 30px;
    line-height: 30px;
    color: #25130e;
}

</style>
