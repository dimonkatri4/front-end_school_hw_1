import trendingReducer, { setError, setTrendingFeed } from './trending-reducer';
import {PostType} from "../domain/PostType";
import {ErrorType} from "../domain/ErrorType";

type State = {
    trendingFeed: Array<PostType> | null
    errors: ErrorType
}

describe('Test trendingReducer', () => {
    let state: State  ;
    beforeEach(() => {
        state = {
            trendingFeed: null,
            errors: null,
        };
    });
    it('trendingFeed should be set in state and it must newTrendingFeed', () => {
        const newTrendingFeed: Array<PostType> = [
            {
                id: 100,
                author: {
                    uniqueId: 'id',
                    avatarMedium: 'src avatar',
                    nickname: 'User',
                },
                desc: 'Description',
                music: {
                    title: 'Title',
                    authorName: 'Author Name'
                },
                stats: {
                    diggCount: 10,
                    commentCount: 11,
                    shareCount: 12,
                },
                video: {
                    cover: 'src cover',
                    playAddr: 'src video',
                }
            },
        ];
        const action = setTrendingFeed(newTrendingFeed);
        const newState = trendingReducer(state, action);
        expect(Array.isArray(newState.trendingFeed)).toBe(true);
        expect(newState.trendingFeed).toBe(newTrendingFeed);
    });

    it('the error should be set in state', () => {
        const errors = new Error('Some error');
        const action = setError(errors);
        const newState = trendingReducer(state, action);
        expect(newState.errors).toBe(errors);
    });
});
