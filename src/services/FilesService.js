import axios from '../utils/axios';

export default class FileService {
    static postFiles({files, data = {}}) {
        const formData = new FormData();

        // Append additional data
        for (const key in data) {
            formData.append(key, data[key]);
        }

        // Append files
        for (let i = 0; i < files.length; i++) {
            formData.append('file', files[i]);
        }

        return axios.post(`upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
    }
}
