const state = {
    showHeader:true,
    showFooter:true,
};

const mutations = {
    setHeaderVisibility(state, visible){
        state.showHeader = visible;
    },
    setFooterVisibility(state, visible){
        state.showFooter = visible;
    },

};

const actions = {
    showHeader(context){
        context.commit('setHeaderVisibility', true);
    },
    hideHeader(context){
        context.commit('setHeaderVisibility', false);
    },
    showFooter(context){
        context.commit('setFooterVisibility', true);
    },
    hideFooter(context){
        context.commit('setFooterVisibility', false);
    }
};

const getters = {
    showHeader(state){
        return state.showHeader;
    },
    showFooter(state){
        return state.showFooter;
    }
};

const appStore = {
    state,
    mutations,
    actions,
    getters,
};


export default appStore;
