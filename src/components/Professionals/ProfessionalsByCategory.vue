<template>
    <div class="mb-5" >
        <div class="mb-2">
            <div class="col-sm-12 text-center">
                <h1>{{ this.category_name }}</h1>
            </div>
        </div>
        <div class="container">
            <!-- <PopularSearchesNav></PopularSearchesNav> -->
        </div>
        <ProfessionalSection :category_id="this.category.id ? this.category.id : '1'"></ProfessionalSection>
        <!-- <div class="container">
            <div class="row">
                <div v-for="professional in professionals2.data" :key="professional.id" class="col-md-3 professional-padding mb-5">
                    <ProfessionalList :professional="professional" />
                </div>
            </div>
        </div> -->
        <div class="articles-section">
            <RelatedArticles></RelatedArticles>
        </div>
        <div class="container mt-5">
            <a href="" class="see-more-link">See More {{ this.category_name }}</a>
        </div>
    </div>
</template>

<script>
import ProfessionalSection from './ProfessionalSection.vue';
import { CATEGORIES_FILTER } from '../../graphql/graphql.js';
import PopularSearchesNav from "../PopularSearches/PopularSearchesNav.vue";
import RelatedArticles from "../Articles/RelatedArticles.vue";

export default {
    name: "ProfessionalsByCategory",
    components: {
        ProfessionalSection,
        PopularSearchesNav,
        RelatedArticles
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
            // professionals: [],
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
        // //query the first 8 professionals by category with pagination
        // professionals: {
        //     query: PROFESSIONALS_BY_CATEGORY_PAGINATE,
        //     variables() {
        //         return {
        //             category_id: this.category.id,
        //             first : 8,
        //             page: 1,
        //         }
        //     },
        //     update(data){
        //         return data.professionals_by_category_paginate;
        //     }
        // },
        // //query the second 8 professionals by category with pagination
        // professionals2: {
        //     query: PROFESSIONALS_BY_CATEGORY_PAGINATE,
        //     variables() {
        //         return {
        //             category_id: this.category.id,
        //             first : 8,
        //             page: 2,
        //         }
        //     },
        //     update(data){
        //         return data.professionals_by_category_paginate;
        //     }
        // }
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
.articles-section
{
    width: 100%;
    background-color: rgba(221, 218, 217, 0.5);
}
</style>
