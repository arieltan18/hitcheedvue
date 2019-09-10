<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="article-date">{{ date(articleContent.createdAt )}}</div>
                <div v-html=articleContent.content.body></div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: "ArticleContentBody",
    props: ['articleContent'],
    data() {
        return {
            //body: this.articleContent.content.body,

        }
    },
    methods: {
        date: function (date) {
            return moment(date).format('MMM d, YYYY');
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
}
</style>