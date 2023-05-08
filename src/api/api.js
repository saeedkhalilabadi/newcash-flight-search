import axios from './axios';
import { getCitys } from './url';

export async function searchCity(name) {
    try {
        return axios.get(getCitys, { params: { name } })
            .then(res => { return ({ status: true, data: res.data }) })
            .catch(err => { return ({ status: false, data: err }) })
    } catch (error) {
        return ({ status: false, data: error })
    }
}



