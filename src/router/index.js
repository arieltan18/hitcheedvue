import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import ArticleContent from '../components/Articles/ArticleContent'
import Articles from '../components/Articles/Articles'
import ProfessionalContent from '../components/Professionals/ProfessionalContent'
import ProfessionalHome from '../components/Professionals/ProfessionalHome'
import ProfessionalCategory from '../components/Professionals/ProfessionalCategory'
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
            path: '/articles/:slug', 
            component: ArticleContent
        },
        { 
            name: 'articlesTag',
            path: '/articles', 
            component: Articles
        },
        {
            name: 'professional',
            path: '/professionals/:slug/:id',
            component: ProfessionalContent
        },
        {
            name: 'project',
            path: '/projects/:slug/:id',
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
    ]
})