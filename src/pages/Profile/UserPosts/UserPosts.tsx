import React, {ChangeEvent, useState} from 'react';
import Pagination from '@mui/material/Pagination';
import style from '../profile.module.css';
import { getPageCount, getPortionPage } from '../../../services/paginationPage';
import UserPostItem from './UserPostItem';
import {PostType} from "../../../domain/PostType";

type Props = {
    trending: PostType[]
    pageSize: number
}

const UserPosts = function ({ trending, pageSize }: Props) {
    const portionPage = getPortionPage(trending, pageSize);

    const pageCount = getPageCount(trending, pageSize);

    const [page, setPage] = useState(1);

    const handleChangePage = (event:ChangeEvent<unknown>, value: number): void => {
        setPage(value);
    };

    return (
        <div data-testid="userPosts">
            <div className={style.profilePosts}>
                {portionPage[page - 1].map((p) => (
                    <UserPostItem post={p} key={p.id} />
                ))}
            </div>
            <Pagination
                count={pageCount}
                page={page}
                onChange={handleChangePage}
                className={style.pagination}
            />
        </div>
    );
};

export default UserPosts;
