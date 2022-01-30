import {render, screen} from "@testing-library/react";
import React from "react";
import UserPostItem from "./UserPostItem";

const post = {
    stats: {
        playCount: 129,
    },
    video: {
        cover: 'video cover',
        playAddr: 'video playAddr',
    }
}


describe('UserPostItem component', () => {
    it('UserPostItem render', () => {
        render(
            <UserPostItem post={post}/>
        );
        expect(screen.getByRole('postItem')).toBeInTheDocument();;
    });
    it('props transferred to the component', () => {
        render(
            <UserPostItem post={post}/>
        );
        expect(screen.getByText(post.stats.playCount)).toBeInTheDocument();
        expect(screen.getByRole('video')).toHaveAttribute('poster', post.video.cover);
        expect(screen.getByRole('source')).toHaveAttribute('src', post.video.playAddr);
    });
})
