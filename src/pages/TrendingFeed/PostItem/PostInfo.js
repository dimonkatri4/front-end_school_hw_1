import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import style from '../trendingFeed.module.css';

const PostInfo = function ({ author, desc, music }) {
    return (
        <div className={style.postInfo} data-testid="postInfo">
            <div className={style.authorPhoto}>
                <Link to={`/profile/${author.uniqueId}`}>
                    <Avatar src={author.avatarMedium} sx={{ width: '5vw', height: '5vw' }} />
                </Link>
            </div>
            <div>
                <div>
                    <Link to={`/profile/${author.uniqueId}`} className={style.authorName}>
                        <span>{author.nickname} </span>
                    </Link>
                    <span className={style.authorNickName}>{author.nickname}</span>
                </div>
                <div className={style.postText}>{desc}</div>
                <div className={style.musicInfo}>
                    <FontAwesomeIcon icon={faMusic} />
                    <span> {music.title} - </span>
                    <span>{music.authorName}</span>
                </div>
            </div>
        </div>
    );
};

PostInfo.propTypes = {
    author: PropTypes.object,
    desc: PropTypes.string,
    music: PropTypes.object,
};

PostInfo.defaultProps = {
    author: {},
    desc: '',
    music: {},
};

export default PostInfo;
