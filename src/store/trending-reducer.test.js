import trendingReducer, { setError, setTrendingFeed } from './trending-reducer';

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
