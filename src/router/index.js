import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import ArticleContent from '../components/Articles/ArticleContent'
import Articles from '../components/Articles/Articles'
import ProfessionalContent from '../components/Professionals/ProfessionalContent'
import ProfessionalHome from '../components/Professionals/ProfessionalHome'
import ProfessionalCategory from '../components/Professionals/ProfessionalCategory'
import ProjectsByCategory from '../components/Projects/ProjectsByCategory'
import ProjectsByCategoryAll from '../components/Projects/ProjectsByCategoryAll'
import ProfessionalsByCategoryAll from '../components/Professionals/ProfessionalsByCategoryAll'
import ProjectsByAllCategories from '../components/Projects/ProjectsByAllCategories'
import ProjectContent from '../components/Projects/ProjectContent'
import Messages from '../components/Messages'
import Profile from '../components/Profile'

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
            path: '/messages',
            component: Messages,
        },
        {
            name: 'projectsByCategory',
            path: '/category/:category',
            component: ProjectsByCategory
        },
        {
            name: 'projectsByCategoryAll',
            path: '/category/:category/all',
            component: ProjectsByCategoryAll
        },
        {
            name: 'projectsByAllCategories',
            path: '/all/category',
            component: ProjectsByAllCategories
        },
        {
            name: 'professionalsByCategoryAll',
            path: '/category/:category/all',
            component: ProfessionalsByCategoryAll
        },
        {

            name: 'profile',
            path: '/Profile',
            component: Profile
        },
        {
            path: '/auth/:provider/callback',
            component: {
                template: '<div class="auth-component"></div>'
            }
        }
    ]
})
