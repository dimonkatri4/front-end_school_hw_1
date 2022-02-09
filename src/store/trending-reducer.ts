import {PostType} from "../domain/PostType";

const SET_TRENDING_FEED = '/trending/SET_TRENDING_FEED';
const SET_ERROR = '/trending/SET_ERROR';

type InitialStateType = {
    trendingFeed: Array<PostType> | null
    error: Error | null
}

const initialState: InitialStateType = {
    trendingFeed: null,
    error: null
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const trendingReducer = (state = initialState, action: any): InitialStateType  => {
    switch (action.type) {
        case SET_TRENDING_FEED:
            return {
                ...state,
                trendingFeed: action.trendingFeed,
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};

type setTrendingFeedType = {
    type: typeof SET_TRENDING_FEED
    trendingFeed: Array<PostType>
}
type setErrorType = {
    type: typeof SET_ERROR
    error: Error
}

export const setTrendingFeed = (trendingFeed: Array<PostType>): setTrendingFeedType => ({
    type: SET_TRENDING_FEED,
    trendingFeed,
});
export const setError = (error: Error): setErrorType => ({ type: SET_ERROR, error });

export default trendingReducer;
