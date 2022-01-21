import React, { useEffect, useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import style from './trendingFeed.module.css';

const Post = function ({
    authorMeta,
    text,
    musicMeta,
    videoUrl,
    covers,
    shareCount,
    commentCount,
    diggCount,
}) {
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
                    <Link to={`/profile/${authorMeta.id}`}>
                        <Avatar src={authorMeta.avatar} sx={{ width: '5vw', height: '5vw' }} />
                    </Link>
                </div>
                <div>
                    <div>
                        <Link to={`/profile/${authorMeta.id}`} className={style.authorName}>
                            <span>{authorMeta.name} </span>
                        </Link>
                        <span className={style.authorNickName}>{authorMeta.nickName}</span>
                    </div>
                    <div className={style.postText}>{text}</div>
                    <div className={style.musicInfo}>
                        <FontAwesomeIcon icon={faMusic} />
                        <span> {musicMeta.musicName} - </span>
                        <span>{musicMeta.musicAuthor}</span>
                    </div>
                </div>
            </div>
            <div className={style.video}>
                <video controls ref={videoRef} poster={covers.default} loop>
                    <source src={videoUrl} />
                    <track kind="captions" />
                </video>
            </div>
            <div className={style.actionBar}>
                <div className={style.item}>
                    <FontAwesomeIcon icon={faHeart} /> {diggCount}
                </div>
                <div className={style.item}>
                    <FontAwesomeIcon icon={faComment} /> {commentCount}
                </div>
                <div className={style.item}>
                    <FontAwesomeIcon icon={faShare} /> {shareCount}
                </div>
            </div>
        </div>
    );
};

Post.propTypes = {
    authorMeta: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        nickName: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }),
    text: PropTypes.string.isRequired,
    musicMeta: PropTypes.shape({
        musicName: PropTypes.string.isRequired,
        musicAuthor: PropTypes.string.isRequired,
    }),
    videoUrl: PropTypes.string.isRequired,
    covers: PropTypes.shape({
        default: PropTypes.string.isRequired,
    }),
    shareCount: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired,
    diggCount: PropTypes.number.isRequired,
};

Post.defaultProps = {
    authorMeta: {},
    musicMeta: {},
    covers: {},
};

export default Post;
