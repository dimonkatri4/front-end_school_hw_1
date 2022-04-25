import React from 'react';
import { render, screen } from '@testing-library/react';
import ActionBar from './ActionBar';

const stats = {
    diggCount: 1,
    commentCount: 2,
    shareCount: 3,
};

describe('ActionBar component', () => {
    it('ActionBar render', () => {
        render(<ActionBar stats={stats} />);
        expect(screen.getByTestId('actionBar')).toBeInTheDocument();
        expect(screen.getByTestId('actionBar')).toHaveClass('actionBar');
    });
    it('props should appear on the page', () => {
        render(<ActionBar stats={stats} />);
        expect(screen.getByText(stats.diggCount)).toBeInTheDocument();
        expect(screen.getByText(stats.commentCount)).toBeInTheDocument();
        expect(screen.getByText(stats.shareCount)).toBeInTheDocument();
    });
});
