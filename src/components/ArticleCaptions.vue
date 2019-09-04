<template>
    <div>
        <h4 >
            <a class="article-title align-left" href="">{{articleItem.meta.title}}</a>
        </h4>
        <div class="attr">{{ date(articleItem.version.createdAt)}}</div>
        <div class="category">
            <span>
                <a class="btn btn-primary ue-popup-button article-category-btn">
                    {{articleItem.content.category.data[0].zuid}}
                </a>
            </span>
        </div>
        <div class="art-readmore">
            <a class="readmore"> Read More <i class="fa fa-angle-right"></i></a>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import axios from 'axios';

const baseURL = 'https://p1hs79r9-dev.preview.zestyio.com';
const url = baseURL + 'articleItem.content.category.data[0].zuid';

export default {
    name: "ArticleCaptions",
    props: ['articleItem'],
    methods: {
        date: function (date) {
            return moment(date).format('Do MMMM YYYY');
        },

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

.article-category-btn
{
    padding: 5px;
    font-size: 10px;
    text-transform: none;
    border-radius: 5px;
    max-width: 100%;
}

.art-readmore
{
    margin-top: 5%;
}

.readmore
{
    font-weight: 700;
}

</style>