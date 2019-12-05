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
        <ProfessionalSectionOthers :first="8" :page="1"></ProfessionalSectionOthers>
        <ProfessionalSectionOthers :first="8" :page="2"></ProfessionalSectionOthers>
        <div class="articles-section">
            <RelatedArticles></RelatedArticles>
        </div>
        <div class="container mt-5">
            <router-link class="see-more-link" :to="{ name: 'professionalsByCategoryAll', params: { category: this.$route.params.category } }">See More {{ this.category_name }}</router-link>
        </div>
    </div>
</template>

<script>
import ProfessionalSectionOthers from './ProfessionalSectionOthers.vue';
import { CATEGORIES_FILTER } from '../../graphql/graphql.js';
import PopularSearchesNav from "../PopularSearches/PopularSearchesNav.vue";
import RelatedArticles from "../Articles/RelatedArticles.vue";

export default {
    name: "ProfessionalsByOtherCountries",
    components: {
        ProfessionalSectionOthers,
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
            professionals: [],
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
.articles-section
{
    width: 100%;
    background-color: rgba(221, 218, 217, 0.5);
}
</style>
