import React from 'react';
import Avatar from '@mui/material/Avatar';
import style from '../profile.module.css';

type Props = {
    avatar: string,
};

const UserAvatar = function ({ avatar }: Props) {
    return (
        <div className={style.profileAvatar}>
            <Avatar src={avatar} sx={{ width: '12vw', height: '12vw' }} data-testid="avatar" />
        </div>
    );
};

export default UserAvatar;
