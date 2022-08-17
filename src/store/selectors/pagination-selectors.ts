import {createSelector} from '@reduxjs/toolkit';
import {getTrendingFeedSelector} from "./trending-selectors";
import {getPageSizeSelector} from "./users-selectors";

export const getPageCount = createSelector(
    getTrendingFeedSelector,
    getPageSizeSelector,
    (trendingFeed, pageSize) => {
        if (trendingFeed !== null)
            return Math.ceil(trendingFeed.length / pageSize)
    }
)

export const getPortionPage = createSelector(
    getTrendingFeedSelector,
    getPageSizeSelector,
    getPageCount,
    (trendingFeed, pageSize, pageCount) => {
        const subarray = [];
        if (trendingFeed !== null && pageCount)
            for (let i = 0; i < pageCount; i += 1) {
                subarray[i] = trendingFeed.slice(i * pageSize, i * pageSize + pageSize);
            }
        return subarray;
    })

