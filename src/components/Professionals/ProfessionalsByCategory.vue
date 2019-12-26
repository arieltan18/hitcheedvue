<template>
    <div class="mb-5" >
        <div class="mb-2">
            <div class="col-sm-12 text-center">
                <h1>{{ this.category_name }}</h1>
            </div>
        </div>
        <div class="container">
            <PopularSearchesNav></PopularSearchesNav>
        </div>
        <div v-if="this.category_name!='Other Countries'">
            <ProfessionalSection :category_id="this.category ? this.category.id : ''" :category_name="this.category_name" :first="8" :page="1"></ProfessionalSection>
            <div class="promotions-section mb-5" v-if="this.promotions.data.length > 0">
                <PromotionsByCategory :category_name="this.category_name" :promotions="this.promotions"/>
            </div>
            <ProfessionalSection :category_id="this.category ? this.category.id : ''" :category_name="this.category_name" :first="8" :page="2"></ProfessionalSection>
        </div>
        <div v-else >
            <ProfessionalSectionOthers :first="8" :page="1"></ProfessionalSectionOthers>
            <ProfessionalSectionOthers :first="8" :page="2"></ProfessionalSectionOthers>
        </div>
        <div class="articles-section">
            <RelatedArticles></RelatedArticles>
        </div>
        <div class="container mt-5">
            <router-link class="see-more-link" :to="{ name: 'professionalsByCategoryAll', params: { category: this.$route.params.category } }">See More {{ this.category_name }}</router-link>
        </div>
    </div>
</template>

<script>
import ProfessionalSection from './ProfessionalSection.vue';
import ProfessionalSectionOthers from './ProfessionalSectionOthers.vue';
import { CATEGORIES_FILTER } from '../../graphql/graphql.js';
import PopularSearchesNav from "../PopularSearches/PopularSearchesNav.vue";
import RelatedArticles from "../Articles/RelatedArticles.vue";
import PromotionsByCategory from "../Events&Promotions/PromotionsByCategory.vue";
import { PROMOTIONS_BY_CATEGORY_PAGINATE } from '../../graphql/graphql.js';

export default {
    name: "ProfessionalsByCategory",
    components: {
        ProfessionalSection,
        ProfessionalSectionOthers,
        PopularSearchesNav,
        RelatedArticles,
        PromotionsByCategory
    },
    mounted() {

        this.category_name = this.$route.params.category;

        if(this.$route.params.category.includes('-'))
        {
            this.category_name = this.$route.params.category.replace(/-/g, ' ');
        }

        this.category_name = this.capitalizeText(this.category_name);

    },
    data() {
        return {
            professionals: [],
            promotions: [],
            category_name: '',
        }
    },
    methods: {
        capitalizeText(text) {
            text = text.toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ');

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
        promotions: {
            query: PROMOTIONS_BY_CATEGORY_PAGINATE,
            variables() {
                return {
                    category_id: this.category.id,
                    first: 2,
                    page: 1
                }
            },
            update(data)
            {
                return data.promotions_by_category_paginate;
            }
        }
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

.professional-padding
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
.promotions-section
{
    width: 100%;
    background-color: rgba(221, 218, 217, 0.5);
}
.articles-section
{
    width: 100%;
    background-color: rgba(221, 218, 217, 0.5);
}
</style>
