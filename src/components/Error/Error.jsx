import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import style from './error.module.css';

const Error = function ({ errors }) {
    return (
        <div className={style.errorBlock} data-testid="error">
            <h1>Error!</h1>
            {Array.isArray(errors) ? (
                errors.map((error) => (
                    <div className={style.errorItem} key={error} data-testid={error}>
                        {error}
                    </div>
                ))
            ) : (
                <div className={style.errorItem} data-testid="errorString">
                    {errors}
                </div>
            )}
            <Button href="/" variant="contained">
                Go to Home Page
            </Button>
        </div>
    );
};

Error.propTypes = {
    errors: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
};

export default Error;
