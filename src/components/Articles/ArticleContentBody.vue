<template>
    <div class="container">
        <div class="row">
            <div class="article-date">{{ date(articleContent.first_published_at )}}</div>
            <vue-simple-markdown class="article-content" :source="articleContent.content.body"></vue-simple-markdown>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: "ArticleContentBody",
    props: ['articleContent'],
    methods: {
        date: function (date) {
            return moment(date).format('MMM D, YYYY');
        },
    }
    
}
</script>

<style scoped>
.article-date
{
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 700;
    text-align: left;
    margin-bottom: 10px;
    color: #26140E;
}

.article-content
{
    width: 100%;
    margin-bottom: 30px;
    color: #26140E;
}
</style>