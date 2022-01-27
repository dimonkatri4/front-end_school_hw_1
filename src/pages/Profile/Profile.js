import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import style from './profile.module.css';
import Error from '../../components/Error/Error';
import UserPosts from './UserPosts/UserPosts';
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const Profile = function ({ profile, isFetching, trending, errorTrend, errorUser, pageSize }) {
    if (errorTrend || errorUser) {
        return <Error errors={[errorTrend, errorUser]} />;
    }

    if (!profile || isFetching) {
        return (
            <div className={style.profileUserInfo}>
                <CircularProgress />
            </div>
        );
    }
    return (
        <div className={style.profilePage}>
            <ProfileHeader profile={profile} />
            {!trending ? (
                <CircularProgress />
            ) : (
                <UserPosts trending={trending} pageSize={pageSize} />
            )}
        </div>
    );
};

Profile.propTypes = {
    profile: PropTypes.object,
    isFetching: PropTypes.bool,
    trending: PropTypes.array,
    errorTrend: PropTypes.string,
    errorUser: PropTypes.string,
    pageSize: PropTypes.number.isRequired,
};

Profile.defaultProps = {
    profile: {},
    isFetching: null,
    trending: [],
    errorTrend: '',
    errorUser: '',
};

export default Profile;
