import axios from "axios";

const baseUrl = process.env.VUE_APP_HITCHEED_API;

const defaultHeaders = {
    'Content-Type': 'application/json',
    'cache-control': 'no-cache'
};

const mapData = r=>r.data;
const handleError = e=>{throw(e && e.response && e.response.data)};

export const post = (path, data, options={})=>{
    const headers = {
        ...defaultHeaders
    };
    const token = localStorage.getItem('access_token');
    if(token){
        headers.authorization = `Bearer ${token}`;
    }

    const url = `${baseUrl}${path}`;

    return axios.post(url, data, {
        headers,
        ...options
    })
        .then(mapData)
        .catch(handleError);
};

export const put = (path, data, options={})=>{
    const headers = {
        ...defaultHeaders
    };
    const token = localStorage.getItem('access_token');
    if(token){
        headers.authorization = `Bearer ${token}`;
    }

    const url = `${baseUrl}${path}`;

    return axios.put(url, data, {
        headers,
        ...options
    })
        .then(mapData)
        .catch(handleError);
};

export const patch = (path, data, options={})=>{
    const headers = {
        ...defaultHeaders
    };
    const token = localStorage.getItem('access_token');
    if(token){
        headers.authorization = `Bearer ${token}`;
    }

    const url = `${baseUrl}${path}`;

    return axios.patch(url, data, {
        headers,
        ...options
    }).then(mapData)
        .catch(handleError);
};

export const get = (path, options={})=>{
    const headers = {
        ...defaultHeaders
    };
    const token = localStorage.getItem('access_token');
    if(token){
        headers.authorization = `Bearer ${token}`;
    }

    const url = `${baseUrl}${path}`;

    return axios.get(url, {
        headers,
        ...options
    }).then(mapData)
        .catch(handleError);
};

export const Delete = (path, options={})=>{
    const headers = {
        ...defaultHeaders
    };
    const token = localStorage.getItem('access_token');
    if(token){
        headers.authorization = `Bearer ${token}`;
    }

    const url = `${baseUrl}${path}`;

    return axios.delete(url, {
        headers,
        ...options
    }).then(mapData)
        .catch(handleError);
};

export const Http = {
    get, post, put, delete: Delete
};

export  default Http;
