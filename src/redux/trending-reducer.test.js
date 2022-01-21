import trendingReducer, {
    requestTrendingFeed,
    setError,
    setTrendingFeed,
} from './trending-reducer';

const trendingAPI = require('../api/api').trendingAPI;
jest.mock('../api/api', () => ({
    trendingAPI: {
        getTrendingFeed: jest.fn(),
    },
}));

describe('Trending reducer', () => {
    describe('Thunk trending-reducer', () => {
        it('success requestTrendingFeed thunk', async () => {
            trendingAPI.getTrendingFeed.mockResolvedValue([{ data: {} }]);
            const dispatchMock = jest.fn();
            await requestTrendingFeed()(dispatchMock);
            expect(dispatchMock).toBeCalledTimes(1);
            expect(dispatchMock).toHaveBeenNthCalledWith(1, setTrendingFeed([{ data: {} }]));
        });
        it('query returned empty array', async () => {
            trendingAPI.getTrendingFeed.mockResolvedValue([]);
            const dispatchMock = jest.fn();
            await requestTrendingFeed()(dispatchMock);
            expect(dispatchMock).toBeCalledTimes(1);
            expect(dispatchMock).toHaveBeenNthCalledWith(1, setError('Empty array trending feed'));
        });
        it('fails requestTrendingFeed thunk', async () => {
            const error = {
                response: {
                    data: {
                        message: 'FAIL!',
                    },
                },
            };
            trendingAPI.getTrendingFeed.mockRejectedValue(error);
            const dispatchMock = jest.fn();
            await requestTrendingFeed()(dispatchMock);
            expect(dispatchMock).toBeCalledTimes(1);
            expect(dispatchMock).toHaveBeenNthCalledWith(1, setError('FAIL!'));
        });
    });

    describe('Test trendingReducer', () => {
        let state;
        beforeEach(() => {
            state = {
                trendingFeed: null,
                error: null,
            };
        });
        it('trendingFeed should be set in state and it must be array of length 1', () => {
            const newTrendingFeed = [
                {
                    avatar: 'avatar src',
                    authorName: 'authorName',
                    nickName: 'nickName',
                    postText: 'postText',
                },
            ];
            const action = setTrendingFeed(newTrendingFeed);
            const newState = trendingReducer(state, action);
            expect(Array.isArray(newState.trendingFeed)).toBe(true);
            expect(newState.trendingFeed.length).toBe(1);
        });

        it('the error should be set in state', () => {
            const error = 'Some error';
            const action = setError(error);
            const newState = trendingReducer(state, action);
            expect(newState.error).toBe('Some error');
        });
    });
});
