import getTrendingFeed from './getTrendingFeed';
import apiRequest from './api';

jest.mock('./api');

describe('getTrendingFeed function', () => {
    apiRequest.mockReturnValue(jest.fn());
    it('apiRequest must be called once with the set parameters and return the value', async () => {
        await getTrendingFeed();
        expect(apiRequest).toBeCalledTimes(1);
        expect(apiRequest).toHaveBeenCalledWith('trending/feed');
        expect(apiRequest).toHaveReturned();
    });
});
