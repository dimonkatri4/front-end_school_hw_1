import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import Profile from './Profile';
import {mockRequestTrendingFeed} from '../../services/requestTrendingFeed.thunk';
import {mockRequestUsersInfo} from '../../services/requestUsersInfo.thunk';
import {
    getTrendingErrorsSelector,
    getTrendingFeedSelector,
} from "../../store/selectors/trending-selectors";
import {getUsersSelector} from "../../store/selectors/users-selectors";

const ProfileContainer = function () {

    const { userId } = useParams();
    const dispatch = useDispatch();
    const trendingFeed = useSelector(getTrendingFeedSelector);
    const errors = useSelector(getTrendingErrorsSelector);
    const users = useSelector(getUsersSelector);

    useEffect(() => {
        userId ? dispatch(mockRequestUsersInfo(userId)) : dispatch(mockRequestUsersInfo());
    }, [userId]);

    useEffect(() => {
       dispatch(mockRequestTrendingFeed());
    }, []);

    return (
        <Profile
            profile={users.userInfo}
            isFetching={users.isFetching}
            trending={trendingFeed}
            errorTrend={errors}
            errorUser={users.requestError}
        />
    );
};

export default ProfileContainer