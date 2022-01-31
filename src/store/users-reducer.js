const SET_USERS_FEED = '/users/SET_USERS_FEED';
const SET_USERS_INFO = '/users/SET_USERS_INFO';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const SET_REQUEST_ERROR = '/users/SET_REQUEST_ERROR';

const initialState = {
    userFeed: null,
    userInfo: null,
    isFetching: false,
    requestError: null,
    pageSize: 6,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_FEED:
            return {
                ...state,
                userFeed: action.userFeed,
            };
        case SET_USERS_INFO:
            return {
                ...state,
                userInfo: action.userInfo,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case SET_REQUEST_ERROR:
            return {
                ...state,
                requestError: action.error,
            };
        default:
            return state;
    }
};

export const setUsersFeed = (userFeed) => ({ type: SET_USERS_FEED, userFeed });
export const setUsersInfo = (userInfo) => ({ type: SET_USERS_INFO, userInfo });
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});
export const setRequestError = (error) => ({ type: SET_REQUEST_ERROR, error });

export default usersReducer;
