import trendingReducer, { setError, setTrendingFeed } from './trending-reducer';
import {PostType} from "../domain/PostType";

type State = {
    trendingFeed: Array<PostType> | null
    error: Error | null
}

describe('Test trendingReducer', () => {
    let state: State  ;
    beforeEach(() => {
        state = {
            trendingFeed: null,
            error: null,
        };
    });
    it('trendingFeed should be set in state and it must newTrendingFeed', () => {
        const newTrendingFeed: Array<PostType> = [
            {
                author: {
                    uniqueId: 'id',
                    avatarMedium: 'string',
                    nickname: 'string',
                },
                desc: 'description',
                music: {
                    title: 'string',
                    authorName: 'string'
                },
                stats: {
                    diggCount: 10,
                    commentCount: 11,
                    shareCount: 12,
                },
                video: {
                    cover: 'string',
                    playAddr: 'string',
                }
            },
        ];
        const action = setTrendingFeed(newTrendingFeed);
        const newState = trendingReducer(state, action);
        expect(Array.isArray(newState.trendingFeed)).toBe(true);
        expect(newState.trendingFeed).toBe(newTrendingFeed);
    });

    it('the error should be set in state', () => {
        const error = new Error('Some error');
        const action = setError(error);
        const newState = trendingReducer(state, action);
        expect(newState.error).toBe('Some error');
    });
});
