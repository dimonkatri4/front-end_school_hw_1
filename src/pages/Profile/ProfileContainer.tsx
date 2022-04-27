import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import Profile from './Profile';
import requestTrendingFeed from '../../services/requestTrendingFeed.thunk';
import requestUsersInfo from '../../services/requestUsersInfo.thunk';
import {RootState} from "../../rtk-store/rtk-store";

const ProfileContainer = function () {

    const { userId } = useParams();
    const dispatch = useDispatch();
    const trending = useSelector((state: RootState) => state.trending);
    const users = useSelector((state: RootState) => state.user);

    useEffect(() => {
        userId ? dispatch(requestUsersInfo(userId)) : dispatch(requestUsersInfo());
    }, [userId]);

    useEffect(() => {
       dispatch(requestTrendingFeed());
    }, []);

    return (
        <Profile
            profile={users.userInfo}
            isFetching={users.isFetching}
            trending={trending.trendingFeed}
            errorTrend={trending.errors}
            errorUser={users.requestError}
            pageSize={users.pageSize}
        />
    );
};

export default ProfileContainer