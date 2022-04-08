import React, {useEffect} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import TrendingFeed from './TrendingFeed';
import requestTrendingFeed from '../../services/requestTrendingFeed.thunk';
import {AppStateType} from "../../store/store";

export const TrendingFeedContainerComponent = function ({requestTrendingFeed, trending, error}: PropsFromRedux) {
    useEffect(() => {
        requestTrendingFeed();
    }, []);

    return <TrendingFeed trending={trending} error={error}/>;
};

const mapStateToProps = (state: AppStateType) => ({
    trending: state.trending.trendingFeed,
    error: state.trending.errors,
});

const connector = connect(mapStateToProps, {requestTrendingFeed});
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(TrendingFeedContainerComponent)

