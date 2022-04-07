import getTrendingFeed from '../api/getTrendingFeed';
import { setError, setTrendingFeed } from '../store/trending-reducer';
import {Dispatch} from "redux";

const requestTrendingFeed = () => async (dispatch: Dispatch) => {
    try {
        const data = await getTrendingFeed();
        if (data.length === 0 || typeof data == 'string' ) {
            dispatch(setError( 'Empty array trending feed'));
        } else {
            dispatch(setTrendingFeed(data));
        }
    } catch (err: any) {
        dispatch(setError(err.response.data.message));
    }
};

export default requestTrendingFeed;
