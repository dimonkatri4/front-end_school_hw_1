import React from 'react';
import PropTypes from 'prop-types';
import style from '../trendingFeed.module.css';

const Video = function ({ video, videoRef }) {
    return (
        <div className={style.video}>
            <video ref={videoRef} controls poster={video.cover} loop muted data-testid="video">
                <source src={video.playAddr} />
                <track kind="captions" />
            </video>
        </div>
    );
};

Video.propTypes = {
    video: PropTypes.object,
    videoRef: PropTypes.object,
};

Video.defaultProps = {
    video: {},
    videoRef: {},
};

export default Video;
