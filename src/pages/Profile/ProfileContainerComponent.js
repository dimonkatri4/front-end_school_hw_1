import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Profile from './Profile';
import requestTrendingFeed from '../../services/requestTrendingFeed.thunk';
import requestUsersInfo from '../../services/requestUsersInfo.thunk';

export const ProfileContainerComponent = function ({
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

ProfileContainerComponent.propTypes = {
    requestUsersInfo: PropTypes.func.isRequired,
    requestTrendingFeed: PropTypes.func.isRequired,
    profile: PropTypes.object,
    isFetching: PropTypes.bool,
    trending: PropTypes.array,
    errorTrend: PropTypes.string,
    errorUser: PropTypes.string,
    pageSize: PropTypes.number.isRequired,
};

ProfileContainerComponent.defaultProps = {
    profile: {},
    isFetching: null,
    trending: [],
    errorTrend: '',
    errorUser: '',
};

export default compose(
    connect(mapStateToProps, {
        requestUsersInfo,
        requestTrendingFeed,
    })
)(ProfileContainerComponent);
