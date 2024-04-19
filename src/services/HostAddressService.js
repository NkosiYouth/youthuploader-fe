import axios from '../utils/axios';

export default class HostAddressService{
    static getAll(params = {}){
        return axios.get('host-address', {
            params: params
        });
    }
    static create(body = {}){
        return axios.post('host-address', body);
    }
}