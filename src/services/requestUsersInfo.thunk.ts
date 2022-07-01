import getUserInfo from '../api/getUserInfo';
import {AppDispatch} from "../store/store";
import {setRequestError, setUsersInfo, toggleIsFetching } from '../store/usersSlice';

const requestUsersInfo = (id?: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(toggleIsFetching(true));
            const data = await getUserInfo(id);
            dispatch(toggleIsFetching(false));
            if (!Object.keys(data).length || typeof data === 'string') {
                dispatch(setRequestError('Empty object in userInfo'));
            } else {
                dispatch(setUsersInfo(data));
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            dispatch(setRequestError(error.response.data.message));
        }
    };

export default requestUsersInfo;
