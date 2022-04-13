import apiRequest from './api';
import {PostType} from "../domain/PostType";

type TrendingFeedType = PostType[] | string;

const getTrendingFeed = async () => {
    const urlParameter = 'trending/feed';
    const trendingFeed = await apiRequest<TrendingFeedType>(urlParameter);
    return trendingFeed;
};

export default getTrendingFeed;
