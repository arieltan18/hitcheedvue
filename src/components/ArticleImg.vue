<template>
    <a href="" class="article-img">
        <img class="img" :src="articleItem.content.cover.data[0].url">
    </a>
</template>

<script>
    export default {
        name: "ArticleImg",
        props: ['articleItem'],
    }
</script>

<style scoped>
.article-img
{
        color: #89d1cf;
        text-decoration: none;
        display: block;
        margin-bottom: 10px;
}

.img
{
    width: 100%;
    max-width: 100%;
    display: block;
    vertical-align: middle;
}

</style>