import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import style from '../trendingFeed.module.css';
import editNumber from '../../../helpers/editNumber';

const ActionBar = function ({ stats }) {
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

ActionBar.propTypes = {
    stats: PropTypes.object,
};

ActionBar.defaultProps = {
    stats: {},
};

export default ActionBar;
