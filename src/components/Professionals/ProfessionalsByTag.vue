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
        <ProfessionalsTagSection :tag_id="this.tags.id"></ProfessionalsTagSection>
        <div class="articles-section">
            <RelatedArticles></RelatedArticles>
        </div>
        <div class="container mt-5">
            <!-- <router-link :key="this.category_name" class="see-more-link" :to="{ name: 'projectsByCategoryAll', params: { category: this.$route.params.category } }">See More {{ this.category_name }}</router-link> -->
        </div>
    </div>
</template>

<script>
import ProfessionalsTagSection from './ProfessionalsTagSection.vue';
import PopularSearchesNav from "../PopularSearches/PopularSearchesNav.vue";
import RelatedArticles from "../Articles/RelatedArticles.vue";
import { CATEGORY } from '../../graphql/graphql.js';
import { TAG_FILTER } from '../../graphql/graphql.js';

export default {
    name: "ProfessionalsByTag",
    components: {
        ProfessionalsTagSection,
        PopularSearchesNav,
        RelatedArticles
    },
    mounted() {

        this.tag_name = this.$route.params.tag_name;

        if(this.$route.params.tag_name.includes('-'))
        {
            this.tag_name = this.$route.params.tag_name.replace(/-/g, ' ');
        }

        this.tag_name = this.capitalizeText(this.tag_name);

        this.category_name = this.$route.params.category;

        if(this.$route.params.category.includes('-'))
        {
            this.category_name = this.$route.params.category.replace(/-/g, ' ');
        }

        this.category_name = this.capitalizeText(this.category_name);
    },
    data() {
        return {
            tag_name: '',
            tags: [],
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
        tags: {
            query: TAG_FILTER,
            variables() {
                return {
                    name: this.tag_name
                }
            },
            update(data)
            {
                return data.tag_filter;
            }
        },
        category: {
            query: CATEGORY,
            variables() {
                return {
                    id: this.tags.id
                }
            },
            update(data)
            {
                return data.category
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
