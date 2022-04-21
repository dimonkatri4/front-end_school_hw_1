import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TrendingFeed from './TrendingFeed';
import requestTrendingFeed from '../../services/requestTrendingFeed.thunk';

export const TrendingFeedContainerComponent = function ({ requestTrendingFeed, trending, error }) {
    useEffect(() => {
        requestTrendingFeed();
    }, []);

    return <TrendingFeed trending={trending} error={error} />;
};

const mapStateToProps = (state) => ({
    trending: state.trending.trendingFeed,
    error: state.trending.error,
});

TrendingFeedContainerComponent.propTypes = {
    requestTrendingFeed: PropTypes.func.isRequired,
    trending: PropTypes.array,
    error: PropTypes.string,
};

TrendingFeedContainerComponent.defaultProps = {
    trending: [],
    error: '',
};

export default connect(mapStateToProps, { requestTrendingFeed })(TrendingFeedContainerComponent);
