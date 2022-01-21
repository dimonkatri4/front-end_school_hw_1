import usersReducer, {
    requestUsersInfo,
    setRequestError,
    setUsersFeed,
    setUsersInfo,
    toggleIsFetching,
} from './users-reducer';

const userAPI = require('../api/api').userAPI;
jest.mock('../api/api', () => ({
    userAPI: {
        getUserInfo: jest.fn(),
    },
}));

describe('User reducer', () => {
    describe('Thunk user-reducer', () => {
        it('success requestUsersInfo thunk', async () => {
            userAPI.getUserInfo.mockResolvedValue({ data: {} });
            const dispatchMock = jest.fn();
            await requestUsersInfo(1)(dispatchMock);
            expect(dispatchMock).toBeCalledTimes(3);
            expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleIsFetching(true));
            expect(dispatchMock).toHaveBeenNthCalledWith(2, setUsersInfo({ data: {} }));
            expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleIsFetching(false));
        });
        it('query returned empty object', async () => {
            userAPI.getUserInfo.mockResolvedValue({});
            const dispatchMock = jest.fn();
            await requestUsersInfo(1)(dispatchMock);
            expect(dispatchMock).toBeCalledTimes(3);
            expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleIsFetching(true));
            expect(dispatchMock).toHaveBeenNthCalledWith(
                2,
                setRequestError('Empty object in userInfo')
            );
            expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleIsFetching(false));
        });
        it('fails requestUsersInfo thunk', async () => {
            const error = {
                response: {
                    data: {
                        message: 'FAIL!',
                    },
                },
            };
            userAPI.getUserInfo.mockRejectedValue(error);
            const dispatchMock = jest.fn();
            await requestUsersInfo(1)(dispatchMock);
            expect(dispatchMock).toBeCalledTimes(2);
            expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleIsFetching(true));
            expect(dispatchMock).toHaveBeenNthCalledWith(2, setRequestError('FAIL!'));
        });
    });

    describe('Test usersReducer', () => {
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

        // it('isFetching should be set value true', () => {
        //     const action = toggleIsFetching(true);
        //     const newState = usersReducer(state, action);
        //     expect(newState.isFetching).toBe(true);
        // });
    });
});
