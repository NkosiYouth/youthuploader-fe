import axios from '../utils/axios';

export default class HostService{
    static getAll(params = {}){
        return axios.get('hosts', {
            params: params
        });
    }
    static create(body = {}){
        return axios.post('hosts', body);
    }
}