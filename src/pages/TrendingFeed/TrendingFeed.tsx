import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import style from './trendingFeed.module.css';
import Error from '../../components/Error/Error';
import PostItem from './PostItem/PostItem';
import {ErrorType} from "../../domain/ErrorType";
import {PostType} from "../../domain/PostType";

type Props ={
    trending: PostType[] | null
    error: ErrorType | null
}

const TrendingFeed = function ({ trending, error }: Props) {
    if (error) {
        return <Error errors={error} />;
    }

    if (!trending) {
        return (
            <div data-testid="preloader">
                <CircularProgress />
            </div>
        );
    }
    return (
        <div className={style.trendingPage} data-testid="trendingPage">
            {trending.map((t) => (
                <PostItem post={t} key={t.id} />
            ))}
        </div>
    );
};

export default TrendingFeed;