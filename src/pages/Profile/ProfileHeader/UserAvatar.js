import React from 'react';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import style from '../profile.module.css';

const UserAvatar = function ({ avatar }) {
    return (
        <div className={style.profileAvatar}>
            <Avatar src={avatar} sx={{ width: '12vw', height: '12vw' }} data-testid="avatar" />
        </div>
    );
};

UserAvatar.propTypes = {
    avatar: PropTypes.string,
};

UserAvatar.defaultProps = {
    avatar: '',
};

export default UserAvatar;
