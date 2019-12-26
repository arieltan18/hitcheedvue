<template>
    <div class="mb-5" >
        <div class="mb-2">
            <div class="col-sm-12 text-center">
                <h1>{{ this.category_name }}</h1>
            </div>
        </div>
        <ProfessionalSection :category_id="this.category.id" :category_name="this.category_name" :first="40" :page="1"></ProfessionalSection>
    </div>
</template>

<script>
import ProfessionalSection from './ProfessionalSection.vue';
import { CATEGORIES_FILTER } from '../../graphql/graphql.js';
import { metaResolver } from "../../helpers";

export default {
    name: "ProfessionalsByCategory",
    metaInfo: metaResolver.bind('category'),
    components: {
        ProfessionalSection,
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

.articles-section
{
    width: 100%;
    background-color: rgba(221, 218, 217, 0.5);
}
</style>
