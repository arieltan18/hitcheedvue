import {get, post, patch} from "./Http";

export function getUser(){
    return get('/v1/me');
}

export function login(data){
    return post('/v1/login', data);
}

export function register(data){
    return post('/v1/register', data);
}

export function requestPasswordReset(data){
    return post('/create', data);
}

export function resetPassword(data){
    return post('/reset', data);
}

export function updateProfile(data){
    return patch('/v1/update_profile', data);
}

export function facebookLogin(data){
    return post('/v1/login/facebook', data);
}

const User = {
    login,
    register,
    getUser,
    requestPasswordReset,
    resetPassword,
    updateProfile,
    facebookLogin,
};

export default User;
