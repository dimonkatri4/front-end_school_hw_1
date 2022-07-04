import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import style from './profile.module.css';
import Error from '../../components/Error/Error';
import UserPosts from './UserPosts/UserPosts';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import {PostType} from "../../domain/PostType";
import {ErrorType} from "../../domain/ErrorType";
import { UserInfoType } from '../../domain/UserInfoType';

type Props = {
    profile: UserInfoType | null
    isFetching: boolean
    trending: PostType[] | null
    errorTrend: ErrorType
    errorUser: ErrorType
}

const Profile = function ({ profile, isFetching, trending, errorTrend, errorUser }: Props) {
    const errors = errorTrend || errorUser
    if (errors) {
        return <Error errors={errors} data-testid="error" />;
    }

    if (!profile || isFetching) {
        return (
            <div className={style.profileUserInfo} data-testid="preloader">
                <CircularProgress />
            </div>
        );
    }
    return (
        <div className={style.profilePage} data-testid="profile">
            <ProfileHeader profile={profile} />
            {!trending ? (
                <CircularProgress />
            ) : (
                <UserPosts/>
            )}
        </div>
    );
};

export default Profile;
