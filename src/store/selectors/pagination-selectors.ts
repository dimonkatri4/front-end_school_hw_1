import {createSelector} from '@reduxjs/toolkit';
import {getTrendingFeedSelector} from "./trending-selectors";
import {getPageSizeSelector} from "./users-selectors";

export const getPortionPage = createSelector(
    getTrendingFeedSelector,
    getPageSizeSelector,
    (trendingFeed, pageSize) => {
        const subarray = [];
        if (trendingFeed !== null)
            for (let i = 0; i < Math.ceil(trendingFeed.length / pageSize); i += 1) {
                subarray[i] = trendingFeed.slice(i * pageSize, i * pageSize + pageSize);
            }
        return subarray;
    })

export const getPageCount = createSelector(
    getTrendingFeedSelector,
    getPageSizeSelector,
    (trendingFeed, pageSize) => {
        if (trendingFeed !== null)
           return Math.ceil(trendingFeed.length / pageSize)
    }
)

