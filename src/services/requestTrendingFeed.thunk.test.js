import getTrendingFeed from '../api/getTrendingFeed';
import { setError, setTrendingFeed } from '../store/trending-reducer';
import requestTrendingFeed from './requestTrendingFeed.thunk';

jest.mock('../api/getTrendingFeed');

describe('Thunk requestTrendingFeed', () => {
    it('success requestTrendingFeed thunk', async () => {
        getTrendingFeed.mockResolvedValue([{ data: {} }]);
        const dispatchMock = jest.fn();
        await requestTrendingFeed()(dispatchMock);
        expect(dispatchMock).toBeCalledTimes(1);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, setTrendingFeed([{ data: {} }]));
    });
    it('query returned empty array', async () => {
        getTrendingFeed.mockResolvedValue([]);
        const dispatchMock = jest.fn();
        await requestTrendingFeed()(dispatchMock);
        expect(dispatchMock).toBeCalledTimes(1);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, setError('Empty array trending feed'));
    });
    it('fails requestTrendingFeed thunk', async () => {
        const error = {
            response: {
                data: {
                    message: 'FAIL!',
                },
            },
        };
        getTrendingFeed.mockRejectedValue(error);
        const dispatchMock = jest.fn();
        await requestTrendingFeed()(dispatchMock);
        expect(dispatchMock).toBeCalledTimes(1);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, setError('FAIL!'));
    });
});
