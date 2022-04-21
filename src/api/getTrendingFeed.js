import apiRequest from './api';

const getTrendingFeed = async () => {
    const urlParameter = 'trending/feed';
    const trendingFeed = await apiRequest(urlParameter);
    return trendingFeed;
};

export default getTrendingFeed;
