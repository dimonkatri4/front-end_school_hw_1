import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TrendingFeed from './TrendingFeed';
import requestTrendingFeed from '../../services/requestTrendingFeed.thunk';
import {RootState} from "../../rtk-store/rtk-store";

const TrendingFeedContainer = function () {

    const trending = useSelector((state: RootState) => state.trending.trendingFeed);
    const error = useSelector((state: RootState) => state.trending.errors);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestTrendingFeed());
    }, []);

    return <TrendingFeed trending={trending} error={error}/>;
};

export default TrendingFeedContainer


