import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TrendingFeed from './TrendingFeed';
import requestTrendingFeed from '../../services/requestTrendingFeed.thunk';
import {getTrendingErrorsSelector, getTrendingFeedSelector} from "../../store/selectors/trending-selectors";

const TrendingFeedContainer = function () {

    const trending = useSelector(getTrendingFeedSelector);
    const error = useSelector(getTrendingErrorsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestTrendingFeed());
    }, []);

    return <TrendingFeed trending={trending} error={error}/>;
};

export default TrendingFeedContainer


