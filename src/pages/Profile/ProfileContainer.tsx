import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import Profile from './Profile';
import requestTrendingFeed from '../../services/requestTrendingFeed.thunk';
import requestUsersInfo from '../../services/requestUsersInfo.thunk';
import {
    getTrendingErrorsSelector,
    getTrendingFeedSelector,
} from "../../rtk-store/selectors/trending-selectors";
import {getUsersSelector} from "../../rtk-store/selectors/users-selectors";

const ProfileContainer = function () {

    const { userId } = useParams();
    const dispatch = useDispatch();
    const trendingFeed = useSelector(getTrendingFeedSelector);
    const errors = useSelector(getTrendingErrorsSelector);
    const users = useSelector(getUsersSelector);

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
            trending={trendingFeed}
            errorTrend={errors}
            errorUser={users.requestError}
            pageSize={users.pageSize}
        />
    );
};

export default ProfileContainer