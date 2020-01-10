<template>
    <div class="mb-5" >
        <div class="mb-2">
            <div class="col-sm-12 text-center">
                <h1>Hotels</h1>
            </div>
        </div>
        <ProfessionalSection :category_id="14" :first="8" :page="1"></ProfessionalSection>
        <div class="articles-section">
            <PopularSearchesCategory categoryName="hotels" :categoryId="14"></PopularSearchesCategory>
            <RelatedArticlesByCategory categoryName='Hotels'></RelatedArticlesByCategory>
        </div>
        <div class="container mt-5">
            <router-link class="see-more-link" to="/category/hotels">See More Hotels</router-link>
        </div>
        <div class="mt-5 mb-2">
            <div class="col-sm-12 text-center">
                <h1>Venues</h1>
            </div>
        </div>
        <ProfessionalSection :category_id="5" :first="8" :page="1"></ProfessionalSection>
        <div class="articles-section">
            <PopularSearchesCategory categoryName="venues" :categoryId="5"></PopularSearchesCategory>
            <RelatedArticlesByCategory categoryName='Venues'></RelatedArticlesByCategory>
        </div>
        <div class="container mt-5">
            <router-link class="see-more-link" to="/category/venues">See More Venues</router-link>
        </div>

        <div v-if="this.load2 === true">
            <div class="mt-5 mb-2">
                <div class="col-sm-12 text-center">
                    <h1>Bridal Studios</h1>
                </div>
            </div>
            <ProfessionalSection :category_id="1" :first="8" :page="1"></ProfessionalSection>
            <div class="articles-section">
                <PopularSearchesCategory categoryName="bridal-studios" :categoryId="1"></PopularSearchesCategory>
                <RelatedArticlesByCategory categoryName='Bridal Studios'></RelatedArticlesByCategory>
            </div>
            <div class="container mt-5">
                <router-link class="see-more-link" to="/category/bridal-studios">See More Bridal Studios</router-link>
            </div>
            <div class="mt-5 mb-2">
                <div class="col-sm-12 text-center">
                    <h1>Photographers</h1>
                </div>
            </div>
            <ProfessionalSection :category_id="2" :first="8" :page="1"></ProfessionalSection>
            <div class="articles-section">
                <PopularSearchesCategory categoryName="photographers" :categoryId="5"></PopularSearchesCategory>
                <RelatedArticlesByCategory categoryName='Photographers'></RelatedArticlesByCategory>
            </div>
            <div class="container mt-5">
                <router-link class="see-more-link" to="/category/photographers">See More Photographers</router-link>
            </div>
        </div>

        <div v-if="this.load3 === true">
            <div class="mt-5 mb-2">
                <div class="col-sm-12 text-center">
                    <h1>Videographers</h1>
                </div>
            </div>
            <ProfessionalSection :category_id="3" :first="8" :page="1"></ProfessionalSection>
            <div class="articles-section">
                <PopularSearchesCategory categoryName="videographers" :categoryId="3"></PopularSearchesCategory>
                <RelatedArticlesByCategory categoryName='videographers'></RelatedArticlesByCategory>
            </div>
            <div class="container mt-5">
                <router-link class="see-more-link" to="/category/videographers">See More Videographers</router-link>
            </div>
            <div class="mt-5 mb-2">
                <div class="col-sm-12 text-center">
                    <h1>Florists</h1>
                </div>
            </div>
            <ProfessionalSection :category_id="6" :first="8" :page="1"></ProfessionalSection>
            <div class="articles-section">
                <PopularSearchesCategory categoryName="florists" :categoryId="5"></PopularSearchesCategory>
                <RelatedArticlesByCategory categoryName='Florists'></RelatedArticlesByCategory>
            </div>
            <div class="container mt-5">
                <router-link class="see-more-link" to="/category/florists">See More Florists</router-link>
            </div>
        </div>

        <div v-if="this.load4 === true">
            <div class="mt-5 mb-2">
                <div class="col-sm-12 text-center">
                    <h1>Invitation & Wedding Favors</h1>
                </div>
            </div>
            <ProfessionalSection :category_id="15" :first="8" :page="1"></ProfessionalSection>
            <div class="articles-section">
                <PopularSearchesCategory categoryName="invitation-and-wedding-favors" :categoryId="15"></PopularSearchesCategory>
                <RelatedArticlesByCategory categoryName='Invitation & Wedding Favors'></RelatedArticlesByCategory>
            </div>
            <div class="container mt-5">
                <router-link class="see-more-link" to="/category/invitation-and-wedding-favors">See More Invitation & Wedding Favors</router-link>
            </div>
            <div class="mt-5 mb-2">
                <div class="col-sm-12 text-center">
                    <h1>Event Styling And Rental</h1>
                </div>
            </div>
            <ProfessionalSection :category_id="8" :first="8" :page="1"></ProfessionalSection>
            <div class="articles-section">
                <PopularSearchesCategory categoryName="event-styling-and-rental" :categoryId="5"></PopularSearchesCategory>
                <RelatedArticlesByCategory categoryName='Event Styling And Rental'></RelatedArticlesByCategory>
            </div>
            <div class="container mt-5">
                <router-link class="see-more-link" to="/category/event-styling-and-rental">See More Event Styling And Rental</router-link>
            </div>
        </div>

        <div v-if="this.load5 === true">
            <div class="mt-5 mb-2">
                <div class="col-sm-12 text-center">
                    <h1>Hair & Makeup</h1>
                </div>
            </div>
            <ProfessionalSection :category_id="9" :first="8" :page="1"></ProfessionalSection>
            <div class="articles-section">
                <PopularSearchesCategory categoryName="hair-and-makeup" :categoryId="9"></PopularSearchesCategory>
                <RelatedArticlesByCategory categoryName='Hair And Makeup'></RelatedArticlesByCategory>
            </div>
            <div class="container mt-5">
                <router-link class="see-more-link" to="/category/hair-and-makeup">See More Hair & Makeup</router-link>
            </div>
            <div class="mt-5 mb-2">
                <div class="col-sm-12 text-center">
                    <h1>Live Band & Emcee</h1>
                </div>
            </div>
            <ProfessionalSection :category_id="10" :first="8" :page="1"></ProfessionalSection>
            <div class="articles-section">
                <PopularSearchesCategory categoryName="live-band-and-emcee" :categoryId="5"></PopularSearchesCategory>
                <RelatedArticlesByCategory categoryName='Live Band And Emcee'></RelatedArticlesByCategory>
            </div>
            <div class="container mt-5">
                <router-link class="see-more-link" to="/category/live-band-and-emcee">See More Live Band & Emcee</router-link>
            </div>
        </div>

        <div v-if="this.load6 === true">
            <div class="mt-5 mb-2">
                <div class="col-sm-12 text-center">
                    <h1>Wedding Jewellery</h1>
                </div>
            </div>
            <ProfessionalSection :category_id="11" :first="8" :page="1"></ProfessionalSection>
            <div class="articles-section">
                <PopularSearchesCategory categoryName="wedding-jewellery" :categoryId="9"></PopularSearchesCategory>
                <RelatedArticlesByCategory categoryName='Wedding Jewellery'></RelatedArticlesByCategory>
            </div>
            <div class="container mt-5">
                <router-link class="see-more-link" to="/category/wedding-jewellery">See More Wedding Jewellery</router-link>
            </div>
            <div class="mt-5 mb-2">
                <div class="col-sm-12 text-center">
                    <h1>Catering</h1>
                </div>
            </div>
            <ProfessionalSection :category_id="12" :first="8" :page="1"></ProfessionalSection>
            <div class="articles-section">
                <PopularSearchesCategory categoryName="catering" :categoryId="5"></PopularSearchesCategory>
                <RelatedArticlesByCategory categoryName='catering'></RelatedArticlesByCategory>
            </div>
            <div class="container mt-5">
                <router-link class="see-more-link" to="/category/catering">See More Catering</router-link>
            </div>
        </div>

        <div v-if="this.load6 === true">
            <div class="mt-5 mb-2">
                <div class="col-sm-12 text-center">
                    <h1>Photo Booth</h1>
                </div>
            </div>
            <ProfessionalSection :category_id="13" :first="8" :page="1"></ProfessionalSection>
            <div class="articles-section">
                <PopularSearchesCategory categoryName="photo-booth" :categoryId="13"></PopularSearchesCategory>
                <RelatedArticlesByCategory categoryName='Photo Booth'></RelatedArticlesByCategory>
            </div>
            <div class="container mt-5">
                <router-link class="see-more-link" to="/category/photo-booth">See More Photo Booth</router-link>
            </div>
            <div class="mt-5 mb-2">
                <div class="col-sm-12 text-center">
                    <h1>Other Countries</h1>
                </div>
            </div>
            <ProfessionalSectionOthers :first="8" :page="1"></ProfessionalSectionOthers>
            <div class="container mt-5">
                <router-link class="see-more-link" to="/category/other-countries">See More Other Countries</router-link>
            </div>
        </div>

        <div v-if="this.isloading === false"><i class="fa fa-spinner fa-spin"></i></div>
    </div>
</template>

<script>
import ProfessionalSection from './ProfessionalSection.vue';
import ProfessionalSectionOthers from './ProfessionalSectionOthers.vue';
import RelatedArticlesByCategory from "../Articles/RelatedArticlesByCategory.vue";
import PopularSearchesCategory from "../PopularSearches/PopularSearchesCategory.vue";

export default {
    name: 'ProfessionalsByAllCategories',
    components: {
        ProfessionalSection,
        ProfessionalSectionOthers,
        RelatedArticlesByCategory,
        PopularSearchesCategory
    },
    data()
    {
        return {
            isloading: false,
            load2: false,
            load3: false,
            load4: false,
            load5: false,
            load6: false,
            load7: false,
        }
    },
    methods:{
        scroll () {
        window.onscroll = () => {
            let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
                this.isloading = true;
                if (bottomOfWindow) 
                {
                    if(this.load2===false)
                    {
                        this.load2 = true;
                        this.isloading = false;
                    }
                    else if(this.load3===false)
                    {
                        this.load3 = true;
                        this.isloading = false;
                    }
                    else if(this.load4===false)
                    {
                        this.load4 = true;
                        this.isloading = false;
                    }
                    else if(this.load5===false)
                    {
                        this.load5 = true;
                        this.isloading = false;
                    }
                    else if(this.load6===false)
                    {
                        this.load6 = true;
                        this.isloading = false;
                    }
                    else if(this.load7===false)
                    {
                        this.load7 = true;
                        this.isloading = false;
                    }
                }
            }
        }
    },
    mounted(){
        this.scroll();
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