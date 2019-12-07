const state = {
    alertMessages:{},
};

const mutations = {
    pushAlertMessage(state, message){
        state.alertMessages.push(message);
    }
};

const actions = {
    showAlertMessage(context, toaster, message, type='primary', timeout = 5000){
        toaster.toast(message, {
            autoHideDelay: timeout,
            appendToast: true,
        });

        context.commit('pushAlertMessage',{
            id: Math.random(),
            message,
            type,
            timeout,
        });
    }
};

const getters = {
    messages(state){
        return state.messages;
    }
};

const appStore = {
    state,
    mutations,
    actions,
    getters,
};


export default appStore;
