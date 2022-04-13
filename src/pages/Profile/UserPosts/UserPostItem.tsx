import React from 'react';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../profile.module.css';
import editNumber from '../../../helpers/editNumber';
import { PostType } from '../../../domain/PostType';

type Props = {
    post: PostType,
};

const UserPostItem = function ({ post }: Props) {
    return (
        <div className={style.postItem} data-testid="postItem">
            <span>
                <FontAwesomeIcon icon={faPlay} /> {editNumber(post.stats.diggCount)}
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

export default UserPostItem;
