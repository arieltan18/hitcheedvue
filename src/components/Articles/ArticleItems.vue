<template>
    <div>
        <div class="article-item">
            <ArticleImg :articleItem="articleItem"/>
            <ArticleCaptions :articleItem="articleItem"/>
        </div>
    </div>
</template>

<script>
import ArticleImg from './ArticleImg.vue'
import ArticleCaptions from "./ArticleCaptions.vue";

export default {
    name: "ArticleItems",
    components: {
        ArticleCaptions,
        ArticleImg
    },
    props: ['articleItem'],

}
</script>

<style scoped>
.article-item
{
    background-color: #fff;
    margin-bottom: 30px;
    position:relative;
}

.clear-both
{
    clear: both;
}
</style>