import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import style from '../trendingFeed.module.css';
import PostInfo from './PostInfo';
import Video from './Video';
import ActionBar from './ActionBar';
import {PostType} from "../../../domain/PostType";

type Props = {
    post: PostType
}

const PostItem = function ({ post }: Props) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (!videoRef.current) throw Error("videoRef is not assigned");
        const options = {
            rootMargin: '0px',
            threshold: [0.25, 0.75],
        };
        const handlePlay = (entries: IntersectionObserverEntry[]): void => {
            entries.forEach((entry) => {
                if (!videoRef.current) throw Error("videoRef is not assigned");
                if (entry.isIntersecting) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            });
        };

        const observer = new IntersectionObserver(handlePlay, options);

        observer.observe(videoRef.current);
        return () => observer.disconnect();
    }, [videoRef]);

    return (
        <div className={style.post} data-testid="postItem">
            <PostInfo author={post.author} desc={post.desc} music={post.music} />
            <Video videoRef={videoRef} video={post.video} />
            <ActionBar stats={post.stats} />
        </div>
    );
};

PostItem.propTypes = {
    post: PropTypes.object,
};

PostItem.defaultProps = {
    post: PropTypes.object,
};

export default PostItem;
