import axios from 'axios';
import qs from 'qs';

const CLIENT_KEY = '256f36b78715e6e';
const BASE_URL = 'https://api.imgur.com';

export default {

    login() {

        const querystring = {
            client_id: CLIENT_KEY,
            response_type: 'token'
        }

        const url = `${BASE_URL}/oauth2/authorize?${qs.stringify(querystring)}`;

        window.location = url;
    },

    fetchImages: (token) => {

        return axios.get(`${BASE_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

    },

    uploadImages: (images, token) => {

        const promises = Array.from(images).map(image => {
            const formData = new FormData();
            formData.append('image', image);

            return axios.post(`${BASE_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });

        return Promise.all(promises);

    }
}