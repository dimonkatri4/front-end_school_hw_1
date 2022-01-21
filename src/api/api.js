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
export const userAPI = {
    getUserFeed(id = 'dave.xp') {
        return instance.get(`user/feed/${id}`).then((response) => response.data);
    },
    getUserInfo(id = 'dave.xp') {
        return instance.get(`user/info/${id}`).then((response) => response.data);
    },
};

export const trendingAPI = {
    getTrendingFeed() {
        return instance.get('trending/feed').then((response) => response.data);
    },
};
