import React from 'react';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import style from './profile.module.css';
import editNumber from '../../../helpers/editNumber';

const UserPost = function ({ post }) {
    return (
        <div className={style.postItem}>
            <span>
                <FontAwesomeIcon icon={faPlay} /> {editNumber(post.stats.playCount)}
            </span>
            <video controls loop poster={post.video.cover} className={style.video}>
                <source src={post.video.playAddr} />
                <track kind="captions" />
            </video>
        </div>
    );
};

UserPost.propTypes = {
    post: PropTypes.object,
};

UserPost.defaultProps = {
    post: {},
};

export default UserPost;
