import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TrendingFeed from './TrendingFeed';
import requestTrendingFeed from '../../services/requestTrendingFeed.thunk';
import {AppStateType} from '../../store/store';

const TrendingFeedContainer = function () {

    const trending = useSelector((state: AppStateType) => state.trending.trendingFeed);
    const error = useSelector((state: AppStateType) => state.trending.errors);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestTrendingFeed());
    }, []);

    return <TrendingFeed trending={trending} error={error}/>;
};

export default TrendingFeedContainer


