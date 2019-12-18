<template>
    <div>
        <PageNotFound v-if="pageNotFound"></PageNotFound>
        <div v-else>
            <div class="container-fluid bg-color">
                <img class="top-image" :src="professionalContent.cover_image">
            </div>
            <div class="container-fluid padding">
                <div class="row">
                    <div class="col-md-8 professional-content">
                        <h3>About this Professional</h3>
                        <div class="description" v-html="professionalContent.description"></div>
                        <p v-if="professionalContent.address || professionalContent.country">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            Location: {{ professionalContent.address ? professionalContent.address : professionalContent.country.name }}
                        </p>
                        <div class="rate-cards" v-if="this.rateCardsLength > 0">
                            <p>Rate Cards:</p>
                            <ul class="list-unstyled" v-for="attachment in professionalContent.attachments" :key="attachment.id">
                                <li>
                                    <a :href="attachment.slug">
                                        <i class="fa fa-paperclip"></i>
                                        {{ attachment.title }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <ProfessionalProjects :projects="projects"></ProfessionalProjects>
                    </div>
                    <ProfessionalReviews :professionalContent="professionalContent" :reviews="reviews" :totalReviews="professionalContent.review_count" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProfessionalReviews from './ProfessionalReviews';
import ProfessionalProjects from './ProfessionalProjects';
import PageNotFound from '../Public/PageNotFound';
import {metaResolver} from "../../helpers";
import { PROFESSIONAL_BY_SLUG } from '../../graphql/graphql.js';

export default {
    name: "ProfessionalContent",
    components: {
        ProfessionalReviews,
        ProfessionalProjects,
        PageNotFound
    },
    metaInfo:metaResolver.bind('professionalContent'),
    data() {
        return {
            professionalContent: [],
            projects: [],
            reviews: [],
            rateCardsLength: 0,
            pageNotFound: false
        }
    },
    beforeRouteUpdate(to,from,next) {
        this.professional_id = to.params.id;
        next();
    },
    apollo: {
        professional: {
            query: PROFESSIONAL_BY_SLUG,
            variables() {
                return {
                    slug: this.$route.params.slug
                }
            },
            update(data) {
                this.professionalContent = data.professional_by_slug;
                this.projects = data.professional_by_slug.projects;
                this.reviews = data.professional_by_slug.reviews;
                this.rateCardsLength = this.professionalContent.attachments.length;
                return data.professional_by_slug;
            }
        }
    }
}
</script>


<style scoped>
.top-image
{
    width: 100%;
}

.padding
{
    padding: 3%;
}

h3
{
    font-weight: 500;
    font-family: 'Cormorant Garamond';
    font-size: 40px;
    line-height: 30px;
    color: #25130e;
    margin: 30px 0;
}

.professional-content
{
    text-align: left;
}

.description
{
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 22px;
    color: #25130e;
    margin: 20px 0;
    font-family: 'Open Sans';
}
p
{
    color: #25130E;
}

.list-unstyled
{
    padding-left: 0;
    list-style: none;
}

.fa-paperclip
{
    margin-right: 10px;
}
</style>
