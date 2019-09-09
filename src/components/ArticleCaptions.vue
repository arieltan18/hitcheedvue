<template>
    <div>
        <h4 >
            <a class="article-title align-left" href="">{{articleItem.content.title}}</a>
        </h4>
        <div class="attr">{{ date(articleItem.createdAt)}}</div>
        <div class="category" v-if="articleItem.content.category">
            <span>
                <a class="btn ue-popup-button article-category-btn" href="">
                    {{ getCategoryName(articleItem.content.category) }} {{ category }}
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

const baseURL = 'https://api.storyblok.com/v1/cdn/stories?version=published';

export default {
    name: "ArticleCaptions",
    data() {
        return {
            category: ''
        }
    },
    props: ['articleItem'],
    methods: {
        date: function (date) {
            return moment(date).format('Do MMMM YYYY');
        },
        getCategoryName (uuid) {
            const category_params = baseURL + '&token=QNx6VlHAVqJWs82bNe8Ymgtt&cv=1568013388&by_uuids=' + uuid;
            
            axios
            .get(category_params)
            .then((response) => {
                //console.log(response.data.stories[0].name);
                this.category = response.data.stories[0].name;
            })
            .catch(error => {
                console.log(error);
            });
        }

    },
    created() {
        
    }
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
}

</style>