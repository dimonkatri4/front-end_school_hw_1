import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import TrendingFeed from './TrendingFeed';
import requestTrendingFeed from '../../services/requestTrendingFeed.thunk';
import {PostType} from "../../domain/PostType";
import {ErrorType} from "../../domain/ErrorType";
import {AppStateType} from "../../store/store";

type MapStatePropsType = {
    trending: PostType[] | null
    error: ErrorType | null
}

type MapDispatchPropsType = {
    requestTrendingFeed: () => void
}

type Props = MapStatePropsType & MapDispatchPropsType;

export const TrendingFeedContainerComponent = function ({requestTrendingFeed, trending, error}: Props) {
    useEffect(() => {
        requestTrendingFeed();
    }, []);

    return <TrendingFeed trending={trending} error={error}/>;
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    trending: state.trending.trendingFeed,
    error: state.trending.errors,
});

export default connect<MapStatePropsType, MapDispatchPropsType, null, AppStateType>
(mapStateToProps, {requestTrendingFeed})(TrendingFeedContainerComponent);
