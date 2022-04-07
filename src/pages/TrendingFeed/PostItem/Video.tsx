import React, {LegacyRef} from 'react';
import style from '../trendingFeed.module.css';
import {VideoType} from "../../../domain/PostType";

type Props = {
    video: VideoType
    videoRef: null | LegacyRef<HTMLVideoElement>
}

const Video = function ({ video, videoRef }: Props) {
    return (
        <div className={style.video}>
            <video ref={videoRef} controls poster={video.cover} loop muted data-testid="video">
                <source src={video.playAddr} />
                <track kind="captions" />
            </video>
        </div>
    );
};

export default Video;
