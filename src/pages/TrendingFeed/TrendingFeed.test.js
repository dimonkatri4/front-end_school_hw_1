import React from 'react';
import TrendingFeed from "./TrendingFeed";
import {render, screen} from '@testing-library/react';

jest.mock('./PostItem/PostItem', () => {
    return function PostItemMock({trend}) {
        return <div></div>
    }
})

const data = [
    {
        id: 1,
        author: '',
        desc: '',
        music: ''
    },
]

describe('TrendingFeed component', () => {
    it('TrendingFeed render', () => {
        render(<TrendingFeed trending={data} />);
        expect(screen.getByTestId('trendingPage')).toBeInTheDocument();
        expect(screen.getByTestId('trendingPage')).toHaveClass('trendingPage')
    })
    it('no trending props, render preloader', () => {
        render(<TrendingFeed trending={null} />);
        expect(screen.getByTestId('preloader')).toBeInTheDocument();
        expect(screen.queryByTestId('trendingPage')).toBeNull();
    })
    it('error props', () => {
        render(<TrendingFeed error={'Some error'} />);
        expect(screen.queryByTestId('trendingPage')).toBeNull();
        expect(screen.queryByTestId('preloader')).toBeNull();
    })
})