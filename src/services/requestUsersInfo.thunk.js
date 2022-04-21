import getUserInfo from '../api/getUserInfo';
import { setRequestError, setUsersInfo, toggleIsFetching } from '../store/users-reducer';

const requestUsersInfo = (id) => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true));
        const data = await getUserInfo(id);
        dispatch(toggleIsFetching(false));
        if (!Object.keys(data).length || data === 'something went wrong, please try again') {
            dispatch(setRequestError('Empty object in userInfo'));
        } else {
            dispatch(setUsersInfo(data));
        }
    } catch (error) {
        dispatch(setRequestError(error.response.data.message));
    }
};

export default requestUsersInfo;
