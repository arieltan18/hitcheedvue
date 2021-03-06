import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import ArticleContent from '../components/Articles/ArticleContent'
import Articles from '../components/Articles/Articles'
import ProfessionalContent from '../components/Professionals/ProfessionalContent'
import ProfessionalHome from '../components/Professionals/ProfessionalHome'
import ProfessionalCategory from '../components/Professionals/ProfessionalCategory'
import ResetPassword from '../components/ResetPassword'
// import ProjectsByCategory from '../components/Projects/ProjectsByCategory'
// import ProjectsByCategoryAll from '../components/Projects/ProjectsByCategoryAll'
// import ProjectsByAllCategories from '../components/Projects/ProjectsByAllCategories'
import ProfessionalsByCategory from '../components/Professionals/ProfessionalsByCategory'
import ProfessionalsByCategoryAll from '../components/Professionals/ProfessionalsByCategoryAll'
import ProfessionalsByAllCategories from '../components/Professionals/ProfessionalsByAllCategories'
import ProfessionalsByOtherCountries from '../components/Professionals/ProfessionalsByOtherCountries'
import ProjectContent from '../components/Projects/ProjectContent'
import ProfessionalsByTag from '../components/Professionals/ProfessionalsByTag'
import Messages from '../components/Messages'
import Profile from '../components/Profile'
import Search from '../components/Search'
import EventsPromotions from '../components/Events&Promotions/EventsPromotions'
import Promotions from '../components/Events&Promotions/Promotions'
import Events from '../components/Events&Promotions/Events'
import About from "../components/Public/About"
import PrivacyPolicy from "../components/Public/PrivacyPolicy"
import Faq from "../components/Public/Faq"
import Vendor from "../components/Public/Vendor"

Vue.use(VueRouter);

export default new VueRouter({
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    mode: 'history',
    base: '',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            name: 'singleArticlePage',
            path: '/articles/:slug',
            component: ArticleContent
        },
        {
            name: 'articlesTag',
            path: '/articles',
            component: Articles
        },
        {
            name: 'articlesHome',
            path: '/all/articles',
            component: Articles
        },
        {
            name: 'professional',
            path: '/professionals/:slug',
            component: ProfessionalContent
        },
        {
            name: 'project',
            path: '/projects/:slug',
            component: ProjectContent
        },
        {
            name: 'professionalHome',
            path: '/all/professionals',
            component: ProfessionalHome
        },
        {
            name: 'professionalCategory',
            path: '/browseCategory/professionals/:id',
            component: ProfessionalCategory,
        },
        {
            name: 'messages',
            path: '/messages/:chatId?',
            component: Messages,
        },
        {
            name: 'professionalsByCategory',
            path: '/category/:category',
            component: ProfessionalsByCategory
        },
        {
            name: 'professionalsByCategoryAll',
            path: '/category/:category/all',
            component: ProfessionalsByCategoryAll
        },
        {
            name: 'professionalsByAllCategories',
            path: '/all/category',
            component: ProfessionalsByAllCategories
        },
        {
            name: 'professionalsByOtherCountries',
            path: '/others-countries/category',
            component: ProfessionalsByOtherCountries
        },
        {
            name: 'professionalsByTag',
            path: '/category/:category/:tag_name',
            component: ProfessionalsByTag
        },
        // {
        //     name: 'projectsByCategory',
        //     path: '/category/:category',
        //     component: ProjectsByCategory
        // },
        // {
        //     name: 'projectsByCategoryAll',
        //     path: '/category/:category/all',
        //     component: ProjectsByCategoryAll
        // },
        // {
        //     name: 'projectsByAllCategories',
        //     path: '/all/category',
        //     component: ProjectsByAllCategories
        // },
        {
            name: 'promotions',
            path: '/promotions/:slug',
            component: Promotions,
        },
        {
            name: 'events',
            path: '/events/:slug',
            component: Events,
        },
        {

            name: 'Profile',
            path: '/profile',
            component: Profile
        },
        {

            name: 'search',
            path: '/search/:type?',
            component: Search
        },
        {
            path: '/auth/:provider/callback',
            component: {
                template: '<div class="auth-component"></div>'
            }
        },
        {

            name: 'ResetPassword',
            path: '/reset_password/:token',
            component: ResetPassword
        },
        {
            name: 'events&promotions',
            path: '/events&promotions',
            component: EventsPromotions
        },
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            name: 'privacy',
            path: '/privacy',
            component: PrivacyPolicy
        },
        {
            name: 'faq',
            path: '/faq',
            component: Faq
        },
        {
            name: 'vendor',
            path: '/vendor',
            component: Vendor
        },

    ]
})
