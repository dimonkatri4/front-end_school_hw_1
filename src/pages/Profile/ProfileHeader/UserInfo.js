import React from 'react';
import PropTypes from 'prop-types';
import style from '../profile.module.css';

const UserInfo = function ({ profile }) {
    return (
        <div className={style.userInfo} data-testid="userInfo">
            <div className={style.nickname}>{profile.nickname}</div>
            <div className={style.signature}>{profile.signature}</div>
            <div className={style.status}>
                <div>
                    <span>{profile.relation} </span>
                    Following
                </div>
                <div>
                    <span>{profile.duetSetting} </span>
                    Followers
                </div>
                <div>
                    <span>{profile.stitchSetting} </span>
                    Likes
                </div>
            </div>
        </div>
    );
};

UserInfo.propTypes = {
    profile: PropTypes.object,
};

UserInfo.defaultProps = {
    profile: {},
};

export default UserInfo;
