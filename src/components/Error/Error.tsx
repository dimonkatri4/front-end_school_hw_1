import React from 'react';
import Button from '@mui/material/Button';
import style from './error.module.css';
import {ErrorType} from "../../domain/ErrorType";

type Props = {
    errors: ErrorType
}

const Error = function ({ errors }: Props) {
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

export default Error;
