import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './Error';

const errorString = 'Some error';
const errorArray = ['e1', 'e2'];

describe('Error component', () => {
    it('Error render', () => {
        render(<Error errors={errorString} />);
        expect(screen.getByTestId('error')).toBeInTheDocument();
    });
    it('render component when prop errors is string', () => {
        render(<Error errors={errorString} />);
        expect(screen.getByTestId('errorString')).toBeInTheDocument();
        expect(screen.queryByTestId(errorArray[0])).toBeNull();
        expect(screen.getByText(errorString)).toBeInTheDocument();
    });
    it('render component when prop errors is array', () => {
        render(<Error errors={errorArray} />);
        expect(screen.getByTestId(errorArray[0])).toBeInTheDocument();
        expect(screen.getByTestId(errorArray[1])).toBeInTheDocument();
        expect(screen.queryByTestId('errorString')).toBeNull();
        expect(screen.getByText(errorArray[0])).toBeInTheDocument();
        expect(screen.getByText(errorArray[1])).toBeInTheDocument();
    });
});
