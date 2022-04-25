import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import PostItem from './PostItem';
import { trendingTestData } from '../../../mocks/testData';

jest.mock(
    './Video',
    () =>
        function VideoMock() {
            return <div />;
        }
);

beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
        observe: () => null,
        disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
});

const post = trendingTestData[0];

describe('PostItem component', () => {
    it('PostItem render', () => {
        render(
            <MemoryRouter>
                <PostItem post={post} />
            </MemoryRouter>
        );
        expect(screen.getByTestId('postItem')).toBeInTheDocument();
        expect(screen.getByTestId('postItem')).toHaveClass('post');
    });
});
