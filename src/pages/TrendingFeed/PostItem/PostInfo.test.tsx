import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import PostInfo from './PostInfo';

const author = {
    uniqueId: '123',
    avatarMedium: 'src avatar medium',
    nickname: 'user nickname',
};

const desc = 'Description';

const music = {
    title: 'music title',
    authorName: 'name music author',
};

describe('PostInfo component', () => {
    it('component PostInfo render', () => {
        render(
            <MemoryRouter>
                <PostInfo author={author} desc={desc} music={music} />
            </MemoryRouter>
        );
        expect(screen.getByTestId('postInfo')).toHaveClass('postInfo');
    });
    it('props should appear on the page', () => {
        render(
            <MemoryRouter>
                <PostInfo author={author} desc={desc} music={music} />
            </MemoryRouter>
        );
        expect(screen.getByText(desc)).toBeInTheDocument();
        expect(screen.getByText(music.authorName)).toBeInTheDocument();
    });
});
