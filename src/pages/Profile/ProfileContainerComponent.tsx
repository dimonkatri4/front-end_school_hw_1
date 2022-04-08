import React, { useEffect } from 'react';
import {connect, ConnectedProps} from 'react-redux';
import { useParams } from 'react-router-dom';
import Profile from './Profile';
import requestTrendingFeed from '../../services/requestTrendingFeed.thunk';
import requestUsersInfo from '../../services/requestUsersInfo.thunk';
import {AppStateType} from "../../store/store";

export const ProfileContainerComponent = function ({
    requestUsersInfo,
    requestTrendingFeed,
    profile,
    isFetching,
    trending,
    errorTrend,
    errorUser,
    pageSize,
}: PropsFromRedux) {
    const { userId } = useParams();

    useEffect(() => {
        userId ? requestUsersInfo(userId) : requestUsersInfo();
    }, [userId]);

    useEffect(() => {
        requestTrendingFeed();
    }, []);

    return (
        <Profile
            profile={profile}
            isFetching={isFetching}
            trending={trending}
            errorTrend={errorTrend}
            errorUser={errorUser}
            pageSize={pageSize}
        />
    );
};

const mapStateToProps = (state: AppStateType) => ({
    profile: state.users.userInfo,
    isFetching: state.users.isFetching,
    trending: state.trending.trendingFeed,
    errorTrend: state.trending.errors,
    errorUser: state.users.requestError,
    pageSize: state.users.pageSize,
});

const connector = connect(mapStateToProps, {requestUsersInfo, requestTrendingFeed});
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(ProfileContainerComponent);
