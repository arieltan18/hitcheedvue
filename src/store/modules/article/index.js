import axios from 'axios';

const state = {
    articleItems: []
}

const mutations = {
    UPDATE_ARTICLE_ITEMS (state, payload) {
        state.articleItems = payload;
    }

}

const baseURL = 'https://p1hs79r9-dev.preview.zestyio.com';
const url = baseURL + '/-/instant/6-e8ebae8bec-cztrlk.json';

const actions = {
    getFullArticleItems ({ commit }) {
        axios.get(url).then((response) => {
            commit('UPDATE_ARTICLE_ITEMS', response.data);
            // eslint-disable-next-line no-console
            console.log(response.data);

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
