import axios from 'axios';

const state = {
    articleItems: [],
}

const mutations = {
    UPDATE_ARTICLE_ITEMS (state, payload) {
        state.articleItems = payload;
    }
}

const baseURL = 'https://api.storyblok.com/v1/cdn/stories?version=published';
const url = baseURL + '&token=QNx6VlHAVqJWs82bNe8Ymgtt&starts_with=blog';


const actions = {
    getFullArticleItems ({ commit }) {

        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'cache-control':'no-cache'
        }
        axios.get(url).then((response) => {
            commit('UPDATE_ARTICLE_ITEMS', response.data);
            //console.log(response.data.stories);
        });
    },
}

const getters = {
    articleItems: state => state.articleItems
}

const articleModule = {
    state,
    mutations,
    actions,
    getters
}

export default articleModule;
