import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import PropTypes from 'prop-types';
import style from './profile.module.css';
import {getPageCount, getPortionPage} from "../../../services/paginationPage";
import UserPost from "./UserPost";

const UserPosts = function ({ trending, pageSize }) {

    const portionPage = getPortionPage(trending, pageSize);

    const pageCount = getPageCount(trending, pageSize);

    const [page, setPage] = useState(1);

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    return (
        <div>
            <div className={style.profilePosts}>
                {portionPage[page - 1].map((p) => (
                    <UserPost post={p} key={p.id} />
/*                    <div className={style.postItem} key={p.id}>
                        <span>
                            <FontAwesomeIcon icon={faPlay} /> {p.playCount}
                        </span>
                        <video
                            controls
                            loop
                            poster={p.covers.default}
                            className={style.video}
                            key={p.id}
                        >
                            <source src={p.videoUrl} />
                            <track kind="captions" />
                        </video>
                    </div> */
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
    pageSize: PropTypes.number.isRequired
};

UserPosts.defaultProps = {
    trending: [],
};

export default UserPosts;
