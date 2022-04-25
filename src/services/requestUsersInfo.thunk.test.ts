import getUserInfo from '../api/getUserInfo';
import { setRequestError, setUsersInfo, toggleIsFetching } from '../store/users-reducer';
import requestUsersInfo from './requestUsersInfo.thunk';
import {profileTestData} from "../mocks/testData";

jest.mock('../api/getUserInfo');

const userFeedData = profileTestData;

describe('Thunk requestUsersInfo', () => {
    it('success requestUsersInfo thunk', async () => {
        (getUserInfo as jest.Mock).mockResolvedValue(userFeedData);
        const dispatchMock = jest.fn();
        // @ts-ignore
        await requestUsersInfo(1)(dispatchMock);
        expect(dispatchMock).toBeCalledTimes(3);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleIsFetching(true));
        expect(dispatchMock).toHaveBeenNthCalledWith(2, toggleIsFetching(false));
        expect(dispatchMock).toHaveBeenNthCalledWith(3, setUsersInfo(userFeedData));
    });
    it('query returned empty object', async () => {
        (getUserInfo as jest.Mock).mockResolvedValue({});
        const dispatchMock = jest.fn();
        // @ts-ignore
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
        (getUserInfo as jest.Mock).mockRejectedValue(error);
        const dispatchMock = jest.fn();
        // @ts-ignore
        await requestUsersInfo(1)(dispatchMock);
        expect(dispatchMock).toBeCalledTimes(2);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleIsFetching(true));
        expect(dispatchMock).toHaveBeenNthCalledWith(2, setRequestError('FAIL!'));
    });
});
