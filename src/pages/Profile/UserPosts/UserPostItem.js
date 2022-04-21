import React from 'react';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import style from '../profile.module.css';
import editNumber from '../../../helpers/editNumber';

const UserPostItem = function ({ post }) {
    return (
        <div className={style.postItem} data-testid="postItem">
            <span>
                <FontAwesomeIcon icon={faPlay} /> {editNumber(post.stats.playCount)}
            </span>
            <video
                controls
                loop
                poster={post.video.cover}
                className={style.video}
                data-testid="video"
            >
                <source src={post.video.playAddr} data-testid="source" />
                <track kind="captions" />
            </video>
        </div>
    );
};

UserPostItem.propTypes = {
    post: PropTypes.object,
};

UserPostItem.defaultProps = {
    post: {},
};

export default UserPostItem;
