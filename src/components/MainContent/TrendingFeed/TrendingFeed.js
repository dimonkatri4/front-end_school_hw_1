import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import style from './trendingFeed.module.css';
import Error from '../../Error/Error';
import Post from './Post';

const TrendingFeed = function ({ trending, error }) {
    if (error) {
        return <Error errors={error} />;
    }

    if (!trending) {
        return (
            <div>
                <CircularProgress />
            </div>
        );
    }
    return (
        <div className={style.trendingPage}>
            {trending.map((t) => (
                <Post post={t} key={t.id} />
            ))}
        </div>
    );
};

TrendingFeed.propTypes = {
    trending: PropTypes.array,
    error: PropTypes.string,
};

TrendingFeed.defaultProps = {
    trending: [],
    error: '',
};

export default TrendingFeed;
