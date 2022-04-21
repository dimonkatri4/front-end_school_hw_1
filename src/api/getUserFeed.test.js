import getUserFeed from './getUserFeed';
import apiRequest from './api';

jest.mock('./api');

describe('getUserFeed function', () => {
    apiRequest.mockReturnValue(jest.fn());
    it('apiRequest must be called once with the set parameters and return the value', async () => {
        await getUserFeed();
        expect(apiRequest).toBeCalledTimes(1);
        expect(apiRequest).toHaveBeenCalledWith('user/info/', 'dave.xp');
        expect(apiRequest).toHaveReturned();
    });
});
