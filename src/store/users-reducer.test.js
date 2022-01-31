import usersReducer, {
    setRequestError,
    setUsersFeed,
    setUsersInfo,
    toggleIsFetching,
} from './users-reducer';

describe('User reducer', () => {
    let state;
    beforeEach(() => {
        state = {
            userFeed: null,
            userInfo: null,
            isFetching: false,
            requestError: null,
        };
    });
    it('userFeed should be set in state and it must be array of length 1', () => {
        const newUserFeed = [
            {
                id: 125,
                covers: {},
                videoUrl: 'url',
            },
        ];
        const action = setUsersFeed(newUserFeed);
        const newState = usersReducer(state, action);
        expect(Array.isArray(newState.userFeed)).toBe(true);
        expect(newState.userFeed.length).toBe(1);
    });

    it('userInfo should be set in state and it must be array of length 1', () => {
        const newUserInfo = [
            {
                id: 3125,
                user: {},
                stats: {},
            },
        ];
        const action = setUsersInfo(newUserInfo);
        const newState = usersReducer(state, action);
        expect(Array.isArray(newState.userInfo)).toBe(true);
        expect(newState.userInfo.length).toBe(1);
        expect(newState.userInfo[0].id).toBe(3125);
    });

    it('isFetching should be set value "true"', () => {
        const action = toggleIsFetching(true);
        const newState = usersReducer(state, action);
        expect(newState.isFetching).toBe(true);
    });

    it('the error should be set in state', () => {
        const error = new Error('Some error');
        const action = setRequestError(error);
        const newState = usersReducer(state, action);
        expect(newState.requestError).toBe(error);
    });
});

