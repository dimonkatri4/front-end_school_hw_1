import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import style from '../trendingFeed.module.css';
import editNumber from '../../../helpers/editNumber';
import { Status } from '../../../domain/PostType';

type Props = {
    stats: Status,
};

const ActionBar = function ({ stats }: Props) {
    return (
        <div className={style.actionBar} data-testid="actionBar">
            <div className={style.item}>
                <FontAwesomeIcon icon={faHeart} /> {editNumber(stats.diggCount)}
            </div>
            <div className={style.item}>
                <FontAwesomeIcon icon={faComment} /> {editNumber(stats.commentCount)}
            </div>
            <div className={style.item}>
                <FontAwesomeIcon icon={faShare} /> {editNumber(stats.shareCount)}
            </div>
        </div>
    );
};

export default ActionBar;
