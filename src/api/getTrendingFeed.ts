import apiRequest from './api';
import {PostType} from "../domain/PostType";

const getTrendingFeed = async (): Promise<PostType[] | string> => {
    const urlParameter = 'trending/feed';
    const trendingFeed = await apiRequest(urlParameter);
    return trendingFeed;
};

export default getTrendingFeed;
