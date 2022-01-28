import React from 'react';
import {render, screen} from '@testing-library/react';
import PostInfo from "./PostInfo";
import {MemoryRouter, Router} from "react-router";

const author = {
    uniqueId: '123',
    avatarMedium: '456',
    nickname: '789',
}

const desc = 'Description';

const music = {
    title: '0987',
    authorName: '8765',
}

describe('PostInfo component', () => {
    it('component PostInfo render', () => {
        render(
            <MemoryRouter>
                <PostInfo author={author} desc={desc} music={music}/>
            </MemoryRouter>
        );
        expect(screen.getByTestId('postInfo')).toHaveClass('postInfo');
        expect(screen.getByText(desc)).toBeInTheDocument();
    })
})