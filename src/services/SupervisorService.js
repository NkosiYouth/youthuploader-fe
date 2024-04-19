import axios from '../utils/axios';

export default class SupervisorService{
    static getAll(params = {}){
        return axios.get('supervisors', {
            params: params
        });
    }
    static create(body = {}){
        return axios.post('supervisors', body);
    }
}