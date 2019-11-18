import {get, patch} from "./Http";

export function getUser(){
    return get('/v1/me');
}

export function updateProfile(data){
    return patch('/v1/update_profile', data);
}
