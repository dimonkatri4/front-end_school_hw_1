import {UserInfoType} from "../domain/UserInfoType";
import {ErrorType} from "../domain/ErrorType";

const SET_USERS_INFO = '/users/SET_USERS_INFO';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const SET_REQUEST_ERROR = '/users/SET_REQUEST_ERROR';

const initialState = {
    userInfo: null as UserInfoType | null,
    isFetching: false,
    requestError: null as ErrorType | null,
    pageSize: 6,
};

export type InitialStateUserType = typeof initialState;

const usersReducer = (state = initialState, action: ActionTypeUsersReducer): InitialStateUserType => {
    switch (action.type) {
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

type setUsersInfoType = {
    type: typeof SET_USERS_INFO
    userInfo: UserInfoType
}
type toggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
type setRequestErrorType = {
    type: typeof SET_REQUEST_ERROR
    error: ErrorType
}

export type ActionTypeUsersReducer = setUsersInfoType | toggleIsFetchingType | setRequestErrorType;

export const setUsersInfo = (userInfo: UserInfoType): setUsersInfoType => ({ type: SET_USERS_INFO, userInfo })
export const toggleIsFetching = (isFetching:boolean): toggleIsFetchingType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});
export const setRequestError = (error:ErrorType): setRequestErrorType => ({ type: SET_REQUEST_ERROR, error });

export default usersReducer;
