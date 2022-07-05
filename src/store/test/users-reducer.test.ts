import usersReducer, {
    InitialUsersStateType,
    setRequestError,
    setUsersInfo,
    toggleIsFetching,
} from '../usersSlice';
import {profileTestData} from "../../mocks/testData";

describe('User reducer', () => {
    let state: InitialUsersStateType;
    beforeEach(() => {
        state = {
            userInfo: null,
            isFetching: false,
            requestError: null,
            pageSize: 6,
        };
    });

    it('userInfo should be set in state and it must be object newUserInfo', () => {
        const newUserInfo = profileTestData;
        const action = setUsersInfo(newUserInfo);
        const newState = usersReducer(state, action);
        expect(typeof newState.userInfo).toBe('object');
        expect(newState.userInfo).not.toBeNull();
        expect(newState.userInfo).toBe(newUserInfo);
    });

    it('isFetching should be set value "true"', () => {
        const action = toggleIsFetching(true);
        const newState = usersReducer(state, action);
        expect(newState.isFetching).toBe(true);
    });

    it('the error should be set in state', () => {
        const error = 'Some error';
        const action = setRequestError(error);
        const newState = usersReducer(state, action);
        expect(newState.requestError).toBe(error);
    });
});
