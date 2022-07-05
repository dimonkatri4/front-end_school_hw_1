import trendingReducer, { setError, setTrendingFeed } from '../trendingSlice';
import {PostType} from "../../domain/PostType";
import {ErrorType} from "../../domain/ErrorType";
import { trendingTestData } from '../../mocks/testData';

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
        const newTrendingFeed: Array<PostType> = trendingTestData
        const action = setTrendingFeed(newTrendingFeed);
        const newState = trendingReducer(state, action);
        expect(Array.isArray(newState.trendingFeed)).toBe(true);
        expect(newState.trendingFeed).toBe(newTrendingFeed);
    });

    it('the error should be set in state', () => {
        const errors = 'Some error';
        const action = setError(errors);
        const newState = trendingReducer(state, action);
        expect(newState.errors).toBe(errors);
    });
});
