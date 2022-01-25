import React, {useEffect, useRef} from 'react';
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMusic, faHeart, faComment, faShare} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import style from './trendingFeed.module.css';

const Post = function ({post}) {
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
        <div className={style.post}>
            <div className={style.postInfo}>
                <div className={style.authorPhoto}>
                    <Link to={`/profile/${post.author.id}`}>
                        <Avatar src={post.author.avatarMedium} sx={{width: '5vw', height: '5vw'}}/>
                    </Link>
                </div>
                <div>
                    <div>
                        <Link to={`/profile/${post.author.id}`} className={style.authorName}>
                            <span>{post.author.nickname} </span>
                        </Link>
                        <span className={style.authorNickName}>{post.author.nickname}</span>
                    </div>
                    <div className={style.postText}>{post.desc}</div>
                    <div className={style.musicInfo}>
                        <FontAwesomeIcon icon={faMusic}/>
                        <span> {post.music.title} - </span>
                        <span>{post.music.authorName}</span>
                    </div>
                </div>
            </div>
            <div className={style.video}>
                <video controls ref={videoRef} poster={post.video.cover} loop>
                    <source src={post.video.playAddr}/>
                    <track kind="captions"/>
                </video>
            </div>
            <div className={style.actionBar}>
                <div className={style.item}>
                    <FontAwesomeIcon icon={faHeart}/> {post.stats.diggCount}
                </div>
                <div className={style.item}>
                    <FontAwesomeIcon icon={faComment}/> {post.stats.commentCount}
                </div>
                <div className={style.item}>
                    <FontAwesomeIcon icon={faShare}/> {post.stats.shareCount}
                </div>
            </div>
        </div>
    );
};

/* Post.propTypes = {
    author: PropTypes.shape({
        avatarMedium: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }),
    desc: PropTypes.string.isRequired,
    music: PropTypes.shape({
        title: PropTypes.string.isRequired,
        authorName: PropTypes.string.isRequired,
    }),
    video: PropTypes.shape({
        cover: PropTypes.string.isRequired,
        playAddr: PropTypes.string.isRequired,
    }),
    stats: PropTypes.shape({
        shareCount: PropTypes.number.isRequired,
        commentCount: PropTypes.number.isRequired,
        diggCount: PropTypes.number.isRequired,
    })
}; */

Post.propTypes = {
    author: PropTypes.object,
    desc: PropTypes.string,
    music: PropTypes.object,
    video: PropTypes.object,
    stats: PropTypes.object
};

Post.defaultProps = {
    author: {},
    desc: '',
    music: {},
    video: {},
    stats: {},
};

export default Post;
