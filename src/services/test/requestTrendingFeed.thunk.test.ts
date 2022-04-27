import getTrendingFeed from '../../api/getTrendingFeed';
import { setError, setTrendingFeed } from '../../store/trending-reducer';
import requestTrendingFeed from '../requestTrendingFeed.thunk';
import {trendingTestData} from "../../mocks/testData";

jest.mock('../api/getTrendingFeed');

const trendingFeedData = trendingTestData;

describe('Thunk requestTrendingFeed', () => {
    it('success requestTrendingFeed thunk', async () => {
        (getTrendingFeed as jest.Mock).mockResolvedValue(trendingFeedData);
        const dispatchMock = jest.fn()
        // @ts-ignore
        await requestTrendingFeed()(dispatchMock);
        expect(dispatchMock).toBeCalledTimes(1);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, setTrendingFeed(trendingFeedData));
    });
    it('query returned empty array', async () => {
        (getTrendingFeed as jest.Mock).mockResolvedValue([]);
        const dispatchMock = jest.fn();
        // @ts-ignore
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
        (getTrendingFeed as jest.Mock).mockRejectedValue(error);
        const dispatchMock = jest.fn();
        // @ts-ignore
        await requestTrendingFeed()(dispatchMock);
        expect(dispatchMock).toBeCalledTimes(1);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, setError('FAIL!'));
    });
});
