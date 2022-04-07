import getUserInfo from '../api/getUserInfo';
import { setRequestError, setUsersInfo, toggleIsFetching } from '../store/users-reducer';
import {Dispatch} from "redux";

const requestUsersInfo = (id?: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(toggleIsFetching(true));
        const data = await getUserInfo(id);
        dispatch(toggleIsFetching(false));
        if (!Object.keys(data).length || typeof data == 'string') {
            dispatch(setRequestError('Empty object in userInfo'));
        } else {
            dispatch(setUsersInfo(data));
        }
    } catch (error: any) {
        dispatch(setRequestError(error.response.data.message));
    }
};

export default requestUsersInfo;
