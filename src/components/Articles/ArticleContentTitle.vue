<template>
    <div class="container">
        <div class="row">
            <h2 class="article-title">
                <span>{{articleContent.name}}</span>
            </h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "ArticleContentTitle",
    props: ['articleContent']
}
</script>

<style scoped>
.article-title
{
    text-align: left;
    margin-bottom: 23px;
    font-size: 28px;
    position: relative;
    text-transform: uppercase;
    margin-bottom: 35px;
    color: #26140E;
}
</style>
