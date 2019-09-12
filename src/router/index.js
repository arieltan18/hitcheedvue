import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import ArticleContent from '../components/Articles/ArticleContent'
import ProfessionalContent from '../components/Professionals/ProfessionalContent'

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
            name: 'professional',
            path: '/professionals/:slug',
            component: ProfessionalContent
        }
    ]
})