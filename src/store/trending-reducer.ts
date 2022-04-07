import {PostType} from "../domain/PostType";
import {ErrorType} from "../domain/ErrorType";

const SET_TRENDING_FEED = '/trending/SET_TRENDING_FEED';
const SET_ERROR = '/trending/SET_ERROR';

type InitialStateType = {
    trendingFeed: Array<PostType> | null
    errors: ErrorType
}

const initialState: InitialStateType = {
    trendingFeed: null,
    errors: null

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
                errors: action.error,
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
    error: ErrorType
}

export const setTrendingFeed = (trendingFeed: Array<PostType>): setTrendingFeedType => ({
    type: SET_TRENDING_FEED,
    trendingFeed,
});
export const setError = (error: ErrorType): setErrorType => ({ type: SET_ERROR, error });

export default trendingReducer;
