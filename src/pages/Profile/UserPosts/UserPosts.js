import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import PropTypes from 'prop-types';
import style from '../profile.module.css';
import { getPageCount, getPortionPage } from '../../../services/paginationPage';
import UserPostItem from './UserPostItem';

const UserPosts = function ({ trending, pageSize }) {
    const portionPage = getPortionPage(trending, pageSize);

    const pageCount = getPageCount(trending, pageSize);

    const [page, setPage] = useState(1);

    const handleChangePage = (event, value) => {
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

UserPosts.propTypes = {
    trending: PropTypes.array,
    pageSize: PropTypes.number.isRequired,
};

UserPosts.defaultProps = {
    trending: [],
};

export default UserPosts;
