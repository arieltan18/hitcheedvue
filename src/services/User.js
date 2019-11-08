import {get} from "./Http";

export function getUser(){
    return get('/v1/me');
}
