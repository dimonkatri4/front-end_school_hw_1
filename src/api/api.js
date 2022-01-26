import axios from 'axios';

const baseURL = 'https://tiktok33.p.rapidapi.com/';
const headersConfig = {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66',
};

const instance = axios.create({
    baseURL,
    withCredentials: true,
    headers: headersConfig,
});

const apiRequest = (urlParameter, options = '') => {
    const fullUrl = urlParameter + options;
    return instance.get(fullUrl).then((response) => response.data);
};

export default apiRequest;
