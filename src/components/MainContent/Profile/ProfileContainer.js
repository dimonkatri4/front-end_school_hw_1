import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { requestUsersFeed, requestUsersInfo } from '../../../store/users-reducer';
import Profile from './Profile';
import { requestTrendingFeed } from '../../../store/trending-reducer';

const ProfileContainer = function ({
    requestUsersInfo,
    requestTrendingFeed,
    profile,
    isFetching,
    trending,
    errorTrend,
    errorUser,
    pageSize,
}) {
    const { userId } = useParams();

    useEffect(() => {
        userId ? requestUsersInfo(userId) : requestUsersInfo();
    }, [userId]);

    useEffect(() => {
        requestTrendingFeed();
    }, []);

    // In case the data came from the server correctly
    /*    useEffect(()=> {
        userId ? props.requestUsersFeed(userId) : props.requestUsersFeed()
    },[]) */

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

const mapStateToProps = (state) => ({
    profile: state.users.userInfo,
    isFetching: state.users.isFetching,
    trending: state.trending.trendingFeed,
    errorTrend: state.trending.error,
    errorUser: state.users.requestError,
    pageSize: state.users.pageSize,
});

ProfileContainer.propTypes = {
    requestUsersInfo: PropTypes.func.isRequired,
    requestTrendingFeed: PropTypes.func.isRequired,
    profile: PropTypes.object,
    isFetching: PropTypes.bool,
    trending: PropTypes.array,
    errorTrend: PropTypes.string,
    errorUser: PropTypes.string,
    pageSize: PropTypes.number.isRequired,
};

ProfileContainer.defaultProps = {
    profile: {},
    isFetching: null,
    trending: [],
    errorTrend: '',
    errorUser: '',
};

export default compose(
    connect(mapStateToProps, {
        requestUsersInfo,
        requestUsersFeed,
        requestTrendingFeed,
    })
)(ProfileContainer);
