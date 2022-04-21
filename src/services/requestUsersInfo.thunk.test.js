import getUserInfo from '../api/getUserInfo';
import { setRequestError, setUsersInfo, toggleIsFetching } from '../store/users-reducer';
import requestUsersInfo from './requestUsersInfo.thunk';

jest.mock('../api/getUserInfo');

describe('Thunk requestUsersInfo', () => {
    it('success requestUsersInfo thunk', async () => {
        getUserInfo.mockResolvedValue({ data: {} });
        const dispatchMock = jest.fn();
        await requestUsersInfo(1)(dispatchMock);
        expect(dispatchMock).toBeCalledTimes(3);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleIsFetching(true));
        expect(dispatchMock).toHaveBeenNthCalledWith(2, toggleIsFetching(false));
        expect(dispatchMock).toHaveBeenNthCalledWith(3, setUsersInfo({ data: {} }));
    });
    it('query returned empty object', async () => {
        getUserInfo.mockResolvedValue({});
        const dispatchMock = jest.fn();
        await requestUsersInfo(1)(dispatchMock);
        expect(dispatchMock).toBeCalledTimes(3);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleIsFetching(true));
        expect(dispatchMock).toHaveBeenNthCalledWith(2, toggleIsFetching(false));
        expect(dispatchMock).toHaveBeenNthCalledWith(
            3,
            setRequestError('Empty object in userInfo')
        );
    });
    it('fails requestUsersInfo thunk', async () => {
        const error = {
            response: {
                data: {
                    message: 'FAIL!',
                },
            },
        };
        getUserInfo.mockRejectedValue(error);
        const dispatchMock = jest.fn();
        await requestUsersInfo(1)(dispatchMock);
        expect(dispatchMock).toBeCalledTimes(2);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleIsFetching(true));
        expect(dispatchMock).toHaveBeenNthCalledWith(2, setRequestError('FAIL!'));
    });
});
