<template>
    <div class="container">
        <h6>Popular {{ this.categoryName }} Searches</h6>
        <vueper-slides class="no-shadow"
            arrows-outside :visible-slides="6" slide-multiple :slide-ratio="1/4" :dragging-distance="70" :bullets="false" fixedHeight="70px" :breakpoints="{ 600: { visibleSlides: 1, arrowsOutside: false, slideRatio: 1/4,  slideMultiple:false, infinite:false } }">
            <template v-slot:arrow-left>
                <img class="ml-4" src="https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group29.svg" alt="left-arrow" width="25px">
            </template>
            <template v-slot:arrow-right>
                <img class="mr-4" src="https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group28.svg" alt="right-arrow" width="25px;">
            </template>
            <vueper-slide v-for="tag in tags.data" :key="tag.id">
                <template v-slot:content>
                    <router-link :key="tag.name" class="tag-link" :to="{ name: 'professionalsByTag', params: { category: categoryName ,tag_name: processTagName(tag.name) }}">
                        <div class="block">
                            <div class="tag-text">{{ tag.name }}</div>
                        </div>
                    </router-link>
                </template>
            </vueper-slide>
        </vueper-slides>
    </div>
</template>

<script>
import { CATEGORIES_FILTER } from '../../graphql/graphql.js';
import { TAGS_BY_CATEGORY_BY_PAGINATE } from '../../graphql/graphql.js';
import { VueperSlides, VueperSlide } from 'vueperslides'
import { TAG_FILTER } from '../../graphql/graphql.js';

export default {
    name: 'PopularSearchesCategory',
    components: {
        VueperSlides,
        VueperSlide
    },
    props: ['categoryName','categoryId'],
    data() {
        return {
            category: [],
            tags: []
        }
    },
    mounted() {
        
        // if(this.$route.params.category)
        // {
        //     this.category_name = this.$route.params.category;

        //     if(this.$route.params.category.includes('-'))
        //     {
        //         this.category_name = this.$route.params.category.replace(/-/g, ' ');
        //     }

        //     this.category_name = this.capitalizeText(this.category_name);
        // }
    },
    methods: {
        // capitalizeText(text) {
        //     text = text.toLowerCase()
        //         .split(' ')
        //         .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        //         .join(' ');

        //     return text;
        // },
        processTagName(text) {
            text = text.replace(/\s+/g,'-').toLowerCase();;

            return text;
        },
    },
    apollo: {
        // category: {
        //     query: CATEGORIES_FILTER,
        //     variables() {
        //         return {
        //             name: this.category_name
        //         }
        //     },
        //     update(data)
        //     {
        //         return data.category_filter;
        //     }
        // },
        //query the first 6 tags by category with pagination
        tags: {
            query: TAGS_BY_CATEGORY_BY_PAGINATE,
            variables() {
                return {
                    category_id: this.categoryId,
                    first : 20,
                    page: 1,
                }
            },
            update(data)
            {
                return data.tags_by_category_paginate;
            }
        },
    },

}
</script>

<style lang="scss" scoped>
.container
{
    padding: 3em 0 2em;
}
h6
{
    text-align: left;
    font-family: 'Cormorant Garamond';
    font-style: italic;
    font-size: 20px;
    color: #26140E;
    margin-bottom: 16px;
    text-transform: capitalize;
}
.block
{
    border:0.5px solid rgba(38, 20, 14, .5);
    color: #26140E;
    font-size: 12px;
    letter-spacing: 1.2px;
    font-family: 'Open Sans';
    text-align: center;
    padding: 10px;
    text-transform: uppercase;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    margin:auto;
    min-height: 57px;
    display: table;
    width: 156px;
}
.hide
{
    display: none;
}
.tag-link
{
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 12px;
    text-decoration: none;
    color: #26140E;
    text-align: center;
    text-transform: uppercase;
}
.router-link-active div
{
    background-color: #0B0B0B;
    color: #ffffff;
}

.full-width
{
    width: 100%;
}

.tag-text
{
    display: table-cell;
    vertical-align: middle;
}

</style>
