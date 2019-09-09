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
const url = baseURL + '&token=QNx6VlHAVqJWs82bNe8Ymgtt&cv=1568013388&starts_with=blog';


const actions = {
    getFullArticleItems ({ commit }) {
        axios.get(url).then((response) => {
            commit('UPDATE_ARTICLE_ITEMS', response.data);
            // eslint-disable-next-line no-console
            //console.log(response.data.stories);
        });
    },
    // getCategoryName ({ uuid }) {
    //     const category_params = baseURL + '&token=QNx6VlHAVqJWs82bNe8Ymgtt&cv=1568013388&by_uuids=' + uuid;

    //     axios.get(url).then((response) => {
    //         return response.data.stories[0].name;
    //     });
    // }
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
