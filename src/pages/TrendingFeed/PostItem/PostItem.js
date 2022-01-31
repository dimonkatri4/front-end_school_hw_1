import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import style from '../trendingFeed.module.css';
import PostInfo from './PostInfo';
import Video from './Video';
import ActionBar from './ActionBar';

const PostItem = function ({ post }) {
    const videoRef = useRef(null);

    useEffect(() => {
        const options = {
            rootMargin: '0px',
            threshold: [0.25, 0.75],
        };
        const handlePlay = (entries) => {
            entries.forEach((entry) => {
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
