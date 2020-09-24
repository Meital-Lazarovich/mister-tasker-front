import { HttpService } from './HttpService';
const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? '/api/task'
    : '//127.0.0.1:3002/api/task';

function query() {
    return HttpService.get(BASE_URL)
}

function update(edited) {
    return HttpService.put(`${BASE_URL}/${edited._id}`, edited)
}

function start(id) {
    return HttpService.put(`${BASE_URL}/${id}/start`)
}

function getById(id) {
    return HttpService.get(`${BASE_URL}/${id}`)
}

function remove(id) {
    return HttpService.delete(`${BASE_URL}/${id}`)
}

function add(added) {
    return HttpService.post(`${BASE_URL}`, added)
}

export const TaskService = {
    query,
    remove,
    add,
    update,
    start,
    getById
};

