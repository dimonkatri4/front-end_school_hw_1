import getTrendingFeed from '../api/getTrendingFeed';
import { setError, setTrendingFeed } from '../store/trendingSlice';
import {AppDispatch} from "../store/store";
import mockData from '../mocks/user-feed.json'

 const requestTrendingFeed = () => async (dispatch: AppDispatch) => {
        try {
            const data = await getTrendingFeed();
            if (data.length === 0 || typeof data === 'string') {
                dispatch(setError('Empty array trending feed'));
                console.error('Empty array trending feed')
            } else {
                dispatch(setTrendingFeed(data));
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            dispatch(setError("Something went wrong! Please try again"));
            console.error(err.response.data.message)
        }
    };

export const mockRequestTrendingFeed = () => (dispatch: AppDispatch) => {
    dispatch(setTrendingFeed(mockData.itemList))
}

export default requestTrendingFeed;
