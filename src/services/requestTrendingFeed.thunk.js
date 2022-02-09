import getTrendingFeed from '../api/getTrendingFeed';
import { setError, setTrendingFeed } from '../store/trending-reducer';

const requestTrendingFeed = () => async (dispatch) => {
    try {
        const data = await getTrendingFeed();
        if (data.length === 0 || data === 'something went wrong, please try again' || data.error) {
            dispatch(setError(data.error || 'Empty array trending feed'));
        } else {
            dispatch(setTrendingFeed(data));
        }
    } catch (err) {
        dispatch(setError(err.response.data.message));
    }
};

export default requestTrendingFeed;
