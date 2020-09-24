import axios from 'axios';

axios.defaults.withCredentials = true;

function _handleError(err) {
    console.log('Err:', err);
    throw err;
}

function get(url) {
    return axios.get(url)
        .then(res => res.data)
        .catch(_handleError)
}

function remove(url) {
    return axios.delete(url)
        .catch(_handleError)
}

function post(url, data) {
    return axios.post(url, data)
        .then(res => res.data)
        .catch(_handleError)
}

function put(url, data) {
    return axios.put(url, data)
        .then(res => res.data)
        .catch(_handleError)
}


export const HttpService = {
    get,
    delete: remove,
    post,
    put
} 