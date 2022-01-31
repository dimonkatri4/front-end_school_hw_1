import React from 'react';
import { render } from '@testing-library/react';
import { TrendingFeedContainerComponent } from './TrendingFeedContainerComponent';

jest.mock('./../../store/trending-reducer');

describe('TrendingFeedContainer component', () => {
    it('function requestTrendingFeedMock must be called once when rendering a component', () => {
        const requestTrendingFeedMock = jest.fn();
        render(<TrendingFeedContainerComponent requestTrendingFeed={requestTrendingFeedMock} />);
        expect(requestTrendingFeedMock).toBeCalledTimes(1);
    });
});
