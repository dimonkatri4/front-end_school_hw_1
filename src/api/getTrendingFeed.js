import apiRequest from "./api";

const getTrendingFeed = () => {
    const urlParameter = 'trending/feed';
    return apiRequest(urlParameter)
}

export default getTrendingFeed;



