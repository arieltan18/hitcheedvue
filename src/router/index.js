import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import ArticleContent from '../components/Articles/ArticleContent'
import Articles from '../components/Articles/Articles'
import ProfessionalContent from '../components/Professionals/ProfessionalContent'
import ProfessionalHome from '../components/Professionals/ProfessionalHome'
import ProfessionalCategory from '../components/Professionals/ProfessionalCategory'
import ProfessionalsByCategory from '../components/Professionals/ProfessionalsByCategory'
import ProfessionalsByCategoryAll from '../components/Professionals/ProfessionalsByCategoryAll'
import ProfessionalsByAllCategories from '../components/Professionals/ProfessionalsByAllCategories'
import ProjectContent from '../components/Projects/ProjectContent'

Vue.use(VueRouter);

export default new VueRouter({
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
        }
    ]
})