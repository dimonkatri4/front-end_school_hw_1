import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useParams } from 'react-router-dom';
import Profile from './Profile';
import requestTrendingFeed from '../../services/requestTrendingFeed.thunk';
import requestUsersInfo from '../../services/requestUsersInfo.thunk';
import {UserInfoType} from "../../domain/UserInfoType";
import {PostType} from "../../domain/PostType";
import {ErrorType} from "../../domain/ErrorType";
import {AppStateType} from "../../store/store";

type MapStatePropsType = {
    profile: UserInfoType | null
    isFetching: boolean
    trending: PostType[] | null
    errorTrend: ErrorType
    errorUser: ErrorType
    pageSize: number
}

type MapDispatchPropsType = {
    requestUsersInfo: (id?: string) => void
    requestTrendingFeed: () => void
}

type Props = MapStatePropsType & MapDispatchPropsType

export const ProfileContainerComponent = function ({
    requestUsersInfo,
    requestTrendingFeed,
    profile,
    isFetching,
    trending,
    errorTrend,
    errorUser,
    pageSize,
}: Props) {
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

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.users.userInfo,
    isFetching: state.users.isFetching,
    trending: state.trending.trendingFeed,
    errorTrend: state.trending.errors,
    errorUser: state.users.requestError,
    pageSize: state.users.pageSize,
});

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, null, AppStateType>(mapStateToProps, {
        requestUsersInfo,
        requestTrendingFeed,
    })
)(ProfileContainerComponent);
