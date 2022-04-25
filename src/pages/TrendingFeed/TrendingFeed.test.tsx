import React from 'react';
import { render, screen } from '@testing-library/react';
import TrendingFeed from './TrendingFeed';
import {trendingTestData} from "../../mocks/testData";

jest.mock(
    './PostItem/PostItem',
    () =>
        function PostItemMock() {
            return <div />;
        }
);

const data = trendingTestData;

describe('TrendingFeed component', () => {
    it('TrendingFeed render', () => {
        render(<TrendingFeed trending={data} error={null} />);
        expect(screen.getByTestId('trendingPage')).toBeInTheDocument();
        expect(screen.getByTestId('trendingPage')).toHaveClass('trendingPage');
    });
    it('no trending props, render preloader', () => {
        render(<TrendingFeed trending={null} error={null} />);
        expect(screen.getByTestId('preloader')).toBeInTheDocument();
        expect(screen.queryByTestId('trendingPage')).toBeNull();
    });
    it('error props', () => {
        render(<TrendingFeed trending={null} error="Some error" />);
        expect(screen.queryByTestId('trendingPage')).toBeNull();
        expect(screen.queryByTestId('preloader')).toBeNull();
    });
});
