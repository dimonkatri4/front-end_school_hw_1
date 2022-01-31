import getUserInfo from './getUserInfo';
import apiRequest from './api';

jest.mock('./api');

describe('getUserInfo function', () => {
    apiRequest.mockReturnValue(jest.fn());
    it('apiRequest must be called once with the set parameters and return the value', async () => {
        await getUserInfo();
        expect(apiRequest).toBeCalledTimes(1);
        expect(apiRequest).toHaveBeenCalledWith('user/info/', 'dave.xp');
        expect(apiRequest).toHaveReturned();
    });
});
