<template>
    <div class="text-left p-md-2">
        <h4>
            <router-link class="article-title align-left" :to="slug" >{{ articleItem.name }}</router-link>
        </h4>
        <div class="attr">{{ date(articleItem.first_published_at )}}</div>
        <div class="tag" v-if="articleItem.tag_list">
            <span v-for="tag in articleItem.tag_list" :key="tag" class="mr-2">
                <router-link class="btn ue-popup-button article-tag-btn" :to="{ name: 'articlesTag', query: { tag: tag }}">
                    {{ tag }}
                </router-link>
            </span>
        </div>
        <div class="art-readmore">
            <router-link class="readmore" :to="slug"> Read More <i class="fa fa-angle-right"></i></router-link>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: "ArticleCaptions",
    props: ['articleItem'],
    computed: {
        slug: function () {
            const routerLink = '/articles/' + this.articleItem.slug ;
            return routerLink;
        }
    },
    methods: {
        date: function (date) {
            return moment(date).format('Do MMMM YYYY');
        }
    },
}
</script>

<style scoped>
h4
{
    margin: 0 0 5px;
    font-size: 16px;
    line-height: 1.4;
}

.article-title
{
    color: #25130e;
    text-decoration: none;
    font-weight:700;
    font-size: 16px;
    line-height: 1.4;
}

.article-title:hover 
{
    text-decoration: underline;
}

.attr
{
    font-family: 'Cormorant Garamond';
    font-style: italic;
    font-size: 13px;
}

.category
{
    border-radius: 5px;
}

.ue-popup-button
{
    text-align: center;
    padding: 10px;
    letter-spacing: 1px;
    font-size: 15px;
    background-color: #64c3c0;
    border-radius: 8px;
    white-space: normal;
    text-transform: uppercase;
    margin-top: 3%;
}

.article-tag-btn
{
    color: #fff;
    padding: 5px;
    font-size: 10px;
    text-transform: none;
    border-radius: 5px;
    max-width: 100%;
    text-decoration: none;
    font-weight: 600;
}

.art-readmore
{
    margin-top: 5%;
}

.readmore
{
    font-weight: 700;
    color: #000;
    text-transform: uppercase;
    font-size: 13px;
}

.readmore:hover
{
    text-decoration: underline;
}

</style>