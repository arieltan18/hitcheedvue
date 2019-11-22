<template>
    <div class="container">
        <h6>Popular {{ this.category_name }} Searches</h6>
        <div class="row d-flex justify-content-between text-left pl-2">
            <vueper-slides class="tag-slider no-shadow" :visible-slides="6" slide-multiple :slide-ratio="1/4" arrows-outside :bullets="false" transition-speed="250" style="width:100%;">
                <div slot="arrowLeft" color="white" large class="hide"><img src="https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/home-page/Group29.svg" alt="left-arrow" width="25px"></div>
                <div slot="arrowRight" color="white" large v-if="tags.data.length<6" :class="hide">
                </div>
                <vueper-slide
                    v-for="tag in tags.data"
                    :key="tag.id">
                    <div slot="slideContent">
                        <router-link :key="tag.name" class="tag-link" :to="{ name: 'projectsByTag', params: { category: raw_category_name ,tag_name: processTagName(tag.name) }}">
                        <div class="block">
                            {{ tag.name }}
                        </div>
                        </router-link>
                    </div>
                </vueper-slide>
            </vueper-slides>
        </div>
        <hr />
    </div>
</template>

<script>
import { CATEGORIES_FILTER } from '../../graphql/graphql.js';
import { TAGS_BY_CATEGORY_BY_PAGINATE } from '../../graphql/graphql.js';
import { VueperSlides, VueperSlide } from 'vueperslides'
import { TAG_FILTER } from '../../graphql/graphql.js';

export default {
    name: 'PopularSearchesNav',
    components: {
        VueperSlides, 
        VueperSlide
    },
    data() {
        return {
            category_name:'',
            category: [],
            tags: [],
            raw_category_name: this.$route.params.category
        }
    },
    mounted() {

        if(this.$route.params.category)
        {
            this.category_name = this.$route.params.category;

            if(this.$route.params.category.includes('-'))
            {
                this.category_name = this.$route.params.category.replace(/-/g, ' ');
            }

            this.category_name = this.capitalizeText(this.category_name);
        }

    },
    methods: {
        capitalizeText(text) {
            text = text.toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ');

            return text;
        },
        processTagName(text) {
            text = text.replace(/\s+/g,'-').toLowerCase();;

            return text;
        }
    },
    apollo: {
        category: {
            query: CATEGORIES_FILTER,
            variables() {
                return {
                    name: this.category_name
                }
            },
            update(data)
            {
                return data.category_filter;
            }
        },
        //query the first 6 tags by category with pagination
        tags: {
            query: TAGS_BY_CATEGORY_BY_PAGINATE,
            variables() {
                return {
                    category_id: this.category.id,
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
}
.block
{
    border:0.5px solid rgba(38, 20, 14, .5);
    color: #26140E;
    font-size: 12px;
    letter-spacing: 1.2px;
    font-family: 'Open Sans';
    text-align: center;
    padding: 12px 25px;
    text-transform: uppercase;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    margin-right:15px;
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
</style>