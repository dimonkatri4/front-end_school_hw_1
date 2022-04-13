import getTrendingFeed from '../api/getTrendingFeed';
import { ActionTypeTrendingReducer, setError, setTrendingFeed } from '../store/trending-reducer';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../store/store';

const requestTrendingFeed =
    (): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypeTrendingReducer> =>
    async (dispatch) => {
        try {
            const data = await getTrendingFeed();
            if (data.length === 0 || typeof data == 'string') {
                dispatch(setError('Empty array trending feed'));
            } else {
                dispatch(setTrendingFeed(data));
            }
        } catch (err: any) {
            dispatch(setError(err.response.data.message));
        }
    };

export default requestTrendingFeed;
