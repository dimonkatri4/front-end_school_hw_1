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

const trendingReducer = (state = initialState, action: ActionTypeTrendingReducer): InitialStateType  => {
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

type SetTrendingFeedType = {
    type: typeof SET_TRENDING_FEED
    trendingFeed: Array<PostType>
}
type SetErrorType = {
    type: typeof SET_ERROR
    error: ErrorType
}

export type ActionTypeTrendingReducer = SetTrendingFeedType | SetErrorType;

export const setTrendingFeed = (trendingFeed: Array<PostType>): SetTrendingFeedType => ({
    type: SET_TRENDING_FEED,
    trendingFeed,
});
export const setError = (error: ErrorType): SetErrorType => ({ type: SET_ERROR, error });

export default trendingReducer;
