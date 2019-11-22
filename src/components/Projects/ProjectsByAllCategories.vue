<template>
    <div class="mb-5" >
        <div class="mb-2">
            <div class="col-sm-12 text-center">
                <h1>{{this.hotels}}</h1>
            </div>
        </div>
        <ProjectSection :category_id="14" :first="8" :page="1"></ProjectSection>
        <div class="articles-section">
            <PopularSearchNavArticles :category_title="this.hotels"></PopularSearchNavArticles>
            <RelatedArticles></RelatedArticles>
        </div>
        <div class="container mt-5">
            <router-link class="see-more-link" to="/category/hotels">See More Hotels</router-link>
        </div>
        <div class="mt-5 mb-2">
            <div class="col-sm-12 text-center">
                <h1>{{this.venues}}</h1>
            </div>
        </div>
        <ProjectSection :category_id="5" :first="8" :page="1"></ProjectSection>
        <div class="articles-section">
            <PopularSearchNavArticles :category_title="this.venues"></PopularSearchNavArticles>
            <RelatedArticles></RelatedArticles>
        </div>
        <div class="container mt-5">
            <router-link class="see-more-link" to="/category/venues">See More Venues</router-link>
        </div>
    </div>
</template>

<script>
import ProjectSection from './ProjectSection.vue';
import { CATEGORIES_FILTER } from '../../graphql/graphql.js';
import RelatedArticles from "../Articles/RelatedArticles.vue";
import PopularSearchesNav from "../PopularSearches/PopularSearchesNav.vue";
import PopularSearchNavArticles from "../PopularSearches/PopularSearchNavArticles.vue";

export default {
    name: 'ProjectsByAllCategories',
    metaInfo:{
        title: 'Project Categories'
    },
    components: {
        ProjectSection,
        RelatedArticles,
        PopularSearchNavArticles
    },
    data() {
        return {
            hotels: 'Hotels',
            venues: 'Venues'
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
    }
}
</script>

<style scoped>
h1
{
    text-transform: capitalize;
    color: #26140E;
    font-family: 'Cormorant Garamond';
    font-weight: normal;
    font-size: 30px;
}

.project-padding
{
    padding-left: 10px;
    padding-right: 10px;
}

.text-center
{
    text-align: center;
}

.header-link
{
    text-decoration: none;
    color: black;
}

.see-more-link
{
    text-decoration: none;
    color: #26140E;
    font-style: italic;
    font-size: 18px;
    text-align: center;
    font-family: 'Cormorant Garamond';
    border-bottom: 0.5px solid #26140E;
    text-transform: capitalize;
}
.articles-section
{
    width: 100%;
    background-color: rgba(221, 218, 217, 0.5);
}
</style>
