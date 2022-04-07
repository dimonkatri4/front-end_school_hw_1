import React from 'react';
import style from '../profile.module.css';
import UserAvatar from './UserAvatar';
import { UserInfoType } from '../../../domain/UserInfoType';
import UserInfo from './UserInfo';

type Props = {
    profile: UserInfoType
}

const ProfileHeader = function ({ profile }: Props) {
    return (
        <div className={style.profileUserInfo} data-testid="profileUserInfo">
            <UserAvatar avatar={profile.avatarMedium} />
            <UserInfo profile={profile} />
        </div>
    );
};

export default ProfileHeader;
