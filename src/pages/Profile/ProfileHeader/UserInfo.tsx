import React from 'react';
import style from '../profile.module.css';
import { UserInfoType } from '../../../domain/UserInfoType';

type Props = {
    profile: UserInfoType,
};

const UserInfo = function ({ profile }: Props) {
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

export default UserInfo;
