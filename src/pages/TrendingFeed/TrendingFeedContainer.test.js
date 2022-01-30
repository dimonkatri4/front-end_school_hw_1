import React from 'react';
import {render} from '@testing-library/react';
import {TrendingFeedContainer} from "./TrendingFeedContainer";

jest.mock('./../../store/trending-reducer');

describe('TrendingFeedContainer component', () => {
    it('function requestTrendingFeedMock must be called once when rendering a component', () => {
        const requestTrendingFeedMock = jest.fn();
        render(<TrendingFeedContainer requestTrendingFeed={requestTrendingFeedMock}/>)
        expect(requestTrendingFeedMock).toBeCalledTimes(1)
    })
})