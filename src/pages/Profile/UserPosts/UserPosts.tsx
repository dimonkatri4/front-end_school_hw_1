import React, {ChangeEvent, useState} from 'react';
import {useSelector} from "react-redux";
import Pagination from '@mui/material/Pagination';
import style from '../profile.module.css';
import { getPageCount, getPortionPage } from '../../../store/selectors/pagination-selectors';
import UserPostItem from './UserPostItem';


const UserPosts = function () {
    const portionPage = useSelector(getPortionPage)

    const pageCount = useSelector(getPageCount)

    const [page, setPage] = useState(1)

    const handleChangePage = (event:ChangeEvent<unknown>, value: number): void => {
        setPage(value)
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
