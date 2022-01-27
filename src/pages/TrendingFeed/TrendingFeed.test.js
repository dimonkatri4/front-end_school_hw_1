import React from 'react';
import TrendingFeed from "./TrendingFeed";
import {render, screen} from '@testing-library/react'

jest.mock('./PostItem/PostItem', () => {
    return function PostItemMock() {
        return <div></div>
    }
})

const trending = [
    {
        author: '',
        desc: '',
        music: ''
    }
]

describe('TrendingFeed component', () => {
    it('', () => {
        render(<TrendingFeed trending={trending} />);
        expect(screen.getByTestId('trendingPage')).toHaveClass('trendingPage')
    })
})