<template>
    <router-link class="article-img" :to="slug">
        <img class="img" :src="articleItem.content.cover">
    </router-link>
</template>

<script>
    export default {
        name: "ArticleImg",
        props: ['articleItem'],
        computed: {
        slug: function () {
            const routerLink = '/articles/' + this.articleItem.slug ;
            return routerLink;
        }
    },
    }
</script>

<style scoped>
.article-img
{
    color: #89d1cf;
    text-decoration: none;
    display: block;
}

.img
{
    width: 100%;
    max-width: 100%;
    display: block;
}

</style>