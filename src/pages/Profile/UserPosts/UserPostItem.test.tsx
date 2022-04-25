import { render, screen } from '@testing-library/react';
import React from 'react';
import { trendingTestData } from '../../../mocks/testData';
import UserPostItem from './UserPostItem';

const post = trendingTestData[0];

describe('UserPostItem component', () => {
    it('UserPostItem render', () => {
        render(<UserPostItem post={post} />);
        expect(screen.getByTestId('postItem')).toBeInTheDocument();
    });
    it('props transferred to the component', () => {
        render(<UserPostItem post={post} />);
        expect(screen.getByText(post.stats.diggCount)).toBeInTheDocument();
        expect(screen.getByTestId('video')).toHaveAttribute('poster', post.video.cover);
        expect(screen.getByTestId('source')).toHaveAttribute('src', post.video.playAddr);
    });
});
