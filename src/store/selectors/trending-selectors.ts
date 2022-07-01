import {RootState} from "../../rtk-store/rtk-store";

export const getTrendingFeedSelector = (state: RootState) => state.trending.trendingFeed
export const getTrendingErrorsSelector = (state: RootState) => state.trending.errors
